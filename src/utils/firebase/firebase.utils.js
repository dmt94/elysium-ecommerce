/*
library just for firebase

initializeApp is a JS library
that abstracts away functionality needed to use
in order to interact with instance of firebase
- CRUD actions plus authenticating use firebaseApp instance

*/
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider, 
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBeF4IgkyzsRBooQijwFor9bRNeTtRIHZ8",
  authDomain: "elysian-c1c98.firebaseapp.com",
  projectId: "elysian-c1c98",
  storageBucket: "elysian-c1c98.appspot.com",
  messagingSenderId: "416677839426",
  appId: "1:416677839426:web:5171a768b0ba48eb5063db"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//GoogleAuthProvider is a class
const provider = new GoogleAuthProvider();

//everytime someone interacts with provider, much create acc
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//directly points to database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  //get document reference inside database db under users collection under userAuth.uid
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  //shows a point in database (isnt made yet) and inside user collection is the user id

  const userSnapshot = await getDoc(userDocRef);
  //has exists() method , check if data exists
  //good patter of if exist ? || !exist -> create
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }

    return userDocRef;
  }
  //if user data does not exist


  //if user data exists


  //return userDocRef


}