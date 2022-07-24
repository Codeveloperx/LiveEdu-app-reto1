import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBALuphjEB9iB9Mjir248ckwvK6z_mQD5Q",
  authDomain: "liveedu-app.firebaseapp.com",
  projectId: "liveedu-app",
  storageBucket: "liveedu-app.appspot.com",
  messagingSenderId: "9470527396",
  appId: "1:9470527396:web:0c4b31b9555ab809f86331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;