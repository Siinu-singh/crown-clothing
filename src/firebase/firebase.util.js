import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
} from "firebase/firestore";

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
provider.setCustomParameters({ prompt: 'select_account' });

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = doc(firestore, 'users', userAuth.uid);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.error('Error creating user', error.message);
        }
    }

    return userRef;
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    await createUserProfileDocument(result.user);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};

export default firebaseApp;
