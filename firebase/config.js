import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCa59umQbDBLDepVfkBPlQHEndLz0ZY6ak",
  authDomain: "movieapp-7888a.firebaseapp.com",
  projectId: "movieapp-7888a",
  storageBucket: "movieapp-7888a.appspot.com",
  messagingSenderId: "890468286809",
  appId: "1:890468286809:web:c45e80adfb3f6ddcfdcc48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider=new GoogleAuthProvider();
export const auth=getAuth(app);