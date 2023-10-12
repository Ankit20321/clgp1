// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCEnFoxUP8xehJCWrC5rqMtw_VGGhdiYAc",
    authDomain: "collegeproject-75d6c.firebaseapp.com",
    projectId: "collegeproject-75d6c",
    storageBucket: "collegeproject-75d6c.appspot.com",
    messagingSenderId: "404205032952",
    appId: "1:404205032952:web:1439d66596fbf57546320d",
    measurementId: "G-VR6P37JZ1Q"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const usersnapshot = await getDoc(userDocRef);
    console.log(usersnapshot);
    console.log(usersnapshot.exists());

}