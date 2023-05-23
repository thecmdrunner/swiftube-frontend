import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { env } from "~/env.mjs";

const paidConfig = {
  apiKey: env.PAID_FIREBASE_API_KEY,
  authDomain: env.PAID_FIREBASE_AUTH_DOMAIN,
  projectId: env.PAID_FIREBASE_PROJECT_ID,
  storageBucket: env.PAID_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.PAID_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.PAID_FIREBASE_APP_ID,
};

/**
 *  TODO: Keep DB and storage separate in Firebase. *
 *
 */

const freeConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
};

// Initialize Firebase
export const paidApp = initializeApp(paidConfig);
export const freeApp = initializeApp(freeConfig);
export const db = getFirestore(freeApp);
