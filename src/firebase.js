// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDe6iF3cE35uArVzDvRZgfUxCAmU9U4GbM",
    authDomain: "first-157f1.firebaseapp.com",
    projectId: "first-157f1",
    storageBucket: "first-157f1.appspot.com",
    messagingSenderId: "711690484684",
    appId: "1:711690484684:web:514290fe5fd4901bc9fb69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialisation de firebase authentification 
export const auth = getAuth(app);
export default app;