// try {
//   const isAgree = confirm("sebete atmaq isteyirsinizmi?");
//   const response = await axios.get(url + "products/" + id);
//   const currentProduct = response.data;

//   if (isAgree) {
//     const postResponse = await axios.post(url + "basket/", currentProduct);
//   }
// } catch {
//   alert("mehsul sebetde var");
// }

// Swal.fire({
//   title: "Sebete eklensin Save/Don't save?",
//   showDenyButton: true,
//   showCancelButton: true,
//   confirmButtonText: "Save",
//   denyButtonText: `Don't save`,
// }).then((result) => {
//   /* Read more about isConfirmed, isDenied below */
//   if (result.isConfirmed) {
//     Swal.fire("Saved!", "", "success");
//     axios.post(url + "basket/", data);
//   } else if (result.isDenied) {
//     Swal.fire("Changes are not saved", "", "info");
//   }
// });
let productData = [
  {
    id: 1,
    img: "http://127.0.0.1:5500/iconimg/BookAtomic.svg",
    title: "Atomic One’s",
    price: 25.99,
    about: "Many Atomic",
    description: "Proent Book",
  },
  {
    id: 2,
    img: "http://127.0.0.1:5500/iconimg/BookAtomic.svg",
    title: "Atomic One’s",
    price: 22.99,
    about: "Many Atomic",
    description: "Proent Book",
  },
  {
    id: 3,
    img: "http://127.0.0.1:5500/iconimg/BookAtomic.svg",
    title: "Atomic One’s",
    price: 28.99,
    about: "Many Atomic",
    description: "Proent Book",
  },
];

// <!-- Carts1 -->
//         <!-- <div class="realModCart1">
//           <div class="divImg">
//             <img
//               src="../iconimg/Rectangle 194.png"
//               alt="img"
//               class="widthimg"
//             />
//           </div>
//           <div class="cartCenter">
//             <h4 class="h4sec2">
//               The energy efficiency offers hydrotherapy or swim
//             </h4>
//             <p>
//               The point of using Lorem Ipsum hiter of that using making it
//               look like others readable will get end.
//             </p>
//             <div class="cartBootm">
//               <a href="#" id="modalTrigger">Read more</a>
//               <span>Author - 23.05.2022</span>
//             </div>
//           </div>
//         </div> -->

//         <!-- The Modal -->
//         <!-- <div id="modal" class="modal">
//           <div class="modal-content">
//             <span class="close">&times;</span>

//             <div class="divImg">
//               <img
//                 src="../iconimg/Rectangle 197.png"
//                 alt="img"
//                 class="widthimg"
//               />
//             </div>
//             <div class="cartCenter">
//               <h4 class="h4sec2">
//                 The energy efficiency offers hydrotherapy or swim
//               </h4>
//               <p>
//                 The point of using Lorem Ipsum hiter of that using making
//                 it look like others readable will get end.
//               </p>
//             </div>
//             <div class="modal-bottom">
//               <a href="#" class="haveAny">Read more</a>
//               <span>Author - 23.05.2022</span>
//             </div>
//           </div>
// </div> -->

// <!-- Cart1 Modal -->
// <!-- <div class="realModCart1">
//   <div class="divImg">
//     <img
//       src="../iconimg/Rectangle 197.png"
//       alt="img"
//       class="widthimg"
//     />
//   </div>
//   <div class="cartCenter">
//     <h4 class="h4sec2">
//       The energy efficiency offers hydrotherapy or swim
//     </h4>
//     <p>
//       The point of using Lorem Ipsum hiter of that using making it
//       look like others readable will get end.
//     </p>
//     <div class="cartBootm">
//       <a href="#" id="modalTrigger">Read more</a>
//       <span>Author - 23.05.2022</span>
//     </div>
//   </div>
// </div>
// <div class="realModCart1">
//   <div class="divImg">
//     <img
//       src="../iconimg/Rectangle 198.png"
//       alt="img"
//       class="widthimg"
//     />
//   </div>
//   <div class="cartCenter">
//     <h4 class="h4sec2">
//       The energy efficiency offers hydrotherapy or swim
//     </h4>
//     <p>
//       The point of using Lorem Ipsum hiter of that using making it
//       look like others readable will get end.
//     </p>
//     <div class="cartBootm">
//       <a href="#" class="haveAny">Read more</a>
//       <span>Author - 23.05.2022</span>
//     </div>
//   </div>
// </div> -->
// <!-- Carts2 -->
// <!-- <div class="realModCart1">
//   <div class="divImg">
//     <img
//       src="../iconimg/Rectangle 194.png"
//       alt="img"
//       class="widthimg"
//     />
//   </div>
//   <div class="cartCenter">
//     <h4 class="h4sec2">
//       The energy efficiency offers hydrotherapy or swim
//     </h4>
//     <p>
//       The point of using Lorem Ipsum hiter of that using making it
//       look like others readable will get end.
//     </p>
//     <div class="cartBootm">
//       <a href="#" class="haveAny">Read more</a>
//       <span>Author - 23.05.2022</span>
//     </div>
//   </div>
// </div>
// <div class="realModCart1">
//   <div class="divImg">
//     <img
//       src="../iconimg/Rectangle 197.png"
//       alt="img"
//       class="widthimg"
//     />
//   </div>
//   <div class="cartCenter">
//     <h4 class="h4sec2">
//       The energy efficiency offers hydrotherapy or swim
//     </h4>
//     <p>
//       The point of using Lorem Ipsum hiter of that using making it
//       look like others readable will get end.
//     </p>
//     <div class="cartBootm">
//       <a href="#" class="haveAny">Read more</a>
//       <span>Author - 23.05.2022</span>
//     </div>
//   </div>
// </div>
// <div class="realModCart1">
//   <div class="divImg">
//     <img
//       src="../iconimg/Rectangle 198.png"
//       alt="img"
//       class="widthimg"
//     />
//   </div>
//   <div class="cartCenter">
//     <h4 class="h4sec2">
//       The energy efficiency offers hydrotherapy or swim
//     </h4>
//     <p>
//       The point of using Lorem Ipsum hiter of that using making it
//       look like others readable will get end.
//     </p>
//     <div class="cartBootm">
//       <a href="#" class="haveAny">Read more</a>
//       <span>Author - 23.05.2022</span>
//     </div>
//   </div>
// </div> -->
// <!-- Carts3 -->
// <!-- <div class="realModCart1">
//   <div class="divImg">
//     <img
//       src="../iconimg/Rectangle 194.png"
//       alt="img"
//       class="widthimg"
//     />
//   </div>
//   <div class="cartCenter">
//     <h4 class="h4sec2">
//       The energy efficiency offers hydrotherapy or swim
//     </h4>
//     <p>
//       The point of using Lorem Ipsum hiter of that using making it
//       look like others readable will get end.
//     </p>
//     <div class="cartBootm">
//       <a href="#" class="haveAny">Read more</a>
//       <span>Author - 23.05.2022</span>
//     </div>
//   </div>
// </div>
// <div class="realModCart1">
//   <div class="divImg">
//     <img
//       src="../iconimg/Rectangle 197.png"
//       alt="img"
//       class="widthimg"
//     />
//   </div>
//   <div class="cartCenter">
//     <h4 class="h4sec2">
//       The energy efficiency offers hydrotherapy or swim
//     </h4>
//     <p>
//       The point of using Lorem Ipsum hiter of that using making it
//       look like others readable will get end.
//     </p>
//     <div class="cartBootm">
//       <a href="#" class="haveAny">Read more</a>
//       <span>Author - 23.05.2022</span>
//     </div>
//   </div>
// </div>
// <div class="realModCart1">
//   <div class="divImg">
//     <img
//       src="../iconimg/Rectangle 198.png"
//       alt="img"
//       class="widthimg"
//     />
//   </div>
//   <div class="cartCenter">
//     <h4 class="h4sec2">
//       The energy efficiency offers hydrotherapy or swim
//     </h4>
//     <p>
//       The point of using Lorem Ipsum hiter of that using making it
//       look like others readable will get end.
//     </p>
//     <div class="cartBootm">
//       <a href="#" class="haveAny">Read more</a>
//       <span>Author - 23.05.2022</span>
//     </div>
//   </div>
// </div> -->
