// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCdaP5A2uX8JaG0ZlgXMS5XZbFiovuzR9Y',
  authDomain: 'first-test-app-radix.firebaseapp.com',
  projectId: 'first-test-app-radix',
  storageBucket: 'first-test-app-radix.appspot.com',
  messagingSenderId: '341900661060',
  appId: '1:341900661060:web:bfcffb51ddcb4bab428711',
  measurementId: 'G-TP408VFRBQ',
};

export const firebase = initializeApp(firebaseConfig);
