# Lesson #2 - Analyze the DOM

> **এক লাইনে:** Lesson #1-এ জেনেছি DOM কী; এবার console খুলে **নিজের চোখে দেখব** — `document` আসলে কেমন object, তার ভেতরে কী কী আছে, আর কোন জিনিসগুলোতে ভরসা করা যায় না।

---

## 📑 Table of Contents

- [console.log বনাম console.dir](#consolelog-বনাম-consoledir)
- [document object-কে পরীক্ষা করা](#document-object-কে-পরীক্ষা-করা)
- [প্রথম DOM manipulation](#প্রথম-dom-manipulation--documenttitle)
- [document.all ও HTMLAllCollection](#documentall-ও-htmlallcollection)
- [Array নয়, কিন্তু iterable](#array-নয়-কিন্তু-iterable)
- [document.all আসলে deprecated](#-documentall-আসলে-deprecated)
- [Live Collection — কেন index-এ ভরসা নেই](#live-collection--কেন-index-এ-ভরসা-নেই)
- [Code Walkthrough](#-code-walkthrough-এই-folder-এর-code)
- [Common Mistakes & Gotchas](#️-common-mistakes--gotchas)
- [JavaScript Prerequisites](#-javascript-prerequisites)
- [Official Docs](#-official-docs)
- [Summary (Key Takeaways)](#summary-key-takeaways)
- [Interview Questions](#interview-questions)

---

## `console.log` বনাম `console.dir`

- Javascript এর চোখে DOM দেখতে কেমন, সেটা আমরা এবার দেখবো।

এই লক্ষ্যটা পূরণ করার আসল চাবিকাঠি হলো **`console.dir`** — আর এখানেই `console.log`-এর সাথে তার পার্থক্যটা বোঝা জরুরি:

| | কী দেখায় |
| --- | --- |
| `console.log(element)` | **HTML-এর মতো** করে দেখায় — যেন তুমি markup পড়ছ |
| `console.dir(element)` | **JavaScript object** হিসেবে দেখায় — property আর method-এর তালিকা খুলে যায় |

```js
console.log(document.head);   // <head>...</head>  — markup-এর চেহারা
console.dir(document.head);   // head  { title: "...", children: ..., ... }  — object-এর চেহারা
```

দুটোই **একই জিনিস**, শুধু দেখার ভঙ্গি আলাদা। Lesson #1-এ বলা হয়েছিল "HTML element আসলে object" — `console.dir` ব্যবহার করলে সেই কথাটা চোখের সামনে প্রমাণ হয়ে যায়।

> **Analogy:** একজন মানুষের **ছবি** দেখা আর তার **মেডিকেল রিপোর্ট** দেখা — দুটোই একই মানুষ। `console.log` হলো ছবি, `console.dir` হলো ভেতরের রিপোর্ট।

---

## `document` object-কে পরীক্ষা করা

- `console.dir(document);` - Document object দেখতে কেমন।
- `console.dir(typeof document);` - Document যে আসলেই object সেটা যাচাই করা।
- document object কে যদি আমরা examine করি তাহলে অসংখ্য property and method পাবো।

`typeof document` চালালে ফল আসে `"object"` — অর্থাৎ `document` সত্যিই একটা object, কোনো জাদু নয়। আর object বলেই তার ভেতরে property ও method থাকে।

তোমার `script.js`-এ যেগুলো পরীক্ষা করা হয়েছে:

```js
console.dir(document.title);    // page-এর <title> — string
console.dir(document.URL);      // পুরো URL — string
console.dir(document.domain);   // domain নাম — string
console.dir(document.head);     // <head> element — object
console.log(document.images);   // সব <img> — HTMLCollection
console.log(document.links);    // href সহ সব <a> — HTMLCollection
console.log(document.forms);    // সব <form> — HTMLCollection
```

উপরের তালিকায় দুই ধরনের জিনিস আছে, আর পার্থক্যটা খেয়াল করার মতো:

| Property | কী ফেরত দেয় | ধরন |
| --- | --- | --- |
| `document.title`, `document.URL`, `document.domain` | একটি মাত্র মান | **string** |
| `document.head`, `document.body` | একটি element | **object** |
| `document.images`, `document.links`, `document.forms` | একাধিক element একসাথে | **HTMLCollection** |

তোমার `index.html`-এ একটাই `<form>` আছে (`.new-task-container`) আর একটাই `<img>` (logo), তাই `document.forms` আর `document.images` দুটোতেই একটি করে element পাওয়া যাবে। `document.links`-এ কিছুই পাওয়া যাবে না, কারণ এই page-এ `href` সহ কোনো `<a>` tag নেই।

> 💡 `document.domain` আজকাল **deprecated** — নিরাপত্তার কারণে এটি ব্যবহার করতে নিরুৎসাহিত করা হয়। শেখার জন্য দেখা ঠিক আছে, কিন্তু আসল project-এ দরকার হলে `location.hostname` ব্যবহার করো।

---

## প্রথম DOM manipulation — `document.title`

- `document.title = "Play with DOM";` Can change the actual title of the document, that's how we can manipulate DOM

এটাই এই lesson-এর সবচেয়ে গুরুত্বপূর্ণ মুহূর্ত। শুধু পড়া (read) নয় — এখানে **লেখা (write)** হচ্ছে, আর সাথে সাথে browser-এর tab-এ নামটা বদলে যাচ্ছে।

```js
console.dir(document.title);      // "DOM - Document Object Model"  ← index.html-এ যা লেখা
document.title = "Play with DOM"; // এখন tab-এর নাম বদলে গেল
```

এখানে দুটো জিনিস লক্ষণীয়:

1. Object-এর property-তে নতুন মান বসানোর মতো সাধারণ কাজ করেই DOM বদলে ফেলা গেল। এটাই **DOM manipulation**।
2. **`index.html` file-টা কিন্তু অপরিবর্তিতই আছে** — Lesson #1-এ যে কথাটা বলা হয়েছিল, এটা তার প্রমাণ। তুমি বদলেছ browser-এর memory-তে থাকা DOM, disk-এর HTML file নয়। Page refresh করলেই পুরোনো title ফিরে আসবে।

---

## `document.all` ও HTMLAllCollection

- `console.log(document.all);` একটা নির্দিস্ট html file এ ব্যাবহার হওয়া সকল element/object এর collection। এটা মনে হতে পারে একটা array, আসলে এটা array না। তাই document এর উপর কোন array operation করা যাবে না। এটা একটা special type of object যার নাম HTMLAllCollection।

অর্থাৎ `document.all` দেখতে array-র মতো (`[...]` বন্ধনী, index, `length`), কিন্তু আসলে array নয়। তাই array-র method গুলো এতে নেই:

```js
document.all.map(...)     // ❌ TypeError — map বলে কিছু নেই
document.all.filter(...)  // ❌ TypeError
document.all.length       // ✅ এটা আছে
document.all[6]           // ✅ index দিয়ে ধরা যায়
```

> 📝 ছোট সংশোধন: তুমি লিখেছ "**document** এর উপর কোন array operation করা যাবে না" — আসলে কথাটা **`document.all`**-এর ক্ষেত্রে প্রযোজ্য, `document`-এর নয়। `document` তো আলাদা একটা object।

### Array নয়, কিন্তু iterable

- এটা array না হলেও এটাতে loop করা যাবে কারণ এটা iterable(Symbol.iterator)।

```js
for (let element of document.all) {
    console.log(element);
}
```

একদম ঠিক। **iterable** মানে object-টার ভেতরে `Symbol.iterator` নামের একটা বিশেষ method আছে, যা `for...of`-কে বলে দেয় "একটা একটা করে কীভাবে বের করতে হবে"। array, string, Map, Set — সবই iterable, আর HTMLAllCollection-ও তাই।

**তাহলে array-র সুবিধা পেতে চাইলে?** iterable বলেই তাকে সহজে আসল array-তে রূপ দেওয়া যায়:

```js
const allElements = Array.from(document.all);  // অথবা: [...document.all]

allElements.filter(el => el.tagName === "LI"); // ✅ এখন array-র সব method কাজ করবে
```

---

## ⚠️ `document.all` আসলে deprecated

শেখার জন্য `document.all` চমৎকার, কিন্তু আসল কাজে এটি **ব্যবহার করা হয় না** — এটি একটি **deprecated legacy** feature, যা কেবল পুরোনো website গুলো ভেঙে না ফেলার জন্য browser-এ রেখে দেওয়া হয়েছে।

আর এর সাথে জড়িয়ে আছে JavaScript-এর সবচেয়ে অদ্ভুত একটা ব্যতিক্রম, যা তোমার `typeof` পরীক্ষার সাথে সরাসরি মিলে যায়:

```js
typeof document;         // "object"   ← স্বাভাবিক
typeof document.all;     // "undefined" ← অথচ এটা তো আছে!

if (document.all) {
  console.log("চলবে না");  // ← এই line কখনো চলবে না
}
```

`document.all` **একমাত্র object যেটা falsy** — অর্থাৎ `if`-এর ভেতরে দিলে `false`-এর মতো আচরণ করে, আর `typeof` দিলে `"undefined"` বলে। এটা bug নয়, ইচ্ছাকৃতভাবে standard-এ লেখা আছে। কারণটা ইতিহাস: পুরোনো দিনে অনেক website `if (document.all)` দিয়ে যাচাই করত "এটা কি Internet Explorer?"। আধুনিক browser গুলো `document.all` রাখতে চেয়েছিল, কিন্তু ওই যাচাইয়ে ধরা পড়তে চায়নি — তাই এই অদ্ভুত ব্যবস্থা।

> এই একটি ঘটনা মনে রাখলে JavaScript-এর truthy/falsy ধারণাটা কখনো ভুলবে না — সব object truthy, **একটি ছাড়া**।

---

## Live Collection — কেন index-এ ভরসা নেই

- `console.log(document.all[6]);` - Array না হলেও array এর মত করে ব্যাহার করা যায়। কিন্তু এই style আমরা কখনওই DOM element select করি না। কারণ আমরা যখন একটা html file এ কাজ করি তখন অনেক element dynamically change হতে পারে। সেই সাথে HTMLAllCollection এর index গুলোও change হয়ে যাবে। তাই HTMLAllCollection index এর উপর ভরসা করে কখনওই DOM manipulation করা ঠিক নয়।

**এই সতর্কতাটা একদম সঠিক**, আর এর পেছনে যে প্রযুক্তিগত কারণ আছে তার নাম **live collection**।

`document.all`, `document.images`, `document.forms` — এগুলো DOM-এর একটা **ছবি (snapshot)** নয়, বরং **সরাসরি সংযোগ**। DOM-এ কিছু যোগ বা বাদ হলে collection নিজে থেকেই সাথে সাথে বদলে যায়:

```js
console.log(document.all.length);          // ধরা যাক 30

document.body.appendChild(document.createElement("div"));

console.log(document.all.length);          // এখন 31 — নিজে থেকেই বেড়ে গেছে
```

তাই index কখনোই স্থায়ী নয়। তোমার `index.html`-এ গুনে দেখলে (document order অনুযায়ী):

```text
0 → <html>        4 → <meta name="author">
1 → <head>        5 → <meta name="description">
2 → <meta charset> 6 → <title>          ← document.all[6]
3 → <meta viewport> 7 → <link>
                  8 → <body>
```

অর্থাৎ `document.all[6]` এখন `<title>` element। কিন্তু `<head>`-এ যদি আর একটা `<meta>` tag যোগ করো, তাহলে index 6 হয়ে যাবে সেই নতুন meta — আর তোমার code চুপচাপ ভুল element ধরবে। **কোনো error দেবে না**, এটাই সবচেয়ে বিপজ্জনক দিক।

> 💡 আরেকটা মজার ব্যাপার — `document.title = "Play with DOM"` চালানোর পরে `document.all[6]` দেখলে ভেতরের লেখাটা বদলে গেছে দেখতে পাবে, কারণ collection টা live।

### তাহলে কীভাবে element select করা উচিত?

`id` বা CSS selector দিয়ে — index দিয়ে নয়। তোমার `index.html`-এ ইতিমধ্যেই এর জন্য `id` বসানো আছে:

```js
document.getElementById("header");        // <h1 id="header">
document.getElementById("items");         // <ul id="items">
document.querySelector("#new-task");      // CSS selector দিয়ে
document.querySelectorAll(".item");       // সব <li class="item">
```

Element যেখানেই সরে যাক, `id` বা class ঠিক থাকলে এগুলো ঠিক জিনিসটাই ধরবে। এটাই পরের lesson গুলোর মূল বিষয়।

---

## 🧪 Code Walkthrough (এই folder-এর code)

```text
lesson-2/
├── index.html     ← To-Do App-এর markup (এখনো কোনো কাজ করে না)
├── style.css      ← সাজসজ্জা
├── script.js      ← শুধু console-এ DOM পরীক্ষা
└── images/logo.png
```

### `index.html` — যে কাঠামোটা নিয়ে কাজ হবে

এটি "Learn with Sumit"-এর To-Do App-এর markup। এখনো কোনো JavaScript একে কাজ করায় না — এটি শুধু **DOM পরীক্ষা করার নমুনা**। মূল অংশগুলো:

```html
<h1 id="header" class="header">To-Do App</h1>

<form class="new-task-container box">      <!-- document.forms এতে একে পাবে -->
  <input type="text" id="new-task" />
  <input type="submit" id="addTask" value="Add Task" />
</form>

<ul id="items">                             <!-- Incomplete Tasks -->
  <li class="item"><input type="checkbox" /><label>Task Name</label></li>
  ...
</ul>
```

খেয়াল করো — `id` দেওয়া আছে `header`, `new-task`, `addTask`, `items`-এ। এগুলোই পরে element ধরার নিরাপদ হাতল হিসেবে কাজে লাগবে।

### `script.js` — শুধুই পর্যবেক্ষণ

পুরো file-টায় একটা মাত্র line ছাড়া বাকি সব `console` — অর্থাৎ এখানে কিছু **তৈরি** করা হচ্ছে না, শুধু **দেখা** হচ্ছে। ব্যতিক্রম ওই এক line:

```js
document.title = "Play with DOM";   // একমাত্র জায়গা যেখানে DOM বদলানো হচ্ছে
```

`<script src="script.js">` আছে `<body>`-এর শেষে — Lesson #1-এ যে কারণটা জেনেছিলে, ঠিক সেই কারণেই।

---

## ⚠️ Common Mistakes & Gotchas

- **HTMLCollection-কে array ভাবা** — `.map()`, `.filter()`, `.forEach()` কাজ করবে না। দরকার হলে `Array.from()` বা `[...collection]` দিয়ে রূপান্তর করে নাও।
- **Index দিয়ে element ধরা** — collection live, তাই index বদলে যায়, আর ভুল হলেও কোনো error আসে না। সবসময় `id`, class বা `querySelector` ব্যবহার করো।
- **`if (document.all)` লেখা** — কখনো `true` হবে না, কারণ এটি JavaScript-এর একমাত্র falsy object।
- **`console.log` দিয়ে object পরীক্ষা করা** — element-এর property দেখতে চাইলে `console.dir` ব্যবহার করো, `console.log` markup দেখাবে।
- **DOM বদলালে HTML file বদলায় ভাবা** — `document.title` বদলালে tab-এর নাম বদলাবে, কিন্তু `index.html` অপরিবর্তিত থাকবে। Refresh করলেই আগের অবস্থা ফিরে আসবে।
- **`document.domain` ব্যবহার করা** — deprecated; দরকার হলে `location.hostname`।

---

## 🔗 JavaScript Prerequisites

- **Object property read ও write:** `document.title` পড়া আর `document.title = "..."` লেখা — সাধারণ object property-র মতোই আচরণ। → `module-0/js/js-refresher` note
- **`typeof` operator:** কোনো মান কী ধরনের তা যাচাই করার উপায় — `typeof document` দিলে `"object"`।
- **Truthy / Falsy:** `if (document.all)` কেন চলবে না, তা বুঝতে এটি লাগবে। ⚠️ js-refresher-এ এখনো লেখা হয়নি।
- **`for...of` ও iterable:** array ছাড়াও যেসব জিনিসে loop চালানো যায়। ⚠️ js-refresher-এ এখনো লেখা হয়নি।
- **Spread operator (`...`) ও `Array.from()`:** iterable থেকে array বানানোর দুই উপায়। ⚠️ js-refresher-এ এখনো লেখা হয়নি।

---

## 📚 Official Docs

- [`Document` — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- [`document.all` — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/all)
- [`HTMLCollection` — MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
- [`console.dir()` — MDN](https://developer.mozilla.org/en-US/docs/Web/API/console/dir_static)
- [`document.title` — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/title)

---

## Summary (Key Takeaways)

- **`console.dir`** object-এর ভেতরটা দেখায়, **`console.log`** markup-এর চেহারা দেখায় — DOM পরীক্ষা করতে `console.dir` বেশি কাজের।
- `typeof document` দিলে `"object"` — অর্থাৎ `document` সত্যিই একটি object, যার অসংখ্য property ও method আছে।
- `document.title`, `document.URL` string দেয়; `document.head` element দেয়; `document.images`, `document.links`, `document.forms` **HTMLCollection** দেয়।
- `document.title = "..."` লিখেই DOM manipulation করা যায় — কিন্তু এতে **HTML file বদলায় না**, শুধু memory-র DOM বদলায়।
- `document.all` হলো **HTMLAllCollection** — array নয়, তাই array-র method নেই; তবে **iterable** বলে `for...of` চলে আর `Array.from()` দিয়ে array বানানো যায়।
- `document.all` **deprecated**, আর এটি JavaScript-এর **একমাত্র falsy object** (`typeof document.all === "undefined"`)।
- এসব collection **live** — DOM বদলালে নিজে থেকেই বদলায়, তাই **index দিয়ে element ধরা কখনোই নিরাপদ নয়**। `id` বা `querySelector` ব্যবহার করতে হবে।

---

## Interview Questions

<details>
<summary><b>Q1: What is the difference between `console.log()` and `console.dir()`?</b></summary>

> **Answer:** For plain values they behave almost identically, but for DOM elements they differ meaningfully. `console.log()` prints an element using its HTML representation, so you see markup you can expand like a tree. `console.dir()` prints it as a JavaScript object, listing its properties and methods. When you want to discover what an element can actually do — its `id`, `classList`, `addEventListener`, and so on — `console.dir()` is the right tool.

</details>

<details>
<summary><b>Q2: Is `document.all` an array? How can you loop over it?</b></summary>

> **Answer:** No. It is an `HTMLAllCollection`, an array-like object that has `length` and numeric indexing but none of the array methods such as `map`, `filter`, or `reduce`. It is however iterable — it implements `Symbol.iterator` — so `for...of` works directly on it. To use array methods you must convert it first with `Array.from(document.all)` or the spread syntax `[...document.all]`.

</details>

<details>
<summary><b>Q3: What is a "live" HTMLCollection, and why does it matter?</b></summary>

> **Answer:** A live collection maintains a direct connection to the document rather than being a snapshot taken at the moment of the call. If an element is added or removed from the DOM afterwards, the collection's contents and `length` update automatically. This matters because any index you stored may now point at a different element, and the code will silently operate on the wrong node instead of throwing an error. `document.getElementsByClassName()` and `document.images` are live; `document.querySelectorAll()` returns a static NodeList instead.

</details>

<details>
<summary><b>Q4: Why should you never select elements by index from a collection?</b></summary>

> **Answer:** Because indices reflect document order, which changes whenever markup changes. Adding a single `<meta>` tag in `<head>` shifts every index after it, so `document.all[6]` might be the `<title>` today and something else tomorrow. Worse, the failure is silent — you get a valid element, just the wrong one. Selecting by `id` or CSS selector via `getElementById()` or `querySelector()` binds to something stable and meaningful instead.

</details>

<details>
<summary><b>Q5: What is unusual about `document.all` in JavaScript?</b></summary>

> **Answer:** It is the only object in JavaScript that is falsy. `if (document.all)` never runs its block, and `typeof document.all` returns `"undefined"` even though the object clearly exists. This is deliberately written into the specification for backwards compatibility: legacy sites used `if (document.all)` to detect old Internet Explorer, so when other browsers added `document.all` they needed it to stay invisible to those checks. It is the documented exception to the rule that every object is truthy.

</details>

<details>
<summary><b>Q6: If you change `document.title` in the console, does the HTML file change?</b></summary>

> **Answer:** No. The HTML file on disk is the static source; the DOM is the live in-memory representation the browser built from it. Assigning `document.title` mutates that in-memory tree, which is why the browser tab updates immediately, but nothing is written back to the file. Reloading the page re-parses the original HTML and the change disappears. This is the practical demonstration that the HTML source and the DOM are two different things.

</details>

---

## 🚀 Overall Enhancement Suggestion

এই lesson-এর পরের ধাপগুলো:

- **Element selection ভালোভাবে শেখা** — `getElementById`, `getElementsByClassName`, `querySelector`, `querySelectorAll`। বিশেষ করে **`querySelectorAll` static NodeList দেয়, কিন্তু `getElementsByClassName` live HTMLCollection দেয়** — এই পার্থক্যটা এই lesson-এর live collection ধারণার সরাসরি পরবর্তী ধাপ।
- **NodeList বনাম HTMLCollection** — `forEach` NodeList-এ আছে, HTMLCollection-এ নেই। কেন, সেটা বোঝা।
- **Element-এর property গুলো ঘেঁটে দেখা** — `console.dir(document.getElementById("header"))` চালিয়ে `id`, `className`, `textContent`, `classList` খুঁজে বের করা।
- **এই To-Do App-টাকে সত্যিই কাজ করানো** — `index.html`-এর `id` গুলো ধরে task যোগ করা, complete করা, delete করা। DOM-এর CRUD হাতে-কলমে অনুশীলন।
- **JS foundation:** truthy/falsy, `for...of` ও iterable, spread operator — এই তিনটা js-refresher-এ যোগ করে নিলে ভালো হয়, কারণ এই lesson-এ তিনটাই লেগেছে।
