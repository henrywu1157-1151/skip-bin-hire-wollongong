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
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
