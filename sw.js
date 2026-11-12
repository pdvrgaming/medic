// @ts-nocheck
/// <reference lib="webworker" />
// MEDIC Service Worker - Offline-First App Shell Cache
// Bump CACHE_NAME on every release so users receive the new files.
const CACHE_NAME = 'medic-pwa-v3';

const STATIC_ASSETS = [
  './',
  './index.html',
  './src/app.js',
  './favicon.svg',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// CDN files the page needs at start-up. They are cross-origin ("opaque") responses,
// so they must be fetched with no-cors and cached explicitly, otherwise the app
// loses its styling/icons when opened offline.
// BEST FIX: download these into the project (e.g. ./vendor/) and list them above.
const CDN_ASSETS = [
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest',
  'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js'
];

// Never cache these (live data / privacy: medicine names typed by the user).
const NO_CACHE_HOSTS = ['api.fda.gov'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(STATIC_ASSETS);
      // One failing CDN must not break the whole install.
      await Promise.all(CDN_ASSETS.map((url) =>
        fetch(new Request(url, { mode: 'no-cors' }))
          .then((res) => cache.put(url, res))
          .catch(() => {})
      ));
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Stale-while-revalidate: instant from cache (works offline and on slow networks),
// refreshed in the background when online.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (req.method !== 'GET' || !url.protocol.startsWith('http')) return;
  if (NO_CACHE_HOSTS.includes(url.hostname)) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req, { ignoreSearch: false });

    const network = fetch(req).then((res) => {
      // status 0 / type 'opaque' = successful cross-origin no-cors response
      if (res && (res.status === 200 || res.type === 'opaque')) {
        cache.put(req, res.clone());
      }
      return res;
    }).catch(() => null);

    if (cached) {
      event.waitUntil(network);
      return cached;
    }

    const res = await network;
    if (res) return res;

    if (req.mode === 'navigate') {
      const shell = (await cache.match('./index.html')) || (await cache.match('./'));
      if (shell) return shell;
    }
    return new Response('Offline: MEDIC is running in offline mode.', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/plain' }
    });
  })());
});
