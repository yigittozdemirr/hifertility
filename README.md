# 🌸 HiFertility: Smart Fertility & Health Tracker

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![Android](https://img.shields.io/badge/Platform-Android-green?style=for-the-badge&logo=android)](https://www.android.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> A digital fertility tracking assistant that personalizes the reproductive health journey through scientific insights, local data privacy, and an elegant, calming interface.

---

## 📥 Delivery Assets

- **[Download APK (v1.0.0)](https://github.com/yigittozdemirr/hifertility/releases/tag/1.0.0)** – *Fully bundled, offline-ready standalone application (176 MB).*
- **Demo Video:** Check out `app.mp4` included in the repository root for a full UI/UX walkthrough.

---

## 🎯 Project Overview

HiFertility bridges the gap between complex biological data and user-centered digital experiences. Designed to reduce tracking anxiety and make health data accessible, the application provides cycle tracking, fertility window predictions, and intuitive data visualization dashboards. 

By prioritizing a minimal interface and offline-first capabilities, HiFertility ensures that users have secure, immediate access to their reproductive health insights without requiring an internet connection.

## ✨ Key Features

- 📈 **Smart Cycle Prediction:** Accurately calculates fertility windows based on user-inputted health parameters.
- 📊 **Health Data Visualization:** Comprehensive graphs and summary dashboards for easy tracking.
- 🎨 **Calming Pastel UI System:** A clinical yet stress-free, aesthetically pleasing interface design.
- 📱 **Fully Bundled Offline APK:** Operates completely independently without requiring cloud connectivity.
- 🔐 **Privacy-First Local Storage:** All sensitive health data is stored strictly on the user's device.

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React Native** | Cross-platform mobile development core |
| **Expo SDK** | Native module and ecosystem management |
| **Context API** | Global state management across the application |
| **Android NDK / CMake** | Optimized native C++ build integration |

## 📁 Project Structure

```text
.
├── backend/                  # Server-side logic and API integrations (if applicable)
├── frontend/                 # React Native / Expo mobile application source code
├── app.mp4                   # UI/UX Demo Video
├── build-trigger.md          # CI/CD & Build execution logs
├── package.json              # Project dependencies and scripts
├── bun.lock                  # Bun package manager lockfile
└── README.md                 # Project documentation

```
## 🚀 Local Development Setup
## 1. Clone the repository
```bash
git clone [https://github.com/yigittozdemirr/hifertility.git](https://github.com/yigittozdemirr/hifertility.git)
cd hifertility
```

## 2. Install dependencies
```bash
npm install 
# or use bun install if preferred, based on the bun.lock file
```

## 3. Start the development server
```bash
npx expo start --tunnel
```

## 4. Run on your device
Scan the generated QR code using the Expo Go app on your Android or iOS device.

## 📦 Production Build (Offline Standalone APK)
To ensure the application runs independently and with high performance on Android devices, a strict Native Build process was implemented.

## 1. JavaScript Bundling
To physically seal the code and assets inside the APK for offline use, an Offline Bundle was generated:

```bash
npx expo export:embed --platform android --dev false \
  --bundle-output android/app/src/main/assets/index.android.bundle \
  --assets-dest android/app/src/main/res
```

## 2. Native Compilation (Android Studio)
Build System: Libraries were adapted for the native architecture using CMake and Ninja compilers.

Gradle: Executed a Clean Project to purge caches, followed by building the final release APK containing all dependencies.

Result: A fully self-contained app-debug.apk that functions entirely offline without external server requests.

## 📌 Future Roadmap
[ ] Cloud sync & backup capabilities

[ ] User authentication system

[ ] Advanced analytics and symptom correlation

[ ] PDF health report generation & export

[ ] Native iOS build support (IPA)

## 👨‍💻 Developer
Yiğit Özdemir
Software Engineering Student | Mobile App Developer

**GitHub:** @yigittozdemirr
