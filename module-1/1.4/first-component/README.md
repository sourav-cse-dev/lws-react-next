# 1.4 - Basics of React Components: Your first component

## Your First Component (react.dev)

- React-এর core building block হচ্ছে Component।
- React-এ আমরা Functional Component তৈরি করতে পারি। Component-এর মাধ্যমে পুরো web page-কে আমরা ছোট ছোট ভাগে ভাগ করে নিতে পারি। পুরো জিনিসটি নিয়ে একসাথে চিন্তা না করে, ছোট ছোট অংশ নিয়ে আলাদাভাবে (individually) চিন্তা করা সহজ হয়।
- `main.jsx` বা `index.js` থেকে React-এর render শুরু হয়। এটিই React application-এর entry point।
- সাধারণ HTML elements-গুলো dumb (অর্থাৎ তাদের নিজস্ব কোনো logic নেই), কিন্তু React components-গুলো functional এবং interactive।
- React আমাদের markup (HTML), CSS এবং JavaScript-কে একত্রে মিলিয়ে custom "Component" তৈরি করার সুযোগ দেয়, যা app-এর জন্য reusable UI elements হিসেবে কাজ করে।
- React component-এর নাম অবশ্যই Capital letter (বড় হাতের অক্ষর) দিয়ে শুরু হতে হবে, এটি mandatory।
- React component মূলত একটি JavaScript function, যার ভেতরে আমরা markup (JSX) যুক্ত করতে পারি।
- Component-গুলোকে compose, order এবং nest করে আমরা পুরো page-এর design তৈরি করতে পারি।
- Project বড় হওয়ার সাথে সাথে আমরা আগে তৈরি করা component-গুলো পুনরায় ব্যবহার (reuse) করে development speed বাড়াতে পারি।
- React সবসময় interactivity-কে প্রাধান্য দেয়।
- JSX-এর পূর্ণরূপ হলো JavaScript XML।
- `return` statement-এর সবকিছু একই লাইনে লেখা যায়। তবে markup যদি `return` keyword-এর সাথে একই লাইনে না থাকে, তবে অবশ্যই সেটিকে parentheses `()`-এর ভেতর রাখতে হবে।
- Parentheses ছাড়া `return`-এর পরের লাইনের যেকোনো code ignore করা হবে!

## Component File Structure and Nesting

- একই file-এ ব্যবহৃত একাধিক function থাকলে, শুধুমাত্র যেগুলো অন্য কোথাও ব্যবহার করা হবে, সেগুলোকে export করতে হয়।
- Parent component-এর ভেতর ব্যবহৃত child component-গুলো যদি অন্য কোথাও ব্যবহার করার প্রয়োজন না হয়, তবে সেগুলোকে একই file-এ রাখা যেতে পারে।
- Vite project-এ React components লেখার জন্য সাধারণত `.jsx` extension ব্যবহার করতে হয়।
- Components অন্য component-কে render করতে পারে, কিন্তু কখনোই একটি component-এর ভেতরে আরেকটি component-এর definition (function declaration) লেখা উচিত নয়। প্রতিটি component-কে top level-এ define করতে হবে।
- Child component-গুলোকে সবসময় Parent component-এর বাইরে (top level-এ) declare করতে হয়।
- একেক ধরনের project একেক ধরনের root element (যেমন: `<div id="root"></div>`) ব্যবহার করে।

---

## Summary (Key Takeaways)

- Component হলো React-এর মূল ভিত্তি (building block)।
- React component মূলত একটি JavaScript function যা JSX (markup) return করে।
- Component-এর নাম অবশ্যই বড় হাতের অক্ষর দিয়ে শুরু হতে হবে।
- Component-এর ভেতরে অন্য component declare করা যাবে না, তবে render করা যাবে।
- `return`-এর পর একাধিক লাইনের JSX থাকলে তা অবশ্যই `()`-এর ভেতর রাখতে হবে।

---

## Interview Questions

1. **What is a React Component?**  
   _Answer:_ A React component is a reusable, self-contained building block of a React application's UI. It is essentially a JavaScript function (or class) that accepts inputs (props) and returns React elements (JSX) describing how a section of the UI should appear.

2. **Why do component names in React have to start with a capital letter?**  
   _Answer:_ React uses the capitalization of the first letter to distinguish between custom React components and standard HTML tags. For example, `<Button />` is recognized as a React component, whereas `<button>` is treated as a standard DOM HTML element.

3. **What is JSX?**  
   _Answer:_ JSX (JavaScript XML) is a syntax extension for JavaScript used in React. It allows developers to write HTML-like markup directly inside JavaScript code, making it easier to visually describe the UI structure. Babel compiles JSX into standard `React.createElement()` calls.

4. **Why shouldn't you define a component inside another component?**  
   _Answer:_ Defining a component inside another component causes the inner component to be recreated from scratch on every render of the parent component. This leads to performance issues and causes the inner component to lose its internal state. Components should always be defined at the top level.

5. **What happens if you return multiple lines of JSX without parentheses `()`?**  
   _Answer:_ In JavaScript, automatic semicolon insertion (ASI) will add a semicolon immediately after the `return` keyword if there's nothing else on that line. This causes the function to return `undefined`, and the subsequent JSX code is ignored. Wrapping the JSX in parentheses prevents ASI and ensures the markup is returned correctly.

6. **What is the difference between an HTML element and a React component?**  
   _Answer:_ HTML elements are standard DOM nodes (like `div`, `span`, `p`) provided by the browser. React components are custom, reusable functions or classes that encapsulate logic, state, and UI structure. A React component ultimately renders standard HTML elements (or other components) to the DOM.
