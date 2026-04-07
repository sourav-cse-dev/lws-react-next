// // regular function
// function hello(){ // function declaration, it's a statement, noting evaluates, do action
//     console.log("Hello World");
//     // function টিতে যেহেতু কোন return statement নেই তাই by default এটি undefined return করবে
// }
// let message = hello();
// console.log(message); // undefined

// // function expression
// const hello = function(){ // function expression, it's an expression, it evaluates to a value, that value is the function itself
//     console.log("Hello World");
//     // function টিতে যেহেতু কোন return statement নেই তাই by default এটি undefined return করবে
// }
// console.log(hello); // [Function: hello]

// named function expression
// const hello = function hello(){
//     console.log("Hello World!");
//     // function টিতে যেহেতু কোন return statement নেই তাই by default এটি undefined return করবে
// }


// arrow function
// const hello = () => {
//     console.log("Hello World!");
// }
// const hello = () => console.log("Hello World!");
// const hello = () => 5;
// const hello = (a, b) => a + b; // receive a, b as parameters and return their sum
// const hello = (a, b) => { // receive a, b as parameters and return an object
//     return {
//         a: 5,
//         b: 10
//     }
// }
// const hello = (a, b) => ({ // receive a, b as parameters and return an object
//     a: 5,
//     b: 10
// })
// console.log(hello(1, 2)); // { a: 5, b: 10 }

// annonymous function
function hello(){
    return () => {
        console.log("Hello World!");
    }
}