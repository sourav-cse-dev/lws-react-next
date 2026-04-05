# 1.1 Introduction to React
# Why React? — Vanilla JS vs React.js 

## What is React?
**Answer:** React is a JavaScript library focused on building user interfaces.

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
- **JSX**: JavaScript XML
- **Parser**
- **Transpiler**: Babel
- **Tuple**
- **React Component**
- **Dumb Component**: HTML-like presentational component
- **Functional Component**: Function-based React component
- **Fragment**