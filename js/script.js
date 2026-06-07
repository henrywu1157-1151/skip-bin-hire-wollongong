"use strict";
//
// Smooth scrolling animation
//

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // 只处理#和锚点链接
    if (href === "#" || href.startsWith("#")) {
      e.preventDefault();
    } else {
      return;
    }

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 20,
        behavior: "smooth",
      });

    // Scroll to other links

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //  Close mobile navigation
  });
});

//
//  FAQ
//
const faqItems = document.querySelectorAll(".faq-item");

function openFaq() {
  faqItems.forEach((item) => {
    const answer = item.querySelector(".faq-answer-box");

    item.addEventListener("click", () => {
      answer.classList.toggle("faq-hidden");
      item.classList.toggle("faq-active");
    });
  });
}

openFaq();

///////////////////////////////////////////////////////////
// MOBILE NAVIGATION

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const btnStickyEl = document.querySelector(".mobile-sticky-box");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  btnStickyEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
/*  MOBILE  STICKY CALL */

const heroSection = document.querySelector(".section-hero");
const stickyCall = document.querySelector(".mobile-sticky-call");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting) {
      stickyCall.style.display = "none";
    } else {
      stickyCall.style.display = "block";
    }
  },
  {
    root: null,
    threshold: 0,
  },
);

observer.observe(heroSection);

