# JavaScript Prerequisites Map

React-এর অনেক "React concept" আসলে core JavaScript concept। Learner যখন `props` বা `useEffect`-এ আটকে যায়, সমস্যাটা প্রায়ই React-এ নয় — destructuring বা Promise-এ। তাই note-এ JS foundation-টা মনে করিয়ে দেওয়া জরুরি।

Use this map in **Step 4** of the skill. Pick only the rows that the topic actually depends on — নিচের পুরো table কখনো note-এ copy করবে না।

## Topic → Prerequisite

| React / Next.js topic | JavaScript prerequisite |
| --- | --- |
| Props, component arguments | Objects, destructuring, default parameters |
| `useState`, state updates | `const` vs `let`, reference vs value, immutability |
| List rendering, `key` | `Array.map()`, `filter()`, `reduce()` |
| Event handlers | Callback functions, function references vs calls, `this` |
| `useEffect`, data fetching | Event loop, Promises, `async/await`, cleanup |
| Conditional rendering | Truthy/falsy, ternary, `&&` short-circuit, optional chaining `?.` |
| Import / Export components | ES Modules, default vs named export |
| `useRef`, closures in handlers | Closures, lexical scoping, hoisting |
| Spread in props / state | Spread & rest operators, shallow vs deep copy |
| Context API | Scope chain, object references |
| Server Components, Server Actions | `async` functions, serialization (JSON-safe values) |
| Custom hooks | Higher-order functions, function composition |
| Form handling, controlled inputs | Event objects, `preventDefault()`, DOM events |
| `useMemo` / `useCallback` | Referential equality (`===` on objects/functions) |

## Coverage check

`module-0/js-refresher/README.md` currently covers: **scoping (lexical/function/global), `var` vs `let` vs `const`, mutation vs re-assignment, functions (regular, expression, arrow), event handlers.**

Anything outside that list — closures, Promises/`async-await`, the event loop, array methods, destructuring, spread/rest, modules — is **not yet documented**. When a topic needs one of those, still add the prerequisite section, but tell the user in chat that the js-refresher note needs that section written.

## Relative link depth

Links are written from the topic's `README.md`, so the depth depends on nesting:

| Note location | Link to js-refresher |
| --- | --- |
| `module-1/1.5/import-export/README.md` | `../../../module-0/js-refresher/README.md` |
| `module-0/git-github-refresher/README.md` | `../js-refresher/README.md` |

Count the directories between the note and the repo root, then descend into `module-0/js-refresher/`. Verify before writing — a broken link in a note the user rereads months later is worse than no link.
