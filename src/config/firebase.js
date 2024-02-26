import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkhovl2ujttZAVx4IuxbQcjcz_zAml1g4",
  authDomain: "myjob-f952c.firebaseapp.com",
  projectId: "myjob-f952c",
  storageBucket: "myjob-f952c.appspot.com",
  messagingSenderId: "134037065371",
  appId: "1:134037065371:web:4004b47d16c013efdfc03e",
  measurementId: "G-5CL972SJXM"
 };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
