// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsXk6Z3cZLpEoa1QtV5zYOYjX88tlhDNQ",
  authDomain: "intruments-shop-ecommerce.firebaseapp.com",
  projectId: "intruments-shop-ecommerce",
  storageBucket: "intruments-shop-ecommerce.appspot.com",
  messagingSenderId: "351953386417",
  appId: "1:351953386417:web:7946058c62f87b4576db90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const dataBaseFire = getFirestore(app);

export default dataBaseFire;