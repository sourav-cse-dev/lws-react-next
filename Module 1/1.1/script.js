// catch DOM elements
const addToCartButtonElement = document.getElementById('addToCartbutton');
const productPriceElement = document.getElementById('productPrice');
const totalPriceElement = document.getElementById('totalPrice');

// state or data
const productPrice = 5000;
let totalPrice = 0;

// set product price initially
productPriceElement.innerText = `৳ ${productPrice}`;
totalPriceElement.innerText = `Total: ৳ ${totalPrice}`

// event listeners
addToCartButtonElement.addEventListener('click', () => {
    totalPrice += productPrice;

    // update UI
    totalPriceElement.innerText = `Total: ৳ ${totalPrice}`
})