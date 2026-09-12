# 1.2 - Introduction to React: Installation & Development Environment Setup

> **এক লাইনে:** `1.1`-এ CDN আর browser-এর Babel দিয়ে React চালানো হয়েছিল; এখানে **Vite** দিয়ে আসল project setup করা হয়, যেখানে transpile হয় আগেই — browser-এ নয়।

---

## 📑 Table of Contents

- [কেন build tool দরকার?](#কেন-build-tool-দরকার)
- [Essential Setup Checklist](#essential-setup-checklist)
- [Recommended VS Code Extensions](#recommended-vs-code-extensions)
- [Useful VS Code Shortcuts](#useful-vs-code-shortcuts)
- [Create a React Project with Vite](#create-a-react-project-with-vite)
- [Project Walkthrough](#-project-walkthrough-এই-folder-এর-code)
- [package.json বোঝা](#packagejson-বোঝা)
- [Important Files](#important-files)
- [User Snippet](#user-snippet)
- [Common Mistakes & Gotchas](#️-common-mistakes--gotchas)
- [JavaScript Prerequisites](#-javascript-prerequisites)
- [Official Docs](#-official-docs)
- [Summary (Key Takeaways)](#summary-key-takeaways)
- [Interview Questions](#interview-questions)

---

## কেন build tool দরকার?

`1.1`-এ আমরা `react.html`-এ তিনটা `<script>` tag বসিয়ে React চালিয়েছিলাম — React, ReactDOM, আর Babel। সেখানে JSX transpile হতো **browser-এ, প্রতিবার page load হওয়ার সময়**। শেখার জন্য ঠিক আছে, কিন্তু আসল project-এ তিনটা সমস্যা:

- প্রতিবার page load-এ transpile হওয়া মানে site ধীর।
- File বাড়লে কোন `<script>` কার আগে আসবে, সেই ঝামেলা সামলানো কঠিন।
- `npm`-এর হাজারো package ব্যবহার করা যায় না।

**Vite** এই কাজগুলোই আগে থেকে করে রাখে। এটি দুটো আলাদা কাজ করে:

```text
Development  →  npm run dev
   Browser যে file টা চায় শুধু সেটাই তখনই transform করে পাঠায় (native ES modules)
   ফলে server চালু হয় প্রায় সাথে সাথে, আর file save করলে HMR দিয়ে
   পুরো page reload ছাড়াই শুধু বদলানো অংশটুকু update হয়

Production   →  npm run build
   সব file একসাথে bundle + minify করে dist/ folder-এ রাখে
   Browser তখন শুধু তৈরি, ছোট করা JavaScript পায় — কোনো Babel script লাগে না
```

> **Analogy:** `1.1`-এর পদ্ধতি ছিল অতিথি আসার পর রান্না শুরু করা — সবাইকে বসে থাকতে হয়। Vite-এর `build` হলো আগে থেকেই রান্না করে রাখা — অতিথি এলে শুধু পরিবেশন।

---

## Essential Setup Checklist

- Install **Node.js**
- Install **VS Code**
- Check **Node.js version** with `node -v`
- Check **npm version** with `npm -v`
- While installing **Node.js on Windows**, make sure to enable **Add Node.js to PATH**
- In **VS Code**, make sure the `code` command is added to PATH

> Node.js কেন লাগে? Browser-এর বাইরে JavaScript চালানোর জন্য। Vite, ESLint, npm — এই সব tool-ই আসলে JavaScript দিয়ে লেখা, তাই এগুলো চালাতে Node.js দরকার। **PATH**-এ যোগ করা মানে terminal-কে বলে দেওয়া "`node` লিখলে program-টা কোথায় খুঁজে পাবে"।

---

## Recommended VS Code Extensions

- **Theme:** Learn With Sumit
- **Formatter:** Prettier
- **Linting / Error Checking:** ESLint
- **Live Server**
- **Path Autocomplete**
- **Auto Rename Tag**

> **Prettier আর ESLint এক জিনিস নয়** — Prettier দেখে code-টা **দেখতে** কেমন (indentation, quote, line break)। ESLint দেখে code-টায় **সমস্যা** আছে কি না (unused variable, ভুল hook ব্যবহার)। এই project-এ ESLint-এর নিজস্ব config file-ও আছে — `eslint.config.js`।
>
> **Live Server** মূলত `1.1`-এর মতো plain HTML file-এর জন্য দরকার ছিল। Vite project-এ আর লাগে না, কারণ `npm run dev` নিজেই একটা dev server চালু করে।

---

## Useful VS Code Shortcuts

- **Open Settings:** `cmd + ,`
- **Open Command Palette:** `cmd + shift + p`
- **Open Terminal:** ``ctrl + ` ``
- **Workspace Tip:** Use a separate workspace for each project

---

## Create a React Project with Vite

### Step 1: Create the project

```bash
npm create vite@latest
```

### Step 2: Choose project location

- Enter a **project name** to create the project in a new folder
- Enter `.` to create the project in the **current folder**

### Step 3: Select project options

- **Framework:** React
- **Variant:** JavaScript

### Step 4: Install dependencies

```bash
npm install
```

`package.json`-এ লেখা প্রতিটা package npm registry থেকে নামিয়ে `node_modules/` folder-এ রাখে। সাথে `package-lock.json` তৈরি/update হয়, যেখানে **ঠিক কোন version** নামানো হলো তা লেখা থাকে।

### Step 5: Run the development server

```bash
npm run dev
```

---

## 🧪 Project Walkthrough (এই folder-এর code)

Vite যে project তৈরি করে দিয়েছে, তার প্রতিটা file আসলে কী করছে:

```text
install-react/
├── index.html          ← entry point (root-এ, public/-এ নয়)
├── package.json        ← কোন package লাগবে + কোন command আছে
├── vite.config.js      ← Vite-এর নিজের setting
├── eslint.config.js    ← ESLint-এর নিয়ম
├── public/             ← যা হুবহু copy হয়ে যায় (vite.svg)
└── src/
    ├── main.jsx        ← React এখান থেকে শুরু হয়
    ├── App.jsx         ← root component
    ├── index.css       ← global style
    └── App.css         ← App component-এর style
```

### `index.html` root-এ কেন?

```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

পুরোনো Create React App-এ এই file থাকত `public/` folder-এ, কিন্তু Vite-এ এটি project-এর **root-এ** থাকে। কারণ Vite এই HTML file-টাকেই entry point ধরে নেয় — এখান থেকেই সে খুঁজে বের করে কোন JS file load করতে হবে।

লক্ষ্য করো `type="module"` — `1.1`-এর `type="text/babel"`-এর জায়গায় এখন এটি। অর্থাৎ Babel-এর কাজটা এখন Vite করছে, browser নয়।

### `src/main.jsx` — React-এর শুরু

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

`1.1`-এর সাথে মিলিয়ে দেখো — কাজ একই (`createRoot(...).render(...)`), কিন্তু এখন `React` আর `ReactDOM` global variable নয়। এখন `import` করে আনা হচ্ছে, কারণ Vite **ES Modules** ব্যবহার করে। এমনকি CSS file-ও `import` করা যায়।

**`<StrictMode>` কী?** এটি কোনো UI তৈরি করে না — এটি শুধু development-এ বাড়তি check চালায় এবং সম্ভাব্য bug ধরিয়ে দেয়। এর জন্যই development-এ তোমার component **দুবার render হয়** এবং `console.log` দুবার দেখায়। এটা bug নয়, ইচ্ছাকৃত — production build-এ এমন হয় না।

### `src/App.jsx` — root component

```jsx
import "./App.css";

function App() {
  return (
    <div>
      <div>Hello World</div>
    </div>
  );
}

export default App;
```

Vite-এর default template-এ counter, logo ইত্যাদি থাকে; এখানে সেগুলো মুছে শুধু "Hello World" রাখা হয়েছে — শুরু করার জন্য এটাই সবচেয়ে পরিষ্কার।

### `vite.config.js`

```js
export default defineConfig({
  plugins: [react()],
});
```

`@vitejs/plugin-react` plugin-টাই আসলে JSX transpile আর Fast Refresh (HMR) চালু করে। এটি না থাকলে Vite `.jsx` file বুঝত না।

---

## `package.json` বোঝা

### Scripts

এই project-এ চারটি command আছে:

| Command | কাজ |
| --- | --- |
| `npm run dev` | Development server চালু করে, HMR সহ |
| `npm run build` | Production-এর জন্য bundle করে `dist/` folder-এ রাখে |
| `npm run preview` | `build`-এর ফলাফলটা locally চালিয়ে দেখায় — deploy করার আগে যাচাই |
| `npm run lint` | ESLint চালিয়ে code-এর সমস্যা খুঁজে বের করে |

### Dependencies vs Dev Dependencies

#### `dependencies`

Packages that are required in the production build.

#### `devDependencies`

Packages that are only needed during development and are not included in production.

এই project-এর `package.json`-এ পার্থক্যটা একদম স্পষ্ট:

```json
"dependencies": {
  "react": "^19.2.4",
  "react-dom": "^19.2.4"
},
"devDependencies": {
  "vite": "^8.0.1",
  "eslint": "^9.39.4",
  "@vitejs/plugin-react": "^6.0.1"
}
```

`react` আর `react-dom` থাকে `dependencies`-এ, কারণ এই code আসলেই browser-এ চলে। কিন্তু Vite আর ESLint থাকে `devDependencies`-এ — এরা শুধু তোমার computer-এ কাজ করে, তৈরি হওয়া website-এ Vite-এর এক লাইন code-ও যায় না।

### Version-এর `^` চিহ্নটা কী?

`"react": "^19.2.4"` মানে — 19.2.4 বা তার চেয়ে নতুন, **কিন্তু 20.0.0-এর নিচে**। অর্থাৎ minor আর patch update নেওয়া হবে, কিন্তু বড় (breaking) update নিজে থেকে আসবে না। এই নিয়মটার নাম **Semantic Versioning** (`major.minor.patch`)।

তাহলে সবার version এক থাকবে কীভাবে? সেই কাজটা করে `package-lock.json` — এখানে হুবহু version লেখা থাকে, তাই **এই file অবশ্যই git-এ commit করতে হয়**।

---

## Important Files

### `.gitignore`

Used to exclude files and folders that should not be pushed to GitHub.

সবচেয়ে বড় উদাহরণ `node_modules/` — এটি বিশাল আকারের, আর `package.json` থাকলে যে কেউ `npm install` দিয়ে হুবহু বানিয়ে নিতে পারে। তাই এটি কখনো git-এ যায় না। `dist/` folder-ও একই কারণে বাদ।

### `.env`

Used to store sensitive information such as:

- API keys
- Secret tokens
- Environment variables

> Never push `.env` file to a public repository.

#### ⚠️ কিন্তু Vite-এ একটা জরুরি কথা

উপরের নিয়মটা **backend বা Next.js-এর server-side**-এর জন্য সত্যি। কিন্তু Vite-এর মতো frontend-only project-এ **`.env`-এ রাখা মানেই সেটা গোপন নয়**।

Vite শুধু `VITE_` দিয়ে শুরু হওয়া variable গুলো code-এ ব্যবহার করতে দেয়, আর সেগুলো **build-এর সময় সরাসরি JavaScript file-এর ভেতরে বসে যায়**:

```js
// .env  →  VITE_API_URL=https://api.example.com
const url = import.meta.env.VITE_API_URL;
```

Build করার পর `dist/` folder-এর JS file খুলে খুঁজলে ওই মানটা **লেখা অবস্থায় পাওয়া যাবে**। Browser-এ DevTools খুললেও দেখা যাবে। তাই:

- ✅ `.env`-এ রাখা ঠিক আছে: API-এর URL, public key, feature flag — অর্থাৎ যা প্রকাশ পেলেও ক্ষতি নেই।
- ❌ কখনোই রাখা যাবে না: database password, private API secret, payment gateway-এর secret key। এগুলো **শুধু server-এ** থাকতে হবে।

`.env` git-এ না দেওয়ার আসল কারণ এখানে দুটো — একটা হলো secret ফাঁস হওয়া, আরেকটা হলো প্রত্যেকের নিজের computer-এ setting আলাদা হতে পারে।

---

## User Snippet

```json
{
  "React component": {
    "prefix": "rfc",
    "body": ["export default function $1(){", "    return (", "        $2", "    );", "}"],
    "description": "React functional component"
  }
}
```

VS Code-এ `rfc` লিখে Tab চাপলেই পুরো functional component-এর কাঠামো তৈরি হয়ে যাবে। `$1` হলো cursor-এর প্রথম অবস্থান (component-এর নাম), Tab চাপলে cursor যাবে `$2`-তে।

সংরক্ষণের জায়গা: **Command Palette** (`cmd + shift + p`) → `Snippets: Configure User Snippets` → `javascriptreact.json`।

---

## ⚠️ Common Mistakes & Gotchas

- **`npm create vite@latest` চালানোর আগে folder-টা খেয়াল করো** — `.` দিলে **বর্তমান folder**-এ project তৈরি হয়। ভুল folder-এ থাকলে সব file ছড়িয়ে যাবে।
- **`npm install` ভুলে যাওয়া** — project তৈরি হওয়া মানেই package নামানো হয়ে গেছে, তা নয়। `npm install` না দিলে `npm run dev` চালাতে গিয়ে "module not found" error আসবে।
- **`node_modules/` commit করে ফেলা** — `.gitignore`-এ আছে কি না আগে দেখে নাও। একবার commit হয়ে গেলে repository-র আকার অনেক বেড়ে যায়।
- **`package-lock.json` মুছে ফেলা বা commit না করা** — এটা `node_modules`-এর উল্টো, এটা **অবশ্যই** commit করতে হয়, নইলে একেকজনের একেক version নামবে।
- **Development-এ component দুবার render হচ্ছে** — এটা bug নয়, `<StrictMode>`-এর ইচ্ছাকৃত আচরণ। ভয় পেয়ে `StrictMode` মুছে ফেলো না।
- **`.jsx` extension** — Vite project-এ JSX লেখা file-এর extension `.jsx` হতে হয়, শুধু `.js` নয়।
- **Vite-এর `.env` গোপন নয়** — উপরের সতর্কতাটা আবার পড়ো; এটাই এই topic-এর সবচেয়ে বিপজ্জনক ভুল।

---

## 🔗 JavaScript Prerequisites

- **ES Modules (`import` / `export`):** `main.jsx`-এর `import { StrictMode } from "react"` (named import) আর `import App from "./App.jsx"` (default import) — এই পার্থক্যটাই পরের দিকে `1.5`-এ বিস্তারিত আসবে। ⚠️ এটি এখনো js-refresher-এ লেখা হয়নি।
- **`export default`:** `App.jsx`-এর শেষ line — একটি file থেকে একটিই default export দেওয়া যায়। ⚠️ js-refresher-এ নেই।
- **Function declaration:** `function App() { ... }` — component আসলে সাধারণ JavaScript function, এর বেশি কিছু নয়। → `module-0/js/js-refresher` note

---

## 📚 Official Docs

- [Getting Started — vite.dev](https://vite.dev/guide/)
- [Env Variables and Modes — vite.dev](https://vite.dev/guide/env-and-mode)
- [Creating a React App — react.dev](https://react.dev/learn/creating-a-react-app)
- [Build a React App from Scratch — react.dev](https://react.dev/learn/build-a-react-app-from-scratch)
- [`<StrictMode>` — react.dev](https://react.dev/reference/react/StrictMode)

---

## Summary (Key Takeaways)

- Use **`dependencies`** for production packages
- Use **`devDependencies`** for development tools
- Install **Node.js** and **VS Code**
- Use **Vite** to quickly create a React project
- Keep sensitive data inside **`.env`** — তবে Vite-এ `VITE_` variable গুলো bundle-এ চলে যায়, তাই আসল secret server-এ রাখতে হবে
- Use **`.gitignore`** to avoid pushing unnecessary files
- `1.1`-এর CDN + Babel-এর বদলে এখন Vite আগেই transpile করে রাখে, তাই site দ্রুত চলে
- `npm run dev` development-এর জন্য, `npm run build` production-এর জন্য, `npm run preview` দিয়ে build যাচাই করা যায়
- `node_modules/` commit করতে নেই, কিন্তু `package-lock.json` অবশ্যই commit করতে হয়

---

## Interview Questions

<details>
<summary><b>Q1: What is the difference between dependencies and devDependencies?</b></summary>

> **Answer:** `dependencies` are packages the application needs at runtime and that end up in the production bundle — React and ReactDOM, for example. `devDependencies` are only needed on a developer's machine during development or at build time, such as Vite, ESLint, or testing libraries. When you run `npm install --production` (or install the package as a library consumer), devDependencies are skipped. Splitting them keeps production installs smaller and faster.

</details>

<details>
<summary><b>Q2: Why do we need a build tool like Vite instead of just loading React from a CDN?</b></summary>

> **Answer:** A CDN setup transpiles JSX in the browser on every page load, which is slow, and it gives you no module system, no npm ecosystem, and no optimization. A build tool transpiles ahead of time, bundles and minifies the output, tree-shakes unused code, and provides a dev server with Hot Module Replacement. Vite specifically serves native ES modules during development so the server starts almost instantly regardless of project size, then uses Rollup to produce an optimized bundle for production.

</details>

<details>
<summary><b>Q3: Should `package-lock.json` be committed to Git? Why or why not?</b></summary>

> **Answer:** Yes, it must be committed. `package.json` records version *ranges* (`^19.2.4` allows any 19.x above 19.2.4), so two people installing at different times could get different versions. `package-lock.json` records the exact resolved version of every package in the tree, guaranteeing that every developer and the CI server install an identical dependency set. This is what makes builds reproducible. `node_modules/` however should never be committed, since it can be regenerated from the lockfile.

</details>

<details>
<summary><b>Q4: Why does a React component render twice in development?</b></summary>

> **Answer:** Because the app is wrapped in `<StrictMode>`. In development only, StrictMode deliberately double-invokes component bodies, state initializers, and effects to surface bugs caused by impure rendering or missing effect cleanup. It renders nothing itself and has zero effect in a production build, so the double render should never be "fixed" by removing StrictMode.

</details>

<details>
<summary><b>Q5: Are environment variables in a Vite React app secret?</b></summary>

> **Answer:** No. Vite exposes only variables prefixed with `VITE_` to client code, and it inlines their values into the JavaScript bundle at build time. Anyone can read them by viewing the built files or opening browser DevTools. They are fine for non-sensitive configuration like a public API base URL, but real secrets — database credentials, private API keys, payment secrets — must live on a server and never be referenced from client-side code.

</details>

<details>
<summary><b>Q6: In a Vite project, why is `index.html` in the project root instead of the `public/` folder?</b></summary>

> **Answer:** Vite treats `index.html` as the entry point of the application rather than a static asset. During development it serves that file directly and resolves the `<script type="module" src="/src/main.jsx">` tag to start the module graph; during build it parses the HTML to discover entry points and rewrites the asset URLs. Files in `public/` are copied to the output untouched, which is the opposite of what an entry point needs. Create React App used the `public/index.html` convention instead, which is a common source of confusion when switching.

</details>

---

## 🚀 Overall Enhancement Suggestion

এই topic-টা পুরোপুরি আয়ত্তে আনতে পরের ধাপগুলো:

- **`npm run build` চালিয়ে `dist/` folder-টা খুলে দেখো** — ভেতরের JS file-এ তোমার লেখা code কেমন দেখায়, আর `npm run preview` দিয়ে সেটা চালিয়ে দেখো। একবার নিজে দেখলে bundling ব্যাপারটা পরিষ্কার হয়ে যায়।
- **`npm` বনাম `npx`** — `npx` package install না করেই এককালীন চালিয়ে দেয়, তাই `npm create vite@latest` কাজ করে।
- **ESLint-এর নিয়ম পড়ে দেখা** — `eslint.config.js`-এ `react-hooks` plugin আছে, যা পরে hook-এর ভুল ধরিয়ে দেবে।
- **Vite alias setup** — `vite.config.js`-এ `@` দিয়ে `src/` folder-কে shortcut বানানো, যাতে `../../../` লিখতে না হয়।
- **JS foundation:** ES Modules (`import`/`export`) js-refresher-এ যোগ করে নেওয়া — `1.5`-এ এটাই মূল বিষয়।
