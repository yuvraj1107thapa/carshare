import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  // apiKey: "AIzaSyBdGf2jH-ttAHqBaLakmGsLG9kdQ91H7Ug",
  // authDomain: "hello-world-2f059.firebaseapp.com",
  // projectId: "hello-world-2f059",
  // storageBucket: "hello-world-2f059.appspot.com",
  // messagingSenderId: "572202419843",
  // appId: "1:572202419843:web:1fcd0f4111adb63a5b7db6",
  apiKey: "AIzaSyAem1zv1umFM6NPdEKHyibebtuQbwccwEg",
  authDomain: "carshare-302ff.firebaseapp.com",
  projectId: "carshare-302ff",
  storageBucket: "carshare-302ff.appspot.com",
  messagingSenderId: "544962768272",
  appId: "1:544962768272:web:bd5fda2238a91096ca5715",
  databaseURL: "https://carshare-302ff-default-rtdb.firebaseio.com",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();
// export { db, auth, storage };
export { db, auth };
