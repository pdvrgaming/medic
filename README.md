# MEDIC — Offline-First Family Medicine Routine & Inventory Guardian

<div align="center">

![MEDIC Animated Banner](banner.svg)

[![Live App Demo](https://img.shields.io/badge/Live%20App%20Demo-https%3A%2F%2Fpdvrgaming.github.io%2Fmedic%2F-0F766E?style=for-the-badge&logo=googlechrome&logoColor=white)](https://pdvrgaming.github.io/medic/)
[![PWA Ready](https://img.shields.io/badge/PWA-Installable%20Offline-14B8A6?style=for-the-badge&logo=pwa&logoColor=white)](https://pdvrgaming.github.io/medic/)
[![Indian Health Standards](https://img.shields.io/badge/Medical%20Standard-NLEM%202022%20%7C%20CDSCO-teal?style=for-the-badge)](https://cdsco.gov.in/)
[![Voice TTS](https://img.shields.io/badge/Voice%20Reading-Aarti%20Natural%20Indian%20Accent-0D9488?style=for-the-badge&logo=soundcharts&logoColor=white)](#voice-tts)
[![Zero Cloud Privacy](https://img.shields.io/badge/Privacy-100%25%20Client--Side%20IndexedDB-10B981?style=for-the-badge&logo=shield&logoColor=white)](#privacy)

<p align="center">
  <strong>A resilient, 100% offline-first Progressive Web Application (PWA) tailored for Indian multi-generational households to track medical routines, stock depletion, OCR packaging, and pharmacy reorders with zero subscription fees, zero cloud surveillance, and authentic Indian accent voice guidance.</strong>
</p>

[**🚀 Launch Web App**](https://pdvrgaming.github.io/medic/) • [**📱 Install PWA**](#pwa-installation) • [**💊 Medicine Catalogue**](#indian-medical-intelligence) • [**💬 WhatsApp Ordering**](#whatsapp-refill-generator) • [**🏗️ Architecture**](#system-architecture)

---

</div>

## 📌 Repository Information

- **Website / Live Demo:** [https://pdvrgaming.github.io/medic/](https://pdvrgaming.github.io/medic/)
- **Repository:** [https://github.com/pdvrgaming/medic.git](https://github.com/pdvrgaming/medic.git)
- **Short Description:** *Offline-first family medicine routine scheduler, inventory stock tracker, NLEM/CDSCO Indian health standard intellisense, and natural voice dose assistant for Indian households.*
- **GitHub Topics / Tags:** `pwa`, `offline-first`, `healthcare`, `medicine-tracker`, `nlem-cdsco`, `indexeddb`, `text-to-speech`, `web-audio-api`, `tesseract-ocr`, `family-health`, `whatsapp-integration`, `telugu`, `hindi`, `indian-healthcare`

---

## 🌟 Core Superpowers

### 1. ⚡ 100% Offline PWA for All Operating Systems
- Fully compliant with **W3C Progressive Web App** standards with `manifest.json` and a dedicated `sw.js` Cache Storage worker.
- **Android:** One-tap install banner creating a standalone Android APK-like experience.
- **Apple iOS (iPhone & iPad):** Built-in Safari bottom-sheet guidance for *"Add to Home Screen"*.
- **Windows / macOS / ChromeOS:** Seamless standalone desktop app window with window controls overlay.
- Works in airplanes, remote villages, or basement clinic rooms with **zero internet connection**.

### 2. 🧠 NLEM / CDSCO Indian Medical Database & Google-Like Intellisense
- Preloaded with **112+ curated essential Indian medicines** conforming to the **National List of Essential Medicines (NLEM 2022)** and **CDSCO** guidelines across 13 clinical categories:
  - 🍬 **Type 2 Diabetes:** Glycomet 500, Januvia, Galvus Met, Forxiga, Jardiance, Amaryl, Lantus...
  - 🩸 **Blood Pressure / Hypertension:** Telma 40, Telma AM, Amlopres 5, Ciplar, Envas, Losar...
  - 🫀 **Heart & Cholesterol:** Atorva 10, Rosuvas, Ecosprin 75, Brilinta, Sorbitrate...
  - 🔥 **Gastric & Acidity:** Pan 40, Pan-D, Omez 20, Razo 20, Pantocid, Digene, Gelusil...
  - 💊 **Fever & Pain Relief:** Dolo 650, Calpol 500/650, Crocin, Combiflam, Zerodol-P/SP...
  - 🦋 **Thyroid Care:** Thyronorm 25/50/75/100, Eltroxin, Thyrox...
  - 🫁 **Respiratory Care & Asthma:** Asthalin, Budecort, Foracort, Montair LC, Deriphyllin...
  - 🥗 **Vitamins & Minerals:** Becosules Z, Neurobion Forte, Shelcal 500, Evion 400, Supradyn...
  - 🛡️ **Antibiotics & Infections:** Augmentin 625 Duo, Azithral 500, Taxim-O, Cifran...
- **3-Tier Prefix Fuzzy Search:** Keyboard navigable (`↑`, `↓`, `Enter`, `Esc`) with bold match highlighting.
- **Automatic Multi-Field Population:** Instantly fills Brand Name, Generic Composition, Strength, Dosage Form, Clinical Category, and recommended Food Timing (*e.g., Pantoprazole $\rightarrow$ Before Food; Metformin $\rightarrow$ After Food*).

### 3. 🏷️ Condition-Based Intelligence & Auto-Selection
- When prescribing for a family member, MEDIC automatically inspects their **diagnosed medical conditions** (*e.g., "Type 2 Diabetes, Hypertension"*).
- The modal **automatically pre-selects the relevant Health Condition chip** and presents standard Indian formulations for that exact ailment with 1 tap.

### 4. 🔊 Natural Indian Voice Dose Reader (Chrome, Safari, Edge, Android, iOS)
- Asynchronously pre-caches speech voices on startup to eliminate robotic default US synthesizers.
- **Priority Voice Matching:**
  - **Windows & Edge:** Prioritizes **Microsoft Aarti Online (Natural)** or **Heera / Neerja**.
  - **Apple Safari (iOS / macOS):** Prioritizes **Rishi**, **Sangeeta**, **Veena**, **Lekha**, or **Neel**.
  - **Google Chrome & Android:** Prioritizes **Google English (India)**, **Google हिन्दी**, or **Google తెలుగు**.
- **Humanized Cadence:** Modulated to `0.88x` speed, `1.04` pitch, and punctuated pauses so elders hear calm, clear instructions.
- Converts medical schedules and food timings across **English**, **తెలుగు (Telugu)**, and **हिन्दी (Hindi)**.

### 5. ⏰ Harmonic Web Audio API Dose Alarm & 15s Scheduler
- Zero-dependency synthesizer generating pleasant musical alert chimes (D5: 587Hz $\rightarrow$ A5: 880Hz $\rightarrow$ D6: 1175Hz) with natural exponential decay ramps.
- Background scheduler checks due schedules every 15 seconds, triggering alarms, device vibration feedback, and local notifications.

### 6. 💬 1-Tap WhatsApp Pharmacy Refill Orders
- Generate a ready-to-send formatted WhatsApp refill order to local Indian pharmacies (*Apollo Pharmacy, MedPlus, Frank Ross, or local chemists*):
  ```text
  Namaste! Please deliver pharmacy medicine refill for Sharma Family:
  1. Glycomet 500 (Metformin 500 mg) - 2 Strips [Patient: Aditya Sharma]
  2. Telma 40 (Telmisartan 40 mg) - 2 Strips [Patient: Father]
  (Sent via MEDIC Health App)
  ```

### 7. 👥 Role-Based Security for Multi-User Devices
- **CARETAKER (Full Admin):** Prescribe medicines, add/remove members, scan packaging, record purchases, and manage backups.
- **ADULT (Routine & Self):** Track doses, record purchases, and view schedules.
- **FAMILY_MEMBER (View-Only / Patient Mode):** Distraction-free senior interface; mark doses taken, listen to voice instructions, and view stock. Administrative and destructive actions are locked at the UI and IndexedDB transactional layer.

### 8. 🔍 On-Device Tesseract.js OCR Packaging Scanner
- Point camera or upload a photo of an Indian medicine strip.
- Client-side canvas preprocessing (grayscale, contrast thresholding) extracts Brand Name, Generic Composition, and Manufacturer directly into the prescription form without sending images to any server.

### 9. 📦 16-Store Atomic Backup & Restore with Safe Wipe Protection
- Exports and restores all **16 IndexedDB object stores** (`Households`, `Caretakers`, `FamilyMembers`, `Conditions`, `MedicineCatalogue`, `MemberMedicines`, `MedicineSchedules`, `DoseHistory`, `MedicineInventory`, `InventoryAdjustments`, `Purchases`, `PurchaseItems`, `RefillHistory`, `OCRRecords`, `NotificationSettings`, `ApplicationSettings`).
- **Safe Wipe Modal:** Calculates live storage size in KB, presents record counts, asks *"Shall I proceed?"*, provides a 1-click pre-wipe backup export, and safely unblocks IndexedDB connection handles to avoid hanging.

### 10. 👓 Elderly-Friendly Typography & Anti-Clutter Layout
- Calibrated font-size baselines (Normal: `15px`, Large: `17px`, Extra Large: `19px`).
- Fluid two-tier card layout prevents word breaks (*"Glycomet 500"* never splits onto two lines).
- Action buttons dock cleanly beneath medicine titles on large text modes.

---

## 🏗️ System Architecture

```mermaid
flowchart TD
  subgraph Client [Client Device / Browser Sandbox]
    UI[Tailwind & HTML5 Single Page UI]
    ServiceWorker[Service Worker (sw.js) Cache Storage]
    
    subgraph AudioEngine [Multi-Platform Audio & Speech]
      Alarm[Web Audio API Harmonic Chime Synthesizer]
      TTS[Web Speech API Indian Voice Engine<br/>(Aarti, Rishi, Sangeeta, Google IN)]
    end

    subgraph CoreEngines [Application Controllers]
      RoleGuard[Active Role & Transaction Guard<br/>(Caretaker / Adult / Family Member)]
      Intellisense[112+ NLEM / CDSCO Search Engine]
      RefillGen[WhatsApp Pharmacy Order Generator]
      OCR[Tesseract.js OCR Packaging Engine]
    end

    subgraph Storage [Private Offline Storage]
      IDB[(IndexedDB 16 Object Stores)]
      Backup[JSON Full Database Serialization]
    end
  end

  UI --> RoleGuard
  UI --> Intellisense
  UI --> TTS
  UI --> Alarm
  UI --> OCR
  UI --> RefillGen
  
  RoleGuard --> IDB
  Intellisense --> IDB
  Backup <--> IDB
  ServiceWorker <--> UI
```

---

## 📱 PWA Installation Guide

### Android (Google Chrome / Samsung Internet)
1. Open [https://pdvrgaming.github.io/medic/](https://pdvrgaming.github.io/medic/) on your Android phone.
2. An **"Install MEDIC App"** banner will slide up automatically at the bottom $\rightarrow$ Tap **Install**.
3. Or tap the **3 dots menu (⋮)** in the top right $\rightarrow$ Tap **"Install app"** or **"Add to Home screen"**.

### Apple iOS (iPhone & iPad - Safari)
1. Open [https://pdvrgaming.github.io/medic/](https://pdvrgaming.github.io/medic/) in **Safari**.
2. Tap the **Share button (⎋)** (square with arrow pointing up) on the bottom bar.
3. Scroll down and tap **"Add to Home Screen" (＋)**.
4. Tap **Add** in the top right corner. MEDIC will appear on your iOS home screen as a standalone full-screen app.

### Desktop (Windows, macOS, Linux)
1. Open the URL in Google Chrome or Microsoft Edge.
2. Click the **Install icon (⊕)** on the right side of the URL address bar $\rightarrow$ Click **Install**.
3. MEDIC launches in a dedicated window without browser address bars.

---

## 💻 Local Development Setup

MEDIC is completely self-contained in standard HTML5, CSS3, and modern JavaScript with zero build-tool bloat.

```bash
# 1. Clone the repository
git clone https://github.com/pdvrgaming/medic.git
cd medic

# 2. Open index.html directly in any browser
# On Windows:
start index.html

# Or serve locally using any lightweight HTTP server:
npx serve .
# or
python -m http.server 8080
```

---

## 🧪 Comprehensive Automated Test Suite

Every module, bug fix, and feature in MEDIC is validated via automated headless Node.js regression suites:

```bash
# Run the master regression suite covering all 14 architectural components:
node scratch/test_master_suite.js
```

```text
=================================================
=== MEDIC COMPREHENSIVE REGRESSION TEST SUITE ===
=================================================
[PASS] Codebase Integrity: 235346 bytes, 4417 lines (No trimming, full preserved logic)
[PASS] TODO-1 & 12: Font Scaling & Anti-Cluttering Reflow (Calibrated 15px/17px/19px)
[PASS] TODO-2: Favicon & SVG Medical Cross (Zero green box anomalies)
[PASS] TODO-3: Wipe All Data Modal with size calculation, deadlock fix & pre-wipe export
[PASS] TODO-4: 16-Store Export & Import with Schedule Recovery
[PASS] TODO-5: Web Audio API Alarm Synthesizer & Dose Scheduler
[PASS] TODO-6: Active Role Enforcement in UI & DB transactional layers
[PASS] TODO-7, 9 & 13: Universal Indian Accent TTS Engine (Safari, Chrome, Edge, iOS, Android)
[PASS] TODO-10 & 11: Health Category-Based Medicine Dataset & Intellisense: 112 medicines across 13 categories
[PASS] TODO-14: WhatsApp Pharmacy Refill Order Generator
=================================================
>>> ALL MASTER REGRESSION TESTS PASSED (100%) <<<
=================================================
```

---

## 🔒 Privacy & Non-Commercial Household Statement

MEDIC is developed as a completely free, privacy-first, community-oriented initiative for Indian families.
- **Zero Cloud Servers:** Your medical history, prescriptions, pill counts, and financial purchases never leave your device.
- **Zero Trackers / Ads:** No third-party analytical cookies, telemetry SDKs, or advertising identifiers.
- **Data Portability:** You own 100% of your data via the one-click JSON backup export and restore engine.

---

## 📄 License

Distributed under the **MIT License**. Free for personal household and community use.

<div align="center">
  <sub>Crafted with ❤️ for Indian families caring for their elders and loved ones.</sub>
</div>
