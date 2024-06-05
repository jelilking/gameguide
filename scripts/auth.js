// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { setupGuides, setupUI } from "./index.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo3vcXJZYOM4zioW5AoFSwlO0liWK7yDA",
  authDomain: "jk-game-guidez-85989.firebaseapp.com",
  projectId: "jk-game-guidez-85989",
  storageBucket: "jk-game-guidez-85989.appspot.com",
  messagingSenderId: "293979926487",
  appId: "1:293979926487:web:d4b04a575eb43e277a2592",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, "guides");
export const colUsers = collection(db, "users");

const auth = getAuth();

//listen for auth status changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    onSnapshot(
      colRef,
      (snapshot) => {
        setupGuides(snapshot.docs);
        setupUI(user);
      },
      (err) => {
        console.log(err.message);
      }
    );
  } else {
    setupGuides([]);
    setupUI(user);
  }
});

//create new guide
const createForm = document.querySelector("#create-form");
createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoc(colRef, {
    title: createForm["title"].value,
    content: createForm["content"].value,
  })
    .then(() => {
      //close the modal and rest form
      const modal = document.querySelector("#modal-create");
      M.Modal.getInstance(modal).close();
      createForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});

//reference to signup forms
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //get userinfo
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  //signup the user
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      const docRef = doc(colUsers, cred.user.uid);

      return setDoc(docRef, {
        bio: signupForm["signup-bio"].value,
      });
    })
    .then(() => {
      const modal = document.querySelector("#modal-signup");
      M.Modal.getInstance(modal).close();
      signupForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});

//logout user
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  signOut(auth);
});

//login user
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  signInWithEmailAndPassword(auth, email, password).then((cred) => {
    console.log(cred.user);
    const modal = document.querySelector("#modal-login");
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});
