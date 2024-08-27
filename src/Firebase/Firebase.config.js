
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByGsg--UrlwR1_9J3WEtPazBj-HkydYJs",
  authDomain: "jewellery-6d39f.firebaseapp.com",
  projectId: "jewellery-6d39f",
  storageBucket: "jewellery-6d39f.appspot.com",
  messagingSenderId: "153127119687",
  appId: "1:153127119687:web:5dc1604bf4ea17407ffa62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
