# 1.1 Introduction to React

## Why React? — Vanilla JS vs React.js

## What is React?

## **Answer:** React is a JavaScript library focused on building user interfaces.

## What is a Library?

**Answer:** Library হচ্ছে এমন কিছু code/tools, যা একটি নির্দিষ্ট কাজকে কেন্দ্র করে তৈরি।

## What is a Framework?

**Answer:** A framework is a complete toolset. একটা complete project করতে গেলে যা যা লাগে, তার অনেক কিছুই এর মধ্যে built-in থাকে। অর্থাৎ, এটি একটি complete package.

## কেন Vanilla JS ব্যবহার না করে React.js ব্যবহার করা হয়?

**Answer:** Vanilla JS-এ data পরিবর্তন হলে আমাদের UI-ও manually update করতে হয়। কিন্তু React-এ শুধু data/state পরিবর্তন করলেই UI automatically update হয়। অর্থাৎ, **UI reacts according to the state**.

## DOM Manipulation

DOM manipulation হলো JavaScript দিয়ে webpage-এর elements create, update, delete, বা modify করার process.

## What is State?

**Answer:** যে data গুলো application-এ সময়ের সাথে change/update হয়, সেগুলোকে **state** বলা হয়।

## UI-এর মধ্যে কী কী কাজ হয়?

**Answer:**

1. DOM তৈরি করা
2. User interaction অনুযায়ী respond করা
3. Webpage-এ সবকিছু render করা

### Explanation

আমরা যখন কোনো HTML file browser-এ open করি, browser সেই HTML markup read করে তার **Document Object Model (DOM)** তৈরি করে। Browser যখন DOM তৈরি করে, তখনই আমরা webpage-এর elements দেখতে পাই। এরপর JavaScript এই DOM manipulate করে user action handle করে।

- HTML আমাদের short-cut syntax দেয় DOM তৈরি করার জন্য
- যদি আমরা manually pure DOM code লিখে সবকিছু তৈরি করতে চাই, তাহলে কাজটি অনেক complex এবং time-consuming হয়ে যায়

## React

React user interface এবং user interaction তৈরি করতে সাহায্য করে।

## ReactDOM

React দিয়ে তৈরি করা UI-কে webpage-এ render করার কাজ ReactDOM করে। তবে এটি সরাসরি browser DOM-এ কাজ না করে আগে **Virtual DOM** ব্যবহার করে। সেখানে changes compare এবং prepare করার পর final update browser DOM-এ apply করা হয়।

## Important Terms

- **JSX (JavaScript XML):** A syntax extension that allows you to write HTML-like markup directly inside your JavaScript files.
- **Parser & Transpiler (e.g., Babel):** Tools that convert modern JS and JSX into plain JavaScript that older browsers can understand.
- **React Component:** An independent, reusable piece of the UI (like a Lego brick).
- **Functional Component:** A standard JavaScript function that returns React elements (JSX). This is the modern standard for writing React.
- **Dumb Component**: HTML-like presentational component
- **Fragment (`<></>`):** A built-in React component that lets you group multiple elements together without adding an extra node to the actual DOM.
- **Tuple:** Often seen in React Hooks (like `useState`), an array with a fixed number of elements of known types (e.g., `[state, setState]`).

## Key Takeaways Summary

- **UI is a Function of State:** In React, you change the state, and React automatically updates the UI to reflect that state.
- **Declarative Approach:** React abstracts away the manual DOM manipulation required by Vanilla JS.
- **Separation of Concerns:** `react` defines the UI logic, while `react-dom` handles rendering that logic to the browser.
- **Component-Driven:** React applications are built by composing small, reusable functional components.

## Interview Preparation

Here are 5 industry-driven interview questions related to the fundamentals of React:

**Q1: What is the main difference between a Library and a Framework, and where does React fit?**

> **Answer:** A library is a collection of specific functions that you call to perform tasks, meaning you control the flow of the application. A framework dictates the architecture and calls your code (Inversion of Control). React is technically a library because it only concerns itself with rendering the UI. However, it is often used within frameworks like Next.js to provide a complete application architecture.

**Q2: Explain the concept of "State" in React.**

> **Answer:** State is an application's internal memory. It is a JavaScript object or primitive value that holds data that might change over the lifetime of a component. When a component's state changes, React automatically re-renders that component to ensure the UI stays synchronized with the latest data.

**Q3: Why is direct DOM manipulation considered a bad practice in React?**

> **Answer:** React relies on its own internal representation of the UI (the Virtual DOM) to optimize updates and ensure consistency. If you bypass React and manipulate the DOM directly (e.g., using `document.getElementById`), you break synchronization between React's state and the actual UI, which can lead to unpredictable bugs and performance issues.

**Q4: What is JSX and why do we use it?**

> **Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like markup inside JS files. It is not strictly required, but it makes writing React components much more intuitive and readable by visually resembling the UI it produces. Under the hood, JSX is compiled by tools like Babel into standard `React.createElement()` calls.

**Q5: What are React Fragments and what problem do they solve?**

> **Answer:** A React Fragment (often written as `<></>`) allows developers to group multiple sibling child components together without adding an unnecessary wrapper element (like a `<div>`) to the final DOM. This is important because React components can only return a single parent element, and wrapping everything in `div`s can break CSS layouts (like flexbox or grid) or create bloated HTML structures.
