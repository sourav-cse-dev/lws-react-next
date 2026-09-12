# Lesson #1 - What is DOM

> **এক লাইনে:** Browser HTML পড়ে একটা tree তৈরি করে যেখানে প্রতিটা element একেকটা **object** — সেই tree-টার নামই **DOM**, আর JavaScript এই object গুলো ধরে page-কে interactive বানায়।

---

## 📑 Table of Contents

- [DOM কী এবং কেন দরকার](#dom-কী-এবং-কেন-দরকার)
- [নামটা ভাঙলেই মানে বোঝা যায়](#নামটা-ভাঙলেই-মানে-বোঝা-যায়)
- [DOM Tree — window থেকে শুরু](#dom-tree--window-থেকে-শুরু)
- [DOM আসলে কে তৈরি করে?](#-dom-আসলে-কে-তৈরি-করে)
- [DOM হলো Web API](#dom-হলো-web-api--javascript-এর-অংশ-নয়)
- [CRUD Operations](#crud-operations)
- [Code Walkthrough](#-code-walkthrough)
- [Common Mistakes & Gotchas](#️-common-mistakes--gotchas)
- [JavaScript Prerequisites](#-javascript-prerequisites)
- [Official Docs](#-official-docs)
- [Summary (Key Takeaways)](#summary-key-takeaways)
- [Interview Questions](#interview-questions)

---

## DOM কী এবং কেন দরকার

- JS কোন একটা web page কে interactive বানায়, DOM এর সাহায্যে, DOM কে manipulate করে।
- কোন web page তার structure পায় HTML থেকে।

HTML একা শুধু **দেখাতে** পারে, কিছু **করতে** পারে না। Button-এ click করলে কিছু ঘটবে, form submit হলে message দেখাবে, cart-এ দাম বাড়বে — এই "ঘটা"-র কাজটা করে JavaScript। কিন্তু JavaScript তো HTML file-টা সরাসরি পড়তে পারে না; তার দরকার এমন কিছু যেটাকে সে **code দিয়ে ধরতে পারে**। সেই জিনিসটাই DOM।

> **Analogy:** HTML হলো একটা বাড়ির **নকশা (blueprint)** — কাগজে আঁকা, স্থির। Browser সেই নকশা দেখে **আসল বাড়িটা বানিয়ে ফেলে** — দরজা, জানালা, সুইচ সব বসিয়ে। সেই বানানো বাড়িটাই **DOM**। এখন JavaScript ওই বাড়ির ভেতরে ঢুকে সুইচ টিপতে পারে, দরজা খুলতে পারে, নতুন ঘর যোগ করতে পারে। নকশার কাগজে হাত দিয়ে কিন্তু কোনো সুইচ টেপা যায় না।

---

## নামটা ভাঙলেই মানে বোঝা যায়

**DOM: Document Object Model** — তিনটা শব্দ, তিনটা আলাদা অর্থ:

### Document

- HTML page is the Document of DOM.

পুরো HTML page-টাই হলো **Document**। JavaScript-এ এর প্রতিনিধি হলো `document` object — এখান থেকেই সব খোঁজা শুরু হয়।

### Object

- HTML tags are HTML element, those are objects. If javascripts have to work on HTML elements, javascript will treat them as object. When js consider html elements as objects, then object must have some properties and methods, though/using them js can manipulate those html elements. SO, HTML elements are the Objects of DOM.
- Object এ property থাকে এবং তার under এ অনেকগুলো sub-property থাকে।

অর্থাৎ `<button id="btn">Click me</button>` — এটা JavaScript-এর কাছে একটা **object**, যার property আছে (`id`, `textContent`, `className`) আর method আছে (`addEventListener()`, `remove()`)। Object বলেই তাকে ধরে কাজ করা যায়।

> 💡 ছোট একটা নিখুঁত কথা: **tag** আর **element** হুবহু এক নয়। `<p>` হলো opening tag, `</p>` closing tag — আর এই দুটো মিলিয়ে ভেতরের লেখা সহ পুরোটা হলো **element**। DOM-এ object হয়ে বসে element, tag নয়।

### Model

- Consider html code can be cosidered as a tree structure.
- Html এই tree structure টাকে বলা হয় DOM এর Model.

**Model** মানে এখানে "গঠন" বা "কাঠামো" — element গুলো একে অপরের ভেতরে থেকে যে **tree** তৈরি করে, সেটাই Model। কোনটা কার ভেতরে আছে (parent–child), কে কার পাশে আছে (sibling) — এই সম্পর্কগুলোই tree-টা ধরে রাখে।

---

## DOM Tree — window থেকে শুরু

- Browser এর সবকিছু window object এর মধ্যে থাকে। Node JS এ তাকে Global object বলে।
- Html এর element, js এর ক্ষেত্রে যা object, তার শুরুটা হয় window object থেকে।
- window - document - html - 1. head 2. body

```text
window                          ← browser-এর সবচেয়ে উপরের object (global scope)
└── document                    ← পুরো page
    └── <html>                  ← document.documentElement
        ├── <head>              ← document.head
        │   ├── <meta>
        │   └── <title>
        └── <body>              ← document.body
            ├── <div>JavaScript Refressher</div>
            └── <button id="btn">Click me</button>
```

`window` হলো browser-এর **global object** — তুমি যদি global scope-এ `var x = 5` লেখো, সেটা আসলে `window.x` হয়ে যায়। `alert()`, `setTimeout()`, `document` — সবই আসলে `window`-এর property। সেজন্যই `document.getElementById(...)` লিখলেও চলে, `window.document.getElementById(...)` লিখতে হয় না।

> **Node.js-এর ব্যাপারে একটা জরুরি কথা:** Node.js-এ global object-এর নাম `global` (আধুনিক নাম `globalThis`) — এটা তোমার লেখা ঠিক আছে। কিন্তু **Node.js-এ `document` বলে কিছু নেই**, কারণ সেখানে কোনো web page-ই নেই। `window` আর `global` তাই একই জিনিসের দুই নাম নয় — দুটো আলাদা পরিবেশের আলাদা global object, আর তাদের ভেতরের জিনিসও আলাদা।

---

## ⚠️ DOM আসলে কে তৈরি করে?

তোমার note-এ লেখা আছে:

- Javascript html এর প্রতিটা element পড়ে পড়ে তার browser এর মধ্যে একটা tree structure বা DOM তৈরি করে, এবং প্রতিটা element যেহেতু javascript এর কাছে একেকটা object, তাই প্রতিটা object এর মধ্যে CRUD operation চালাতে পারে।
- Browser javascript এর মাধ্যমে html এর প্রতিটা element কে object এ convert করে interactivity এর জন্য, যেন developer প্রতিটা element কে ধরে CRUD operation চালাতে পারে বা interactive করতে পারে।

এখানে একটা জায়গা ঠিক করে নেওয়া দরকার — **DOM তৈরি করে JavaScript নয়, তৈরি করে browser-এর HTML parser।** JavaScript শুধু **আগে থেকেই তৈরি হয়ে থাকা** DOM-টা ব্যবহার করে।

ধাপগুলো আসলে এভাবে ঘটে:

```text
১. Browser HTML file download করে
২. Browser-এর HTML parser সেটা পড়ে  →  DOM tree তৈরি হয়   ← JavaScript এখানে নেই
৩. Browser page-টা screen-এ আঁকে                            ← JavaScript এখানেও নেই
৪. <script> চলে  →  JavaScript এখন তৈরি DOM-কে ধরে কাজ করে  ← এখানে JavaScript আসে
```

**কীভাবে বুঝবে যে এটাই সত্যি?** দুটো প্রমাণ:

1. Browser-এ JavaScript পুরোপুরি বন্ধ করে দাও — page তবু দেখা যাবে। DOM তৈরি হয়েছে বলেই দেখা যাচ্ছে।
2. তোমার নিজের `js-refresher/index.html` খেয়াল করো — `<script src="./script-4.js">` লেখা আছে `<body>`-এর **একদম শেষে**। কেন? কারণ `script-4.js`-এ আছে `document.getElementById("btn")`। Script যদি `<head>`-এ থাকত, তাহলে সে চলার সময় `<button id="btn">` তখনো DOM-এ আসেইনি — ফলে `null` return করত, আর পরের line-এ `null.addEventListener(...)` করতে গিয়ে error হতো।

অর্থাৎ JavaScript-কে DOM তৈরি হওয়ার জন্য **অপেক্ষা করতে হয়** — সে নিজে DOM বানায় না। (`1.1`-এর `index.html`-এ `<script defer ...>` লেখা আছে ঠিক এই কারণেই — `defer` মানে "DOM তৈরি শেষ হওয়া পর্যন্ত দাঁড়াও"।)

তোমার বাকি কথাটা — প্রতিটা element object, তাই তাদের উপর CRUD চালানো যায় — **একদম ঠিক আছে**।

---

## DOM হলো Web API — JavaScript-এর অংশ নয়

এটা অনেকেই গুলিয়ে ফেলে। `document`, `getElementById`, `addEventListener` — এগুলোর একটাও JavaScript ভাষার নিজের জিনিস নয়। JavaScript ভাষার নিজের জিনিস হলো `let`, `const`, `function`, `Array`, `Object` — এই সব।

DOM হলো **browser-এর দেওয়া একটা Web API** — অর্থাৎ browser JavaScript-এর হাতে কিছু object আর method তুলে দেয়, যাতে JS page-টা নাড়াচাড়া করতে পারে।

| | কে দেয় | উদাহরণ |
| --- | --- | --- |
| **JavaScript (ভাষা)** | ECMAScript standard | `let`, `const`, `function`, `Array`, `Math` |
| **DOM (Web API)** | Browser | `document`, `window`, `getElementById()`, `addEventListener()` |

এই কারণেই একই JavaScript code Node.js-এ চলবে, কিন্তু `document.getElementById(...)` লিখলে Node.js-এ error দেবে — browser নেই, তাই DOM-ও নেই।

---

## CRUD Operations

- REST API: CRUD(Create, Read, Update, Delete)

**CRUD** কোনো একটা নির্দিষ্ট প্রযুক্তির নাম নয় — এটা যেকোনো data নিয়ে কাজ করার চারটি মৌলিক কাজের সংক্ষিপ্ত রূপ। REST API-তে server-এর data নিয়ে এই চারটি কাজ হয়; DOM-এও page-এর element নিয়ে ঠিক সেই একই চারটি কাজ হয়:

| CRUD | DOM-এ কী করা হয় | উদাহরণ |
| --- | --- | --- |
| **C**reate | নতুন element তৈরি করে page-এ বসানো | `document.createElement("div")`, `appendChild()` |
| **R**ead | element খুঁজে বের করা বা তার মান পড়া | `document.getElementById("btn")`, `el.textContent` |
| **U**pdate | element-এর লেখা, style বা attribute বদলানো | `el.innerText = "..."`, `el.classList.add("active")` |
| **D**elete | element মুছে ফেলা | `el.remove()` |

---

## 🧪 Code Walkthrough

এই lesson-এ আলাদা code file নেই, কিন্তু তোমার আগের লেখা code-এই DOM-এর কাজ স্পষ্ট দেখা যায়।

### `js-refresher/script-4.js` — Read + Event

```js
// catch dom element
const button = document.getElementById("btn");   // R — DOM থেকে object টা খুঁজে আনা

button.addEventListener("click", hello);          // ওই object-এর method ব্যবহার

function hello(){
    console.log("Hello World!");
}
```

`document.getElementById("btn")` যা ফেরত দেয় সেটা HTML-এর টুকরো নয় — সেটা একটা **object**, যার নিজের property আর method আছে। তাই পরের line-এ তার `addEventListener()` method call করা যাচ্ছে। এটাই "HTML element = DOM Object" কথাটার বাস্তব প্রমাণ।

ওই file-এ comment করে রাখা লাইনটাও মনে রাখার মতো:

```html
<!-- <button onclick="hello()">Click me</button> -->
```

দুটোই কাজ করে, কিন্তু `addEventListener` ব্যবহার করাই ভালো — কারণ একই element-এ একাধিক handler যোগ করা যায়, আর HTML থেকে JavaScript আলাদা থাকে।

### `1.1`-এর `script.js` — Update

```js
totalPriceElement.innerText = `Total: ৳ ${totalPrice}`;   // U — DOM object-এর property বদলানো
```

এখানে তুমি DOM object-এর একটা property-তে নতুন মান বসিয়ে দিচ্ছ, আর browser সাথে সাথে screen-এ সেটা দেখাচ্ছে। **DOM manipulation** বলতে ঠিক এটাকেই বোঝায়।

> 🔗 পরে React-এ গিয়ে দেখবে, React এই DOM-টা সরাসরি না ধরে আগে একটা **Virtual DOM** ব্যবহার করে — কারণ বারবার আসল DOM বদলালে browser-কে বারবার layout আর paint করতে হয়, যা ব্যয়বহুল। বিস্তারিত আছে [1.3 virtual-dom](../../../../module-1/1.3/virtual-dom/README.md) note-এ।

---

## ⚠️ Common Mistakes & Gotchas

- **"JavaScript DOM তৈরি করে" ভাবা** — উপরের section-টা আবার পড়ো। Browser তৈরি করে, JavaScript ব্যবহার করে।
- **`<head>`-এ script রাখা** — DOM তৈরি হওয়ার আগেই script চললে `getElementById()` `null` দেবে। সমাধান: script `<body>`-এর শেষে রাখা, অথবা `defer` ব্যবহার করা।
- **HTML file নিজেই DOM ভাবা** — HTML হলো লেখা (text), DOM হলো browser-এর memory-তে থাকা object-এর tree। DevTools-এর Elements tab-এ তুমি আসলে **DOM** দেখো, HTML file নয় — সেজন্যই JavaScript দিয়ে কিছু বদলালে সেখানে বদল দেখা যায়, কিন্তু original HTML file-টা অপরিবর্তিতই থাকে।
- **`innerHTML` আর `textContent` এক নয়** — `innerHTML` লেখাটাকে HTML হিসেবে ধরে, তাই বাইরে থেকে আসা কোনো লেখা এতে বসালে **XSS** নিরাপত্তা-ঝুঁকি তৈরি হয়। শুধু লেখা বসাতে চাইলে `textContent` নিরাপদ।
- **`document` Node.js-এ নেই** — DOM browser-এর জিনিস, JavaScript ভাষার নয়।

---

## 🔗 JavaScript Prerequisites

- **Object, property ও method:** DOM-এর পুরো ধারণাটাই object-এর উপর দাঁড়ানো — element একটা object, `id` তার property, `addEventListener()` তার method। → [js-refresher](../../js-refresher/README.md)
- **Function reference vs function call:** `addEventListener("click", hello)` — এখানে `hello` লেখা হয়েছে, `hello()` নয়। বন্ধনী দিলে function টা তখনই চলে যেত, আর তার return value (`undefined`) handler হিসেবে বসত। → [js-refresher](../../js-refresher/README.md)
- **Scope:** `window` হলো browser-এর global scope — global variable আসলে `window`-এরই property হয়ে যায়। → [js-refresher](../../js-refresher/README.md)

---

## 📚 Official Docs

- [Introduction to the DOM — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [Document Object Model — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [`document` — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- [`Window` — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window)

---

## Summary (Key Takeaways)

- **DOM = Document Object Model** — HTML page (Document)-কে object (Object)-এর tree (Model) হিসেবে উপস্থাপন করা।
- HTML থেকে page তার **structure** পায়, আর DOM-এর মাধ্যমে JavaScript সেটাকে **interactive** বানায়।
- প্রতিটি HTML element JavaScript-এর কাছে একটি **object**, যার property ও method আছে — তাই তাকে ধরে কাজ করা যায়।
- Tree-এর শুরু `window` → `document` → `<html>` → `<head>` ও `<body>`।
- **DOM তৈরি করে browser-এর HTML parser, JavaScript নয়** — JS শুধু তৈরি DOM-কে ব্যবহার করে, তাই script-কে DOM তৈরির জন্য অপেক্ষা করতে হয়।
- DOM হলো browser-এর দেওয়া **Web API**, JavaScript ভাষার নিজস্ব অংশ নয় — সেজন্য Node.js-এ `document` নেই।
- DOM-এ element নিয়ে **CRUD** (Create, Read, Update, Delete) — ঠিক যেমনটা REST API-তে data নিয়ে হয়।

---

## Interview Questions

<details>
<summary><b>Q1: What is the DOM, and is it part of JavaScript?</b></summary>

> **Answer:** The DOM (Document Object Model) is a programming interface that represents an HTML document as a tree of objects, where each element, attribute, and piece of text is a node that can be read and modified. It is *not* part of the JavaScript language — JavaScript is defined by the ECMAScript standard, while the DOM is a Web API provided by the browser environment. This is why `document` and `window` exist in a browser but not in Node.js, even though both run JavaScript.

</details>

<details>
<summary><b>Q2: Who builds the DOM — the browser or JavaScript?</b></summary>

> **Answer:** The browser's HTML parser builds it. As the browser downloads HTML, it parses the markup and constructs the DOM tree before any script runs, then paints the page. JavaScript does not create the DOM; it receives a reference to the already-built tree and manipulates it through the DOM API. You can verify this by disabling JavaScript entirely — the page still renders, because the DOM was built regardless.

</details>

<details>
<summary><b>Q3: Why is a `<script>` tag usually placed at the end of `<body>`, or given the `defer` attribute?</b></summary>

> **Answer:** Because HTML is parsed top to bottom, a script running in `<head>` executes before the elements below it exist in the DOM. Any `document.getElementById()` call would return `null`, and calling a method on that would throw. Placing the script at the end of `<body>` guarantees the elements are parsed first. The `defer` attribute achieves the same thing more cleanly: the script downloads in parallel but only executes after the document has been fully parsed.

</details>

<details>
<summary><b>Q4: What is the difference between the HTML source file and the DOM?</b></summary>

> **Answer:** The HTML file is static text on disk or from the server — the blueprint. The DOM is the live, in-memory object tree the browser builds from that text, and it can diverge from the source as soon as scripts modify it. The Elements panel in DevTools shows the current DOM, not the original HTML, which is why dynamically added elements appear there but not in "View Page Source".

</details>

<details>
<summary><b>Q5: What is the `window` object and how does it relate to `document`?</b></summary>

> **Answer:** `window` is the global object in a browser environment — it represents the browser tab itself and holds everything available globally, including timers, `alert()`, and `location`. `document` is one property of `window` and represents the page's content, serving as the entry point to the DOM tree. Because `window` is global, `window.document.getElementById()` can be shortened to `document.getElementById()`. In Node.js the global object is `globalThis` (historically `global`), and it has no `document`, since there is no page.

</details>

<details>
<summary><b>Q6: Why is `innerHTML` considered risky compared to `textContent`?</b></summary>

> **Answer:** `innerHTML` parses the assigned string as HTML, so any markup in it becomes real DOM nodes. If that string contains user-supplied content, an attacker can inject markup and scripts — a cross-site scripting (XSS) vulnerability. `textContent` assigns the value as plain text with no parsing, so markup is displayed literally rather than executed. Use `textContent` whenever you only need to set text; it is also faster, since no HTML parsing is involved.

</details>

---

## 🚀 Overall Enhancement Suggestion

DOM পুরোপুরি আয়ত্তে আনতে পরের ধাপগুলো:

- **Element খোঁজার আধুনিক উপায়** — `querySelector()` ও `querySelectorAll()`, যেগুলোতে CSS selector ব্যবহার করা যায় (`document.querySelector("#btn")`)।
- **Node vs Element** — DOM-এ শুধু element-ই node নয়; text আর comment-ও node। তাই `childNodes` আর `children` আলাদা ফল দেয়।
- **DOM Traversal** — `parentElement`, `children`, `nextElementSibling` দিয়ে tree-র এক node থেকে আরেক node-এ যাওয়া।
- **Element তৈরি ও যোগ করা** — `createElement()`, `append()`, `remove()` দিয়ে হাতে-কলমে CRUD-এর C আর D practice করা।
- **Event নিয়ে গভীরে** — event bubbling, capturing আর `event.target` — React-এর event handling বোঝার জন্য এগুলো কাজে লাগবে।
- **`DOMContentLoaded` event** — script কখন চালানো নিরাপদ, তা ঠিক করার আরেকটি উপায়।
