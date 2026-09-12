console.dir(document);
console.dir(typeof document);
console.dir(document.title);
console.dir(document.URL);
console.dir(document.domain);
console.dir(document.head);
console.log(typeof document.head);
console.log(document.images);
console.log(document.links);
console.log(document.forms);

document.title = "Play with DOM";

console.log(document.all);

for (let element of document.all) {
  console.log(element);
}

console.log(document.all[6]);
