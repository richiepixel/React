import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAxX09cccp4CG06JQ1S1pajQ_Watd46PVg',
  authDomain: 'react-app-curso-f1332.firebaseapp.com',
  projectId: 'react-app-curso-f1332',
  storageBucket: 'react-app-curso-f1332.appspot.com',
  messagingSenderId: '363917103850',
  appId: '1:363917103850:web:6688ae25f055c481dcbd93',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
