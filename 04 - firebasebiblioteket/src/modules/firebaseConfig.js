import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBROlGCAiedtFvqNzH-KiTodSEec-6TMg8",
    authDomain: "class-helpers.firebaseapp.com",
    databaseURL: "https://class-helpers-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "class-helpers",
    storageBucket: "class-helpers.appspot.com",
    messagingSenderId: "417064802010",
    appId: "1:417064802010:web:10e6c56147ef751a9f37e3"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);
  export const usersRef = ref(db, 'users');