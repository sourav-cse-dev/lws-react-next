# 1.5 - Basics of React Components: Importing & Exporting Components

## Importing & Exporting Components (react.dev)

- **Single Page Application (SPA):** Vanilla React project-এ root component সাধারণত একটিই থাকে (যেমন: `App.jsx` বা `main.jsx`)। এই কারণে React-কে Single Page Application বলা হয়। পুরো অ্যাপ্লিকেশনটি একটি মাত্র HTML page-এ load হয় এবং ইউজার ইন্টারঅ্যাকশনের ভিত্তিতে শুধু নির্দিষ্ট component-গুলো পরিবর্তন বা render হয়।
- **Multi Page Application (MPA) in Next.js:** Next.js মূলত Multi Page Application-এর মতো আচরণ করতে পারে (তবে এটি SPA-এর সুবিধাও দেয়)। Next.js-এ App Router বা Pages Router ব্যবহারের ফলে, একেকটি ভিন্ন route-এ গেলে মূলত root component বা page component-টি পরিবর্তন হয়ে যায়।
- **Standalone Components:** আমাদের সবসময় চেষ্টা করা উচিত Standalone Component তৈরি করার। অর্থাৎ, প্রতিটি component-কে তার নিজস্ব feature, logic এবং style-সহ সম্পূর্ণ স্বাধীনভাবে এক জায়গায় রাখতে হবে, যাতে প্রয়োজনে সহজেই অন্য যেকোনো জায়গায় reuse করা যায়।

### Export & Import Patterns in JavaScript / React

JavaScript-এ (এবং React-এ) কোনো component বা function-কে এক file থেকে অন্য file-এ নেওয়ার জন্য মূলত দুই ধরনের export/import পদ্ধতি ব্যবহার করা হয়:

#### 1. Default Export & Import

- **Default Export:** একটি file থেকে শুধুমাত্র **একটি মাত্র** জিনিস (component, function বা variable) default হিসেবে export করা যায়। সাধারণত একটি file-এ যদি একটি প্রধান component থাকে, তবে তাকে default export করা হয়।
  ```javascript
  // Profile.jsx
  export default function Profile() {
    return <div>My Profile</div>;
  }
  ```
- **Default Import:** Default export করা component-কে import করার সময় যেকোনো নাম ব্যবহার করা যায় এবং এতে কোনো curly braces `{}` লাগে না।
  ```javascript
  // App.jsx
  import Profile from "./Profile"; // or import MyProfile from './Profile';
  ```

#### 2. Named Export & Import

- **Named Export:** একটি file থেকে **একাধিক** জিনিস (components, functions, constants) export করার জন্য Named Export ব্যবহার করা হয়। এক্ষেত্রে export keyword-টি সরাসরি variable বা function-এর আগে বসাতে হয়।
  ```javascript
  // Gallery.jsx
  export function Image() { ... }
  export function Description() { ... }
  ```
- **Named Import:** Named export করা জিনিসগুলোকে import করার সময় হুবহু সেই নামেই import করতে হয় এবং অবশ্যই curly braces `{}` ব্যবহার করতে হবে।
  ```javascript
  // App.jsx
  import { Image, Description } from "./Gallery";
  ```

#### 3. Import Alias (Renaming on Import)

- মাঝে মাঝে Named Import করার সময় নামের conflict এড়াতে `as` keyword ব্যবহার করে import করা component-এর নাম পরিবর্তন করা যায়। একে import alias বলে।
  ```javascript
  // App.jsx
  import { Image as GalleryImage } from "./Gallery";
  ```

---

## Summary (Key Takeaways)

- Vanilla React সাধারণত SPA, যেখানে root component একটি থাকে। Next.js বিভিন্ন route-এর জন্য ভিন্ন ভিন্ন component render করে।
- Component-গুলোকে standalone এবং reusable করে তৈরি করা বেস্ট প্র্যাকটিস।
- **Default Export:** এক ফাইলে মাত্র একটি থাকে, import করার সময় `{}` লাগে না, নাম পরিবর্তন করা যায়।
- **Named Export:** এক ফাইলে একাধিক থাকতে পারে, import করার সময় অবশ্যই `{}` লাগে এবং নির্দিষ্ট নাম ব্যবহার করতে হয়।
- **Alias (`as`):** Named import-এর সময় নামের conflict এড়াতে `as` ব্যবহার করে নাম পরিবর্তন করা যায়।

---

## Interview Questions

1. **What is the difference between Default Export and Named Export in JavaScript/React?**  
   _Answer:_ A file can have only one Default Export, and it can be imported using any name without curly braces `{}`. Conversely, a file can have multiple Named Exports. They must be imported using their exact names wrapped in curly braces `{}`.

2. **Can you have multiple default exports in a single file?**  
   _Answer:_ No, a JavaScript module (file) can only have one default export. If you try to use `export default` more than once in the same file, it will throw a syntax error.

3. **How do you rename a named import to avoid naming conflicts?**  
   _Answer:_ You can use the `as` keyword to create an alias during the import. For example: `import { Button as PrimaryButton } from './components/Button';`.

4. **Why is it recommended to build standalone components in React?**  
   _Answer:_ Standalone components encapsulate their own structure, styles, and logic. This makes them highly reusable, easier to test, simpler to maintain, and reduces the risk of unintended side effects when making changes elsewhere in the application.

5. **Why is Vanilla React considered a Single Page Application (SPA)?**  
   _Answer:_ In Vanilla React, the browser loads a single HTML file (usually `index.html`) containing one root `<div>`. React then takes over this root element and dynamically manipulates the DOM to render different components based on user interaction, without ever requesting a new full page from the server. Next.js, on the other hand, can pre-render different HTML pages per route.
