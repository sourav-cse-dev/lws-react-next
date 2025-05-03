// 1. catch DOM elements
const addToCardButton = document.getElementById("addToCardButton");
const price = document.getElementById("price");
let total =  document.getElementById("total");

// data or state: data which can be changed
const productPrice = 5000;
let totalPrice = 0;

// 2. set product price initially, manipulate DOM elements, render UI
price.innerText =  `৳ ${productPrice}`
total.innerText = `Total: ৳ 0`

// 3. adding event listener
addToCardButton.addEventListener('click', () => {
    // totalPrice = totalPrice + productPrice;
    totalPrice += productPrice; 

    // update UI
    total.innerText = `Total: ৳ ${totalPrice}`
})
