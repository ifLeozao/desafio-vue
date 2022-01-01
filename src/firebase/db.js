import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABnJeGO6r9jy5CM2nYBVxb44-JMCeGNMw",
    authDomain: "vue-fire-todo-a5c1c.firebaseapp.com",
    projectId: "vue-fire-todo-a5c1c",
    storageBucket: "vue-fire-todo-a5c1c.appspot.com",
    messagingSenderId: "116903055958",
    appId: "1:116903055958:web:39c6eb85920cc4411061f7"
  };
  
  // Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();