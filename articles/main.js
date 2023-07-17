let cartPage = [
  {
    id: 1,
    img: "http://127.0.0.1:5500/iconimg/Rectangle%20194.png",
    title: "October 6, 2021 / Classics",
    about: "There are many variations of passages of Lorem Ipsum available",
    title2: "The perfect book for all",
    listAbout:
      "It has roots in a piece of classical Latin literature from 45 BC",
  },
  {
    id: 2,
    img: "http://127.0.0.1:5500/iconimg/Rectangle%20197.png",
    title: "October 6, 2021 / Classics",
    about: "There are many variations of passages of Lorem Ipsum available",
    title2: "The perfect book for all",
    listAbout:
      "It has roots in a piece of classical Latin literature from 45 BC",
  },
  {
    id: 3,
    img: "	http://127.0.0.1:5500/iconimg/Rectangle%20198.png",
    title: "October 6, 2021 / Classics",
    about: "There are many variations of passages of Lorem Ipsum available",
    title2: "The perfect book for all",
    listAbout:
      "It has roots in a piece of classical Latin literature from 45 BC",
  },
  {
    id: 4,
    img: "	http://127.0.0.1:5500/iconimg/Rectangle%20198.png",
    title: "October 6, 2021 / Classics",
    about: "There are many variations of passages of Lorem Ipsum available",
    title2: "The perfect book for all",
    listAbout:
      "It has roots in a piece of classical Latin literature from 45 BC",
  },
  {
    id: 5,
    img: "http://127.0.0.1:5500/iconimg/Rectangle%20197.png",
    title: "October 6, 2021 / Classics",
    about: "There are many variations of passages of Lorem Ipsum available",
    title2: "The perfect book for all",
    listAbout:
      "It has roots in a piece of classical Latin literature from 45 BC",
  },
  {
    id: 6,
    img: "http://127.0.0.1:5500/iconimg/Rectangle%20194.png",
    title: "October 6, 2021 / Classics",
    about: "There are many variations of passages of Lorem Ipsum available",
    title2: "The perfect book for all",
    listAbout:
      "It has roots in a piece of classical Latin literature from 45 BC",
  },
];
let realMod = document.querySelectorAll(".realModCart1");
const articleWrapper = document.querySelector(".centerDivSec2");

articleWrapper.innerHTML = `
    <div id="modal" class="modal">
        <div class="modal-content">
        <span class="close">&times;</span>

        <div class="divImg">
            <img
            src=""
            alt="img"
            class="widthimg"
            />
        </div>
        <div class="cartCenter">
            <h4 class="h4sec2"></h4>
            <p class="card_about_text"></p>
        </div>
        <div class="modal-bottom">
            <a href="#" class="haveAny">Read more</a>
            <span>Author - 23.05.2022</span>
        </div>
        </div>
    </div>
`;

const modal = document.querySelector("#modal");

const articles = cartPage
  .map(
    (card) => `
        <div class="realModCart1">
            <div class="divImg">
            <img
                src="${card.img}"
                alt="img"
                class="widthimg"
            />
            </div>
            <div class="cartCenter">
            <h4 class="h4sec2">
                ${card.title}
            </h4>
            <p>
                ${card.listAbout}
            </p>
            <div class="cartBootm">
                <button id="modalTrigger" data-id=${card.id}>Read more</button>
                <span>Author - 23.05.2022</span>
            </div>
            </div>
        </div>
 `
  )
  .join(" ");

modal.insertAdjacentHTML("afterend", articles);

const modalTrigger = document.querySelectorAll("#modalTrigger");

modalTrigger.forEach((button) => {
  button.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    const currentModalData = cartPage.find((card) => card.id == id);

    openModalHandler(currentModalData);
  });
});

const openModalHandler = (data) => {
  modal.style.display = "block";

  const img = (document.querySelector(".widthimg").src = data.img);
  const title = (document.querySelector(".h4sec2").textContent = data.title);
  const text = (document.querySelector(".card_about_text").textContent =
    data.about);

  let closeBtn = document.getElementsByClassName("close")[0];

  closeBtn.addEventListener("click", closeModal);
};

const closeModal = () => {
  modal.style.display = "none";
};

// // Get the modal element
// var modal = document.getElementById("modal");

// // Get the button that triggers the modal
// var modalTrigger = document.getElementById("modalTrigger");

// // Get the <span> element that closes the modal
// var closeBtn = document.getElementsByClassName("close")[0];

// // Open the modal when the button is clicked
// modalTrigger.onclick = function () {
//   modal.style.display = "block";
// };

// // Close the modal when the close button is clicked
// closeBtn.onclick = function () {
//   modal.style.display = "none";
// };

// // Close the modal when the user clicks outside the modal
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// let num = 1;

// for (let i = 1; i <= 100; i++) {
//   num = num * i;
// }
// console.log(BigInt(num));
