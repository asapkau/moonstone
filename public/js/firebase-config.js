/*
 * Firebase Configuration for Moonstone
 * Modular SDK v10+ (ES Module)
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJy2DqJdEWGjnePQ05QvPcTkhKTm4D4BE",
  authDomain: "moonstonebyzalak.firebaseapp.com",
  projectId: "moonstonebyzalak",
  storageBucket: "moonstonebyzalak.firebasestorage.app",
  messagingSenderId: "1068513047523",
  appId: "1:1068513047523:web:d28d481d4219e31142e6d6",
  measurementId: "G-1Y5LT9Y8PK"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
