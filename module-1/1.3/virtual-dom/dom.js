/*
 * Title: Main Script file
 * Description: A vanilla JS Implementation of costly DOM manipulation vs efficient DOM manipulation
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 07/01/2023
 *
 */

let array = [];
increment = 0;
let container = document.querySelector(".container");

// fast
// while (increment < 10000) {
//   array.push(++increment); // push to array instead of DOM
// }

// container.innerHTML = array.join(" "); // batch update to the DOM

// slow
while (increment < 10000) {
  increment++; // direct DOM manipulation in each iteration
  container.innerHTML += " " + increment; // this causes multiple reflows and repaints, leading to poor performance
}
