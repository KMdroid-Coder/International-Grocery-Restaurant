// ✅ Ensure Firebase SDK is loaded before initializing Firestore
document.addEventListener("DOMContentLoaded", function () {
    if (typeof firebase !== "undefined") {
        console.log("Initializing Firebase...");

        const firebaseConfig = {
            apiKey: "AIzaSyBbVLq8l10olaUNQjlqYxoRV2smsTyTPv0",
            authDomain: "international-grocery.firebaseapp.com",
            databaseURL: "https://international-grocery-default-rtdb.firebaseio.com",
            projectId: "international-grocery",
            storageBucket: "international-grocery.firebasestorage.app",
            messagingSenderId: "226930107249",
            appId: "1:226930107249:web:9c48717b78c5c90c414cd0",
            measurementId: "G-W4CNFW7ECZ"
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            window.db = firebase.firestore();  // ✅ Global Firestore Instance
            console.log("Firestore initialized:", db);
        } else {
            console.log("Firebase already initialized.");
        }
    } else {
        console.error("Firebase SDK not loaded.");
    }
});
