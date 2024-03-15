import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAZ6-UId869OMa9ggIIFS_fzmPoY-eT1Gk",
    authDomain: "maturski-a921a.firebaseapp.com",
    projectId: "maturski-a921a",
    storageBucket: "maturski-a921a.appspot.com",
    messagingSenderId: "21947721566",
    appId: "1:21947721566:web:808f3ba9d541b511a051cf"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app) 