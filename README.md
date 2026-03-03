# 🌸 HiFertility: Akıllı Doğurganlık & Sağlık Takibi

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![Android](https://img.shields.io/badge/Platform-Android-green?style=for-the-badge&logo=android)](https://www.android.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **TR:** Bilimsel veriler ve zarif bir arayüz ile doğurganlık sürecini kişiselleştiren dijital sağlık takip asistanı.  
> **EN:** A digital fertility tracking assistant that personalizes the reproductive health journey through scientific insights and an elegant interface.

---

## 🔗 Delivery Assets / Teslimat Dosyaları

👉 **[Download APK (v1.0.0)](https://github.com/yigittozdemirr/hifertility/releases/tag/1.0.0)**  
👉 **Video:** Repo içerisinde uygulama videosu(.mp4) gönderilmiştir.

> ⚠️ APK dosyası tüm bağımlılıkları içerecek şekilde bundle edilmiştir ve offline çalışır.

---

# 🇹🇷 Türkçe Versiyon

## 🎯 Proje Özeti

HiFertility, karmaşık biyolojik ve sağlık verilerini kullanıcı dostu bir mobil deneyime dönüştürmek amacıyla geliştirilmiştir.

Uygulama:
- Adet döngüsü takibi
- Doğurganlık penceresi tahmini
- Grafiksel veri görselleştirme

özellikleri ile kullanıcıya bilimsel temelli içgörüler sunar.

Amaç:
- Kullanıcı stresini azaltmak  
- Sağlık verilerini anlaşılır hale getirmek  
- Minimal ve güven veren bir arayüz sunmak  

---

## ✨ Öne Çıkan Özellikler

- 📈 **Akıllı Döngü Tahmini:** Kullanıcı girdilerine göre doğurganlık penceresi hesaplama  
- 📊 **Veri Görselleştirme:** Grafik ve özet ekranları  
- 🎨 **Pastel Klinik UI:** Güven veren, sade tasarım  
- 📱 **Offline-Ready APK:** İnternet gerektirmez  
- 🔐 **Yerel Veri Saklama:** Veriler cihaz üzerinde tutulur  

---

## 🛠️ Teknolojik Altyapı

| Teknoloji | Kullanım Amacı |
|------------|----------------|
| React Native | Çapraz platform mobil geliştirme |
| Expo SDK | Native modül yönetimi |
| Context API | Global state yönetimi |
| Android NDK / CMake | Optimize edilmiş native build |

---

# 🇺🇸 English Version

## 🎯 Project Overview

HiFertility bridges the gap between complex biological data and user-centered digital experiences.

The app provides:

- Cycle tracking  
- Fertility window prediction  
- Data visualization dashboards  

Its mission is to transform raw health inputs into meaningful and accessible insights.

---

## ✨ Key Features

- 📈 Smart cycle prediction  
- 📊 Health data visualization  
- 🎨 Calm pastel UI system  
- 📱 Fully bundled offline APK  
- 🔐 Local data storage  

---

## 🚀 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yigittozdemirr/hifertility.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the project

```bash
npx expo start --tunnel
```

### 4️⃣ Run on device

Scan the QR code using **Expo Go** on Android or iOS.

---

# 📦 Build APK (Offline Bundle)

Uygulamanın Android cihazlarda bağımsız (standalone) ve performanslı çalışabilmesi için **Native Build** süreci izlenmiştir.

### 1️⃣ JavaScript Bundling

Kodların ve varlıkların (assets) APK içine fiziksel olarak mühürlenmesi için aşağıdaki komut ile *Offline Bundle* oluşturulmuştur:

```bash
npx expo export:embed --platform android --dev false --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

---

### 2️⃣ Native Compilation (Android Studio)

- **Build System:** CMake ve Ninja derleyicileri kullanılarak kütüphaneler yerel mimariye uygun hale getirilmiştir.  
- **Gradle:** Gereksiz önbellekler temizlenmiş (*Clean Project*) ve projenin tüm bağımlılıkları içeren final APK çıktısı üretilmiştir.  
- **Output:** İnternet veya harici bir sunucu bağlantısı gerektirmeyen, tamamen bağımsız çalışan **176 MB boyutunda `app-debug.apk`** elde edilmiştir.

## 📌 Roadmap

- [ ] Cloud sync
- [ ] Authentication system
- [ ] Advanced analytics
- [ ] PDF health report export
- [ ] iOS build support

---

## 👨‍💻 Developer

**Yiğit Özdemir**  
GitHub: https://github.com/yigittozdemirr
