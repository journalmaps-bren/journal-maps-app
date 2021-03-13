import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC-0jHd68lvp4SH8CKsZ2YkbJWVdZTuD18",
  authDomain: "journal-maps.firebaseapp.com",
  projectId: "journal-maps",
  storageBucket: "journal-maps.appspot.com",
  messagingSenderId: "219743944012",
  appId: "1:219743944012:web:86b674375d415cc2b323e9",
  measurementId: "G-BVWVML80M0"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export { auth };