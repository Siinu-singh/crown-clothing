import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDxVVh8JhgOyQqXwb02BTxnaS7pp2tL9Xw",
  authDomain: "crown-db-398e6.firebaseapp.com",
  projectId: "crown-db-398e6",
  storageBucket: "crown-db-398e6.firebasestorage.app",
  messagingSenderId: "874257930080",
  appId: "1:874257930080:web:d87cbd17a4099950233005",
  measurementId: "G-1840F37TKM",
};

// Initialize Firebase
const firebaseApp = initializeApp(config);

// Initialize services
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

// Google Auth Provider setup
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
