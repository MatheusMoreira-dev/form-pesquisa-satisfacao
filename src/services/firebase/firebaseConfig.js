import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8C5aNNi6YIMrmDy4mnSSxbasONhSkkxM",
  authDomain: "pesquisa-satisfacao-lagoa.firebaseapp.com",
  projectId: "pesquisa-satisfacao-lagoa",
  storageBucket: "pesquisa-satisfacao-lagoa.firebasestorage.app",
  messagingSenderId: "996139957854",
  appId: "1:996139957854:web:1ec716078d22413ab2fecf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
