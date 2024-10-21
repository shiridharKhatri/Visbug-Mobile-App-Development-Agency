window.addEventListener("scroll", function () {
  let navBar = document.getElementById("navBar");
  if (window.scrollY > 80) {
    navBar.style.background = "#232c39";
  } else {
    navBar.style.background = "transparent";
  }
});

let menu = document.getElementById("menu");
menu.addEventListener("click", () => {
  console.log("clicked");
  let menuItems = document.getElementById("menuItems");
  menu.classList.toggle("togglemenu");
  if (menu.classList.contains("togglemenu")) {
    menuItems.style.transform = "scale(1)";
    menu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    menuItems.style.transform = "scale(0)";
    menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document
  .getElementById("commentForm")
  .addEventListener("submit", function (event) {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var websiteInput = document.getElementById("website");
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var websiteError = document.getElementById("websiteError");

    nameError.style.display = "none";
    emailError.style.display = "none";
    websiteError.style.display = "none";

    if (!nameInput.checkValidity()) {
      nameError.style.display = "block";
      nameInput.classList.add("error");
      nameInput.style.border = ".1rem solid red";
      event.preventDefault();
    } else {
      nameInput.classList.remove("error");
      nameInput.style.border = ".1rem solid rgba(68, 68, 85, 0.783)";
    }

    if (!emailInput.checkValidity()) {
      emailError.style.display = "block";
      emailInput.classList.add("error");
      emailInput.style.border = ".1rem solid red";
      event.preventDefault();
    } else {
      emailInput.classList.remove("error");
      emailInput.style.border = ".1rem solid rgba(68, 68, 85, 0.783)";
    }

    if (!websiteInput.checkValidity()) {
      websiteError.style.display = "block";
      websiteInput.classList.add("error");
      websiteInput.style.border = ".1rem solid red";
      event.preventDefault();
    } else {
      websiteInput.classList.remove("error");
      websiteInput.style.border = ".1rem solid rgba(68, 68, 85, 0.783)";
    }
  });
