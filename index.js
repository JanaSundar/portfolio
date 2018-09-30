const nav = document.querySelector(".nav");
const navlink = document.querySelectorAll(".nav-link");
const header = document.getElementsByTagName("header");
const menu = document.querySelector(".menu");
const menulist = document.querySelector(".menu-list");
nav.addEventListener("click", callx);
let showmenu = false;
function callx() {
  if (!showmenu) {
    nav.classList.add("close");
    menu.classList.add("show");
    menulist.classList.add("show");
    navlink.forEach(items => items.classList.add("show"));
    showmenu = true;
  } else {
    nav.classList.remove("close");
    menu.classList.remove("show");
    menulist.classList.remove("show");
    navlink.forEach(items => items.classList.remove("show"));
    showmenu = false;
  }
}
