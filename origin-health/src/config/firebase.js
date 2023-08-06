
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {getAuth  } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyALbs_PjCyFRgOJv2_RKXWfW6XezNmYU0w",
  authDomain: "origin-health.firebaseapp.com",
  projectId: "origin-health",
  storageBucket: "origin-health.appspot.com",
  messagingSenderId: "310271157800",
  appId: "1:310271157800:web:688915dbfc95ba1ba9771d",
  measurementId: "G-ZCEH2E8RDV"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
// const analytics = getAnalytics(app);

export const db= getFirestore(app);