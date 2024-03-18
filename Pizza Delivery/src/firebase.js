// firebase.js

import firebase from 'firebase/app';
import 'firebase/auth';
   
const firebaseConfig = {
  apiKey: "AIzaSyAq65uo3mSyaS-dmFtV7rp4tAQZXprZP1I",
  authDomain: "friendlychat-afb4f.firebaseapp.com",
  databaseURL: "https://friendlychat-afb4f.firebaseio.com",
  projectId: "friendlychat-afb4f",
  storageBucket: "friendlychat-afb4f.appspot.com",
  messagingSenderId: "249057840258",
  appId: "1:249057840258:web:d01f5e78916f0c1ea0789b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
