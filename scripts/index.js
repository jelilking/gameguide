import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { colUsers } from "./auth.js"; // Ensure colUsers is exported from auth.js if needed

const guidesList = document.querySelector(".guides");
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const accountDetails = document.querySelector(".account-details");

export const setupUI = (user) => {
  if (user) {
    //account info
    getDoc(doc(colUsers, user.uid))
      .then((doc) => {
        // Ensure `doc` is passed here
        if (doc.exists) {
          // Check if the document exists
          const html = `
          <div>Logged in as ${user.email}</div>
          <div>${doc.data().bio}</div>
        `;
          accountDetails.innerHTML = html;
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

    // toggle UI elements
    loggedInLinks.forEach((item) => {
      item.style.display = "block";
    });
    loggedOutLinks.forEach((item) => {
      item.style.display = "none";
    });
  } else {
    //hide account info
    accountDetails.innerHTML = "";
    // toggle UI elements
    loggedInLinks.forEach((item) => {
      item.style.display = "none";
    });
    loggedOutLinks.forEach((item) => {
      item.style.display = "block";
    });
  }
};

//setup the guides
export const setupGuides = (data) => {
  if (data.length) {
    let html = ` `;

    data.forEach((doc) => {
      const guide = doc.data();
      console.log(guide);
      const li = ` 
    <li>
    <div class="collapsible-header grey lighten-4">${guide.title}</div>
    <div class="collapsible-body white">${guide.content}</div>
    </li>
      `;

      html += li;
    });

    guidesList.innerHTML = html;
  } else {
    guidesList.innerHTML = `<p class="center-align">Login or Sign up to view guides</p>`;
  }
};

//Set Up Materialize Components
document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var collapsibles = document.querySelectorAll(".collapsible");
  M.Collapsible.init(collapsibles);

  var sidenav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav);

  //   var sidenavTriggers = document.querySelectorAll(".sidenav-trigger");
  //   console.log("Sidenav triggers:", sidenavTriggers);
});
