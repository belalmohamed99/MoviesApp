const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const logoText = document.getElementById("logoText");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("text-red-600");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("text-red-600");
    }
  });
  if (window.scrollY > 50) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-white");

    logoText.classList.remove("text-white");
    logoText.classList.add("text-black");

    navLinks.forEach((link) => {
      if (!link.classList.contains("text-red-600")) {
        link.classList.remove("text-red-500", "text-white");
        link.classList.add("text-black");
      }
    });
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-white");

    logoText.classList.add("text-white");
    logoText.classList.remove("text-black");

    navLinks.forEach((link) => {
      link.classList.remove("text-black");
      if (!link.classList.contains("text-red-600")) {
        link.classList.add("text-white");
      }
    });
  }
});
