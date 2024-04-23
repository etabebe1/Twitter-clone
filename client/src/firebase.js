import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApLHslZLK3t_AsDe4Eu7ZpvyLEsvsx8cE",
  authDomain: "twitter-clone-2e303.firebaseapp.com",
  projectId: "twitter-clone-2e303",
  storageBucket: "twitter-clone-2e303.appspot.com",
  messagingSenderId: "485182796277",
  appId: "1:485182796277:web:bb417b582539ad1986b0bc",
  measurementId: "G-YEHLBRB1S8",
};

// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
// export default db;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firebase Firestore and get a reference to the service
const db = getFirestore(app);

// Google Auth Provider
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = firebase.auth();
// export { auth, provider };

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: "AIzaSyBHLt1OE35JW85QziDuBGeH5glrCkHHzRY",
// 	authDomain: "twitter-clone-ffb7e.firebaseapp.com",
// 	projectId: "twitter-clone-ffb7e",
// 	storageBucket: "twitter-clone-ffb7e.appspot.com",
// 	messagingSenderId: "373238979059",
// 	appId: "1:373238979059:web:767ce598756cef1b9dda86",
// };

// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
// export default db;
