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
