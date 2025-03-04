// document.addEventListener("DOMContentLoaded", function() {
//     let links= document.querySelectorAll(".navbar .navbar-nav a");
//     let currentUrl= window.location.pathname.split("/").pop("");

//     links.forEach(link=> {
//         if (link.getAttribute("href") === currenturl) {
//             link.classList.add("active");
//         }
//     });
// });

//  !Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector(`#hamburger-menu`).onclick = () => {
  navbarNav.classList.toggle(`active`);
};

// !Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector(`#hamburger-menu`);

document.addEventListener("click", function(e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
})
