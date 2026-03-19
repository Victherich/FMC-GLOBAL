
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";


// const firebaseConfig = {
// apiKey: "AIzaSyDyXGxZvoGol3jDffQL01zBDRmnuhAYOkY",
// authDomain: "sliatedge.firebaseapp.com",
// projectId: "sliatedge",
// storageBucket: "sliatedge.firebasestorage.app",
// messagingSenderId: "301159507745",
// appId: "1:301159507745:web:49c9a30772931ad1ebc060"
// };


// const app = initializeApp(firebaseConfig);


// let analytics;
// if (typeof window !== "undefined") {
// analytics = getAnalytics(app);
// }


// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export { analytics };


// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// FMC Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJWY-am7yBGnLbw1r_4N76zKvR3jpInqA",
  authDomain: "fmc-website-d6b93.firebaseapp.com",
  projectId: "fmc-website-d6b93",
  storageBucket: "fmc-website-d6b93.firebasestorage.app",
  messagingSenderId: "170416154096",
  appId: "1:170416154096:web:f5b67b7f4b9c2c672ee935",
  measurementId: "G-NCFY60FX86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics safely (for SSR environments)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export { analytics };