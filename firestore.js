// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbVLq8l10olaUNQjlqYxoRV2smsTyTPv0",
    authDomain: "international-grocery.firebaseapp.com",
    projectId: "international-grocery",
    storageBucket: "international-grocery.firebasestorage.app",
    messagingSenderId: "226930107249",
    appId: "1:226930107249:web:9c48717b78c5c90c414cd0",
    measurementId: "G-W4CNFW7ECZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
