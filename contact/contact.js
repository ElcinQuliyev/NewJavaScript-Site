// const faqs = document.querySelectorAll(".faq");

// faqs.forEach((faq) => {
//   faq.addEventListener("click", () => {
//     faq.classList.toggle("active");
//   });
// });
function toggleAnswer(question) {
  const answer = question.nextElementSibling;
  answer.classList.toggle("show");
}

let hamBurger = document.querySelector(".iconHamburger");
hamBurger.addEventListener("click", () => {
  document.querySelector(".rightDiv").classList.toggle("showMenus");
  console.log(".rightDiv");
});
