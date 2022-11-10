// the side bar opening and closing with onclick

let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");

  if (toggleNavStatus === false) {
    getSidebar.style.visibility = "visible";
    getSidebar.style.width = "250px";

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebar.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};

// side bar opening and closing with onmouse
let hoverOnNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  getSidebar.style.visibility = "visible";
  getSidebar.style.width = "250px";
};

let hoverOutNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  getSidebar.style.visibility = "hidden";
};

// the functions for and colors and <p> text

let closeTheNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  document.body.style.backgroundColor = "white";
  getSidebar.style.visibility = "hidden";
};
let makeColorRed = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  document.body.style.backgroundColor = "red";
  getSidebar.style.visibility = "hidden";
  document.getElementById("selected-color-text").innerHTML =
    "Your selected color is: Red!";
};
let makeColorOrange = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  document.body.style.backgroundColor = "orange";
  getSidebar.style.visibility = "hidden";
  document.getElementById("selected-color-text").innerHTML =
    "Your selected color is: Orange!";
};
let makeColorPurple = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  document.body.style.backgroundColor = "purple";
  getSidebar.style.visibility = "hidden";
  document.getElementById("selected-color-text").innerHTML =
    "Your selected color is: Purple!";
};
let makeColorGreen = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  document.body.style.backgroundColor = "green";
  getSidebar.style.visibility = "hidden";
  document.getElementById("selected-color-text").innerHTML =
    "Your selected color is: Green!";
};

document.getElementById("nav-sidebar").style.transition = "width 1s";
