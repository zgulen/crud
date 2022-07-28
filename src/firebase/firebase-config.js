import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCdPChII9ulV3cKz58oB8E6P-qfirFnJEM",
    authDomain: "firestore-8d8a9.firebaseapp.com",
    databaseURL: "https://firestore-8d8a9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "firestore-8d8a9",
    storageBucket: "firestore-8d8a9.appspot.com",
    messagingSenderId: "707235825649",
    appId: "1:707235825649:web:b4fbb1840925af17432650",
    measurementId: "G-3QS5D9R52P"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)