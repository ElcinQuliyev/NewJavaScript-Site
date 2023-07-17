let basKet = document.querySelector(".basket");
let btnOrderTo = document.querySelector(".btnOrderMini");

basKet.addEventListener("click", () => {
  console.log("Click Basket");
});
btnOrderTo.addEventListener("click", () => {
  console.log("Btn click");
});

// ---- input email submit ----

let inputSub = document.querySelector(".inputSec9");
let btnSubmit = document.querySelector(".btnSubmit");

btnSubmit.addEventListener("click", () => {
  console.log(inputSub.value);
});

let hamBurger = document.querySelector(".iconHamburger");
hamBurger.addEventListener("click", () => {
  document.querySelector(".rightDiv").classList.toggle("showMenu");
});
