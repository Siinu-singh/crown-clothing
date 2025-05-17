import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDoc, getFirestore, doc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDxVVh8JhgOyQqXwb02BTxnaS7pp2tL9Xw",
  authDomain: "crown-db-398e6.firebaseapp.com",
  projectId: "crown-db-398e6",
  storageBucket: "crown-db-398e6.firebasestorage.app",
  messagingSenderId: "874257930080",
  appId: "1:874257930080:web:d87cbd17a4099950233005",
  measurementId: "G-1840F37TKM",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, "users", userAuth.uid);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
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
export default firebaseApp;
