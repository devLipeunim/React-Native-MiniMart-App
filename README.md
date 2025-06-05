# 💼 React Native Mini Mart App

A beautifully crafted mobile shopping experience that allows users to browse products, view details, add to cart, manage favorites, and search — built using **React Native** and **Zustand**.

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
| UI Styling         | [StyleSheet, Tailwind](https://reactnative.dev/docs/style)                  |
| Local Data Source  | Static `products.json` file                                                 |

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
git clone https://github.com/devLipeunim/React-Native-MiniMart-App.git

# Navigate to the project directory
cd React-Native-MiniMart-App

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
/screens            → All screen components (Home, Cart, Favorites, Profile)
/store              → Zustand stores (cart, favorites)
/data/products.ts   → Static product data
/App.tsx            → App entry point
```

---

## 🖼️ Screenshots

| Home                                                                                                                              | Details                                                                                                                              | Cart                                                                                                                              | Favorites                                 | Favorites Filled                              | Item added to cart                             | Item added to favorites                                 | Profile                                  |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ----------------------------------- | --------------------------------- | --------------------------------------- | ------------------------------------------- |
| ![Home](https://res.cloudinary.com/dgo34pzy5/image/upload/v1749121991/Screenshot_2025-06-05-12-04-46-876_com.miniMart_oostyc.jpg) | ![Details](https://res.cloudinary.com/dgo34pzy5/image/upload/v1749121991/Screenshot_2025-06-05-12-06-24-276_com.miniMart_mdudr5.jpg) | ![Cart](https://res.cloudinary.com/dgo34pzy5/image/upload/v1749121991/Screenshot_2025-06-05-12-05-53-891_com.miniMart_mmzafk.jpg) | ![Favorites](https://res.cloudinary.com/dgo34pzy5/image/upload/v1749121989/Screenshot_2025-06-05-12-05-59-815_com.miniMart_wkfq8v.jpg) | ![Favorites Filled](https://res.cloudinary.com/dgo34pzy5/image/upload/v1749121991/Screenshot_2025-06-05-12-06-47-449_com.miniMart_hnodlz.jpg) | ![Item added to cart](https://res.cloudinary.com/dgo34pzy5/image/upload/v1749121991/Screenshot_2025-06-05-12-06-38-162_com.miniMart_llbujx.jpg) | ![Item added to favorites ](https://res.cloudinary.com/dgo34pzy5/image/upload/v1749121991/Screenshot_2025-06-05-12-06-31-446_com.miniMart_abztge.jpg) | ![Profile](https://res.cloudinary.com/dgo34pzy5/image/upload/v1749121992/Screenshot_2025-06-05-12-06-54-556_com.miniMart_l1ce5b.jpg) |

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
[GitHub](https://github.com/devLipeunim/React-Native-MiniMart-App)
