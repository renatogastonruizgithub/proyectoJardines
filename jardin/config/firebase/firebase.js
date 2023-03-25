import { initializeApp } from "firebase/app";

import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDFxBFbLud1y_awHKPHx3DGhCJTqDbV0OE",
    authDomain: "jardines-50f6b.firebaseapp.com",
    projectId: "jardines-50f6b",
    storageBucket: "jardines-50f6b.appspot.com",
    messagingSenderId: "788134114489",
    appId: "1:788134114489:web:1f017741a3c877e7c59768"
};

const apps = initializeApp(firebaseConfig);
export const storage = getStorage(apps);