import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBFb9zlD7Sql2Li907qyEZeTIgS685JNEg",
  authDomain: "paiqu-8777a.firebaseapp.com",
  databaseURL: "https://paiqu-8777a-default-rtdb.firebaseio.com",
  projectId: "paiqu-8777a",
  storageBucket: "paiqu-8777a.appspot.com",
  messagingSenderId: "278994291238",
  appId: "1:278994291238:web:81233e678f157d468434e7",
  measurementId: "G-1GJ8J5BHH8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;