# 💼 React Native Mini Mart App

A beautifully crafted mobile shopping experience that allows users to browse products, view details, add to cart, and manage favorites — built using **React Native** and **Zustand**.

---

## 📱 Features

* 🏠 **Product Listing**: Grid view of products with images, prices, and names.
* 🔍 **Search Functionality**: Real-time product filtering by name.
* 📄 **Product Details**: Detailed view of each product with description.
* 🛒 **Cart Management**: Add, remove, and update quantities of cart items.
* ❤️ **Favorites System**: Mark/unmark products as favorites.
* 🔔 **Toasts & Notifications**: Feedback when products are added to cart or favorites.
* 🚀 **Smooth Navigation**: Intuitive flow between screens with a bottom navigation menu.

---

## 🧱 Tech Stack

| Layer              | Technology                                                                  |
| ------------------ | --------------------------------------------------------------------------- |
| Framework          | [React Native](https://reactnative.dev/)                                    |
| State Management   | [Zustand](https://github.com/pmndrs/zustand)                                |
| Navigation         | [React Navigation](https://reactnavigation.org/)                            |
| Persistent Storage | [AsyncStorage](https://github.com/react-native-async-storage/async-storage) |
| UI Styling         | [StyleSheet, Tailwind](https://reactnative.dev/docs/style)                            |
| Local Data Source  | Static `json`                                                        |

---

## 🚀 Getting Started

### 📦 Prerequisites

* Node.js >= 14.x
* Yarn or npm
* Expo CLI (Recommended)

  ```bash
  npm install -g expo-cli
  ```

---

### 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/product-catalog-app.git

# Navigate to the project directory
cd product-catalog-app

# Install dependencies
yarn install
# or
npm install
```

---

### ▶️ Run the App

```bash
# Start the Expo dev server
expo start
```

Then:

* Press `i` to open in iOS simulator (macOS only)
* Press `a` to open in Android emulator
* Scan the QR code using the Expo Go app on your physical device

---

## 📂 Folder Structure

```
/assets             → App assets (images, fonts)
/components         → Shared UI components
/screens            → All screen components (Home, Cart, Favorites and Profile)
/store              → Zustand stores (cart, favorites)
/data/products.ts   → Static product data
/App.tsx            → App entry point
```

---

## 🗂️ Screenshots

| Home Screen                     | Product Details                       | Cart Page                       |
| ------------------------------- | ------------------------------------- | ------------------------------- |
| ![Home](./screenshots/home.png) | ![Details](./screenshots/details.png) | ![Cart](./screenshots/cart.png) |

---

## 🧠 State Management Overview

Zustand is used to manage:

* **Cart Items** with persistence (via AsyncStorage)
* **Favorite Products**
* **Total Cart Quantity & Subtotal**

Each store includes selectors and actions for scalable and readable state updates.

---

## 📦 Static Product Data

Products are sourced from a local file:
`/data/products.ts`
This avoids the need for any backend setup.

---

## 👨‍💻 Author

**ANIAH MOSES LIPEUNIM (Devlipeunim)**
[GitHub](https://github.com)
# React-Native-MiniMart-App
