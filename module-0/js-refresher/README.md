# JavaScript Refresher

`Scoping`
- Scope: Lexical Scoping: দুনিয়া। ভিতরে বসে(function) আমরা বাইরের(global) কোন কিছুর এক্সেস পাবো, কিন্তু বাইরে বসে ভিতরের কোন কিছুর এক্সেস পাবো না।
- Function Scoped
- Global Scoped

---

`var vs let vs const`
- var: function scoped
- var re-declare এবং re-assign দুটোই করা যায়, যা অনেক confusion তৈরী করে।
---
- let: block scoped
- block: anything withing a curly {} brackets
- let a = 5; variable declaration & assignment
- let re-declare করা যায় না, কিন্তু re-assign করা যায়।
---
- const: blocked scoped
- const re-declare করা যায় না, এবং re-assign করা যায় না।
- const যদি object(premitivie data/which have reference value) কে declare করে, তবে object এর property ধরে তাকে mutate/পরিবর্তন করা যাবে।
- const যদি array(premitivie data/which have reference value) কে declare করে, তবে array তে নতুন value push করা যাবে।
- এই দুই ক্ষেত্রেই re-assign করা হয় নি। Mutate করা হয়েছে। Same reference এ বসে থাকা object, array কে পরিবর্তন করা যায়। কিন্তু same reference এ বসে থাকা variable কে re-assign করা যায় না।

---

`Function`
- Regular function: 
```
function hello(){
    console.log("Hello World!);
}
```
- যখন function কোন return না থাকে, by default সেই function থেকে কিছু return হবেই।
- function কোন return statement না থাকলে, by default এটি undefined return করবে।
- JavaScript এ undefined মানে হলো কিছু একটা।
---
- Function expression
```
const hello = function(){
    console.log("Hello World");
}
```
- hello variable এর মধ্যে একটা function কে assign করা হয়েছে।
- Statement in JS: যার মধ্যে কোন একটা action করা হচ্ছে।
- Expression in JS: যা evaluates to a value। অর্থাৎ কোন একটা value তে convert হয়ে যায়।
---
- Named function expression
```
const hello = function hello(){
    console.log("Hello World!");
}
```
- hello variable এর মধ্যে একটা named function কে assign করা হয়েছে।
- ESLint recommends to use named function expression.
---
- arrow function
```
const hello = () => {
    console.log("Hello World!");
}
```
---
- Annonymous function
```
function hello(){
    return () => {
        console.log("Hello World!");
    }
}
```
--- 

`Event Handlers`
- Event driven pattern/architechture
- Observer pattern