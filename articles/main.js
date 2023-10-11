// let cartPage = [
//   {
//     id: 1,
//     img: "http://127.0.0.1:5500/iconimg/Rectangle%20194.png",
//     title: "October 6, 2021 / Classics",
//     about: "There are many variations of passages of Lorem Ipsum available",
//     title2: "The perfect book for all",
//     listAbout:
//       "It has roots in a piece of classical Latin literature from 45 BC",
//   },
//   {
//     id: 2,
//     img: "http://127.0.0.1:5500/iconimg/Rectangle%20197.png",
//     title: "October 6, 2021 / Classics",
//     about: "There are many variations of passages of Lorem Ipsum available",
//     title2: "The perfect book for all",
//     listAbout:
//       "It has roots in a piece of classical Latin literature from 45 BC",
//   },
//   {
//     id: 3,
//     img: "	http://127.0.0.1:5500/iconimg/Rectangle%20198.png",
//     title: "October 6, 2021 / Classics",
//     about: "There are many variations of passages of Lorem Ipsum available",
//     title2: "The perfect book for all",
//     listAbout:
//       "It has roots in a piece of classical Latin literature from 45 BC",
//   },
//   {
//     id: 4,
//     img: "	http://127.0.0.1:5500/iconimg/Rectangle%20198.png",
//     title: "October 6, 2021 / Classics",
//     about: "There are many variations of passages of Lorem Ipsum available",
//     title2: "The perfect book for all",
//     listAbout:
//       "It has roots in a piece of classical Latin literature from 45 BC",
//   },
//   {
//     id: 5,
//     img: "http://127.0.0.1:5500/iconimg/Rectangle%20197.png",
//     title: "October 6, 2021 / Classics",
//     about: "There are many variations of passages of Lorem Ipsum available",
//     title2: "The perfect book for all",
//     listAbout:
//       "It has roots in a piece of classical Latin literature from 45 BC",
//   },
//   {
//     id: 6,
//     img: "http://127.0.0.1:5500/iconimg/Rectangle%20194.png",
//     title: "October 6, 2021 / Classics",
//     about: "There are many variations of passages of Lorem Ipsum available",
//     title2: "The perfect book for all",
//     listAbout:
//       "It has roots in a piece of classical Latin literature from 45 BC",
//   },
// ];
// let url = "http://localhost:3030";
const url = "https://my-json-server.typicode.com/ElcinQuliyev/dbBookJson/";

let realMod = document.querySelectorAll(".realModCart1");
const articleWrapper = document.querySelector(".centerDivSec2");

// articleWrapper.innerHTML = `
//     <div id="modal" class="modal">
//         <div class="modal-content">
//         <span class="close">&times;</span>

//         <div class="divImg">
//             <img
//             src=""
//             alt="img"
//             class="widthimg"
//             />
//         </div>
//         <div class="cartCenter">
//             <h4 class="h4sec2"></h4>
//             <p class="card_about_text"></p>
//         </div>
//         <div class="modal-bottom">
//             <a href="#" class="haveAny">Read more</a>
//             <span>Author - 23.05.2022</span>
//         </div>
//         </div>
//     </div>
// `;

const modal = document.querySelector("#modal");

const ShowDatas = async () => {
  try {
    const res = await axios.get(url + "/productData");
    const data = res.data;
    data.map((scrpts) => {
      articleWrapper.innerHTML += ` <div class="realModCart1">
      <div class="divImg">
      <img
          src="${scrpts.img}"
          alt="img"
          class="widthimg"
      />
      </div>
      <div class="cartCenter">
      <h4 class="h4sec2">
          ${scrpts.title}
      </h4>
      <p>
          $${scrpts.price}
      </p>
      <div class="cartBootm">
          <button id="modalTrigger" data-id=${scrpts.id}>Read more</button>
          <span>Author - 23.05.2022</span>
      </div>
      </div>
  </div>`;
    });
  } catch (err) {
    console.error(err);
  }
  console.log("ss");
};
ShowDatas();
let datases = ShowDatas(); // Bele ola bilermi../

// articles
//   .map(
//     (card) => `
//     <div class="realModCart1">
//     <div class="divImg">
//     <img
//         src="${card.img}"
//         alt="img"
//         class="widthimg"
//     />
//     </div>
//     <div class="cartCenter">
//     <h4 class="h4sec2">
//         ${card.title}
//     </h4>
//     <p>
//         ${card.listAbout}
//     </p>
//     <div class="cartBootm">
//         <button id="modalTrigger" data-id=${card.id}>Read more</button>
//         <span>Author - 23.05.2022</span>
//     </div>
//     </div>
// </div>
//  `
//   )
//   .join(" ");

const modalTrigger = document.querySelectorAll("#modalTrigger");

// Her düğme için olay dinleyicisi ekleyin
modalTrigger.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const productId = trigger.dataset.id;
    redirectToProductPage(productId);
  });
});

// Ürün sayfasına yönlendiren fonksiyon
function redirectToProductPage(productId) {
  const productUrl = `${window.location.origin}/product.html?id=${productId}`;
  window.location.href = productUrl;
}

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
let hamBurger = document.querySelector(".iconHamburger");
hamBurger.addEventListener("click", () => {
  document.querySelector(".rightDiv").classList.toggle("showMenu");
  console.log(".rightDiv");
});
