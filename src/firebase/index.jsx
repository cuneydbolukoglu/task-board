import firebase from 'firebase';
import "firebase/auth";
import firebaseConfig from './config';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.database();
//const fire = firebase.initializeApp(firebaseConfig);

//export default fire;