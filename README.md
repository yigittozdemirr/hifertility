# HiFertility

[![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-54-000020?style=flat-square&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Android](https://img.shields.io/badge/Platform-Android-3DDC84?style=flat-square&logo=android&logoColor=white)](https://github.com/yigittozdemirr/hifertility/releases/tag/1.0.0)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

A fertility wellness mobile app that supports the reproductive health journey with lessons, lifestyle tracking and a community space, in a calm pastel interface. The app content is mainly in Turkish.

> This app is an educational project and does not replace advice from a healthcare professional.

## Download and demo

- **Android build:** [HiFertility APK v1.0.0](https://github.com/yigittozdemirr/hifertility/releases/tag/1.0.0) (`app-debug.zip`, 53 MB). The bundle is embedded, so it runs without a development server.
- **Demo video:** [`app.mp4`](app.mp4) shows a full walkthrough of the interface.

## Features

- **Courses and lessons:** guided lessons with completion tracking and overall progress.
- **Personal roadmap:** a phase-by-phase view of the wellness journey.
- **Journey Garden and affirmations:** a visual progress garden and affirmations on the home screen.
- **Health data and lifestyle tracker:** enter details such as height, weight and cycle length, and follow lifestyle habits.
- **Homework and surveys:** assignments and questionnaires that accompany the lessons.
- **Community and experts:** forum posts, blog content with likes, and an expert consultation screen.

> Application state is kept in memory through the Context API, so entered data resets when the app restarts.

## Tech stack

| Technology | Purpose |
| --- | --- |
| React Native and Expo | Cross-platform mobile app |
| Expo Router | File-based navigation with tabs and a drawer |
| TypeScript | Type safety |
| NativeWind | Tailwind-style styling |
| Context API | Global state |
| Android NDK and CMake | Native release builds |

## Getting started

You need [Node.js](https://nodejs.org/) (LTS) and the [Expo Go](https://expo.dev/go) app or an emulator.

The app lives in the `frontend/` directory:

```bash
git clone https://github.com/yigittozdemirr/hifertility.git
cd hifertility/frontend
npm install
npm run dev
```

Scan the QR code with Expo Go on your device.

### Other commands

Run these inside `frontend/`:

| Command | Description |
| --- | --- |
| `npm run android` | Start on an Android device or emulator |
| `npm run web` | Start in the browser |
| `npm run lint` | Run ESLint and Prettier checks |
| `npm run typecheck` | Run the TypeScript compiler |

## Building the standalone APK

Bundle the JavaScript and assets into the Android project from `frontend/`:

```bash
npx expo export:embed --platform android --dev false \
  --bundle-output android/app/src/main/assets/index.android.bundle \
  --assets-dest android/app/src/main/res
```

Then open `frontend/android` in Android Studio, run **Clean Project**, and build the APK. The result is a self-contained `app-debug.apk`.

## Project structure

```text
.
├── frontend/
│   ├── app/           # Screens (Expo Router)
│   ├── components/    # Shared components
│   ├── context/       # AppContext: global state
│   ├── lib/           # Theme, API client, helpers
│   └── android/       # Native Android project
├── backend/           # Minimal Hono server template, not used by the app's screens
└── app.mp4            # Demo video
```

## Roadmap

- [ ] Persistent on-device storage
- [ ] Cycle and fertility window prediction
- [ ] Cloud sync and backup
- [ ] User authentication
- [ ] Advanced analytics and symptom correlation
- [ ] PDF health report export
- [ ] iOS build

## Author

**Yiğit Özdemir**: [@yigittozdemirr](https://github.com/yigittozdemirr)

## License

[MIT](LICENSE)
