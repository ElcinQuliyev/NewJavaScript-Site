const url = "http://localhost:3000/";
const divCarts = document.querySelector(".divCarts");

//------Div Carts---
// axios.get(url + "products/").then(({ data }) => {
//   // console.log(data);
//   data.forEach((product) => {
//     divCarts.innerHTML += `<div class="cart1">
//     <div class="backDiv">
//       <div class="cart1Img">
//         <img
//           src="../iconimg/BookAtomic.svg"
//           class="widthimg"
//           alt=""
//         />
//       </div>
//     </div>
//     <div class="centerCartText">
//       <div class="textD-flex">
//         <h3 class="h3sec1">${product.title}s</h3>
//         <span>${product.price}</span>
//       </div>
//       <p>
//        ${product.about}
//       </p>
//       <li>${product.description}</li>
//       <button type="button" class="btnOrder" onClick="clickHandle(${product.id})">Order Today</button>
//     </div>
//   </div>`;
//   });
// });
//----- Add Cart---

let btnBasket = document.querySelector(".basket");
let card = document.querySelector(".card");
let closShop = document.querySelector(".closeShop");

let countBasket = document.querySelector(".positbasket");
let list = document.querySelector(".list");
let listCart = document.querySelector(".listCard");
let body = document.querySelector("body");
let totAL = document.querySelector("total");
let basketProducts = 0;

let listCards = [];
countBasket.innerHTML = basketProducts;

btnBasket.addEventListener("click", () => {
  card.classList.toggle("showMenu");
});
closShop.addEventListener("click", () => {
  card.classList.toggle("showMenu");
});

const initApp = async () => {
  const resProduct = await axios.get(url + "productData/");
  const { data } = resProduct;
  data.forEach((product) => {
    divCarts.innerHTML += `<div class="cart1">
           <div class="backDiv">
             <div class="cart1Img">
               <img
                 src="../iconimg/BookAtomic.svg"
                 class="widthimg"
                 alt=""
               />
             </div>
           </div>
           <div class="centerCartText">
             <div class="textD-flex">
               <h3 class="h3sec1">${product.title}s</h3>
               <span>${product.price}</span>
             </div>
             <p>
              ${product.about}
             </p>
             <li>${product.description}</li>
             <button type="button" class="btnOrder" onClick="clickHandle(${product.id})">+ Add Basket</button>
           </div>
        </div>`;
  });
};
initApp();

const clickHandle = async (id) => {
  const resProduct = await axios.get(url + "productData/" + id);
  const { data } = resProduct;
  console.log(data.id);
  if (listCards[id] == null) {
    listCards[id] = data.id;
  }
  reloadCard();
  console.log("ok", id);
};
const reloadCard = () => {
  listCart.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  Object.entries(listCards).forEach(async ([id]) => {
    const resProduct = await axios.get(url + "productData/" + id);
    const { data } = resProduct;
    if (data != null) {
      totalPrice += data.price;

      let newDiv = document.createElement("div");
      newDiv.classList.add("cart1");
      newDiv.innerHTML = `
        <div class="backDiv">
          <div class="cart1Img">
            <img src="../iconimg/BookAtomic.svg" class="widthimg" alt="" />
          </div>
        </div>
        <div class="centerCartText">
          <div class="textD-flex">
            <h3 class="h3sec1">${data.title}s</h3>
            <span>${data.price}</span>
          </div>
          <p>${data.countBasket}</p>
          <li>${data.description}</li>
          <li>ID: ${data.id}</li>
          <div class="btnD-flex">
            <button type="button" onClick="changeQuantity(${
              basketProducts - 1
            }, '${id}')"> - </button>
            <div class="countBasket">${data.countBasket}</div>
            <button type="button" onClick="changeQuantity(${
              basketProducts + 1
            }, '${id}')"> + </button>
          </div>
        </div>`;
      listCart.appendChild(newDiv);
    }
  });

  let productCount = Object.values(listCards).filter((a) => a != null);
  basketProducts = productCount.length;
  countBasket.innerHTML = basketProducts;
};

const changeQuantity = async (countBasket, id) => {
  const resProduct = await axios.get(url + "productData/");
  const { data } = resProduct;
  if (countBasket === 0) {
    delete listCards[id];
  } else {
    listCards[id].countBasket = countBasket;
    listCards[id].price = (
      countBasket * data.find((product) => product.id === parseInt(id)).price
    ).toFixed(2);
  }
  reloadCard();
};
