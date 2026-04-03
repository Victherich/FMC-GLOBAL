

// // Import the functions you need from the SDKs
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // FMC Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBJWY-am7yBGnLbw1r_4N76zKvR3jpInqA",
//   authDomain: "fmc-website-d6b93.firebaseapp.com",
//   projectId: "fmc-website-d6b93",
//   storageBucket: "fmc-website-d6b93.firebasestorage.app",
//   messagingSenderId: "170416154096",
//   appId: "1:170416154096:web:f5b67b7f4b9c2c672ee935",
//   measurementId: "G-NCFY60FX86"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Analytics safely (for SSR environments)
// let analytics;
// if (typeof window !== "undefined") {
//   analytics = getAnalytics(app);
// }

// // Firebase services
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export { analytics };




import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ==============================
// 🔵 MAIN APP (FMC)
// ==============================
const mainConfig = {
  apiKey: "AIzaSyBJWY-am7yBGnLbw1r_4N76zKvR3jpInqA",
  authDomain: "fmc-website-d6b93.firebaseapp.com",
  projectId: "fmc-website-d6b93",
  storageBucket: "fmc-website-d6b93.firebasestorage.app",
  messagingSenderId: "170416154096",
  appId: "1:170416154096:web:f5b67b7f4b9c2c672ee935",
  measurementId: "G-NCFY60FX86"
};

// Default app (your main app)
const mainApp = initializeApp(mainConfig);

// Services (MAIN)
export const auth = getAuth(mainApp);
export const db = getFirestore(mainApp);

// Analytics (safe for browser only)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(mainApp);
}
export { analytics };


// ==============================
// 🔴 PAYMENT APP (SECOND PROJECT)
// ==============================
const paymentConfig = {
  apiKey: "AIzaSyB4o9Novs9l_htjfwa9SCi_1vPjfS5LDyo",
  authDomain: "digital-store-c5a11.firebaseapp.com",
  projectId: "digital-store-c5a11",
  storageBucket: "digital-store-c5a11.firebasestorage.app",
  messagingSenderId: "158469298026",
  appId: "1:158469298026:web:86ec2028167d5c01ac7713",
  measurementId: "G-3RP5H3VS22"
};

// 👇 IMPORTANT: give it a name!
const paymentApp = initializeApp(paymentConfig, "paymentApp");

// Firestore for PAYMENT project
export const paymentDb = getFirestore(paymentApp);