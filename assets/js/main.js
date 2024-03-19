AOS.init({ duration: 1000, offset: 100,easing: 'ease-in-out', once: false});

const burger = document.querySelector(".header__toggle");
  const menu = document.querySelector(".header__nav");
    const menuLinks = document.querySelectorAll(".header__nav-link");
let isMenuOpen = false;
burger.addEventListener("click", (event) => {
  event.preventDefault();
    isMenuOpen = !isMenuOpen;
      menu.classList.toggle("active", isMenuOpen);
      burger.classList.toggle("active", isMenuOpen);
});
menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
      if (targetElement) {
         targetElement.scrollIntoView({
           behavior: "smooth",
       });
      }
      isMenuOpen = false;
        menu.classList.remove("active");
      burger.classList.remove("active");
  });
});

let lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    if (isMenuOpen) {
      return;
    }
    if (currentScroll > lastScrollTop && currentScroll > 100) {
      document.querySelector(".header__top").style.top = "-92px";
    } else {
      document.querySelector(".header__top").style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  },
  false
);

Fancybox.bind("[data-fancybox]", {});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('nav a[href^="/#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substr(1);
      const targetUrl = `${window.location.origin}/${targetId}`;
      window.location.href = targetUrl;
    });
  });
});

const scrollButton = document.querySelector('.scroll__button');
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 800) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
});
scrollButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

