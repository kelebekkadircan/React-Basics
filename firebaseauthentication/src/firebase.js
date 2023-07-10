
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD0qCtOFo_9aIC06m_kYalmLAL_286Fmd0",
    authDomain: "fir-45b63.firebaseapp.com",
    projectId: "fir-45b63",
    storageBucket: "fir-45b63.appspot.com",
    messagingSenderId: "1028108369603",
    appId: "1:1028108369603:web:c19a136f79d2e13014ac76"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
