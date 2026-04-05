### Why React - Vanilla JS vs React.js

- What is React?   
Answer: React is a JS library focused on building User Interfaces.

- What is a Library?   
Answer: Library হচ্ছে কোন একটা perticular কাজ নিয়ে focused.

- What is Framework?   
Answer: Framework is a toolset. একটা complete project করতে গেলে যা যা লাগে, সব কিছুই তার মধ্যে আছে। একটা complete package.

- কেন Vanilla JS ব্যাবহার না করে React.js ব্যাবহার করা হয়?   
Answer: Vanilla JS এ data পরিবর্তন এর সাথে সাথে আমাদের UI ও update করতে হয়, কিন্তু React JS এ শুধুমাত্র data/state পরিবর্তন  করলেই UI automatically update হয়। UI will react according to state.

- DOM Manipulation

- What is State?   
Answer: যে data গুলো application এ update হয় তাদেরকে state বলে।

- UI এর মধ্যে কি কি কাজ হয়?   
Answer: 
    1. DOM তৈরি করা।       
    2. User Interaction অনুযায়ী respond করা।
    3. Webpage এ সবকিছুকে render করা।

    Explanation: আমরা যখন যেকোনো html file কে browser এ open করি, browser সেই html এর markup syntax কে read করে তার document object model(DOM) বানায়। Browser যখন DOM টাকে তৈরি করে, তখন আমরা web page এ জিনিস গুলোকে দেখতে পাই। Browser এই DOM কে manipulate করে JS web page এ user action handle করে।

    - Html আমাদের সাহায্য করে short-cut syntax এ DOM তৈরি করার ক্ষেত্রে।     
    - আমরা যদি DOM এর code লিখে লিখে DOM তৈরী করতে চাই তাহলে আমাদের অনেক কষ্ট হবে।

- React: User interface & user interaction বানাতে help করে।

- ReactDOM: যা যা React ব্যাবহার করে করা হয়েছে, সেগুলো web page এ render করে। কিন্তু render করার ক্ষেত্রে react DOM ব্যাবহার না করে, virtual dom ব্যাহার করে, যেখানে সে সকল কাজ কর্ম রাফ করে তারপর finally DOM এ দেখায়। 

- JSX: JavaScript XML
- Parser
- Transpiler: Babel
- Tuple
- React Component
- Dumb Component: HTML
- Functional Component: React
- Fragment