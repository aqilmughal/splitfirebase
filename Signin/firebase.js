import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAe0k2Tt0NoZfj000RKmVAv1TWhezLOfms",
  authDomain: "splitwise-app-1fdca.firebaseapp.com",
  projectId: "splitwise-app-1fdca",
  storageBucket: "splitwise-app-1fdca.appspot.com",
  messagingSenderId: "865704626572",
  appId: "1:865704626572:web:8a589493e687063b616ea9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();

export { app , auth , database};



