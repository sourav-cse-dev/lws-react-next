// event handler
// function hello() {
//     console.log("Hello World!");
// }

// catch dom element
const button = document.getElementById("btn");

// event listener, it's listening for a click event on the button element, and when the button is clicked, it will call the hello() function
button.addEventListener("click", hello);

function hello(){
    console.log("Hello World!");
}