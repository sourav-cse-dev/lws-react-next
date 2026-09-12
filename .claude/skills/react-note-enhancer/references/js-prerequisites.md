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

## How to reference the js-refresher note

**Never link to it with a `../` path.** Name it as plain text instead:

```markdown
- **Object destructuring:** <এক-দুই লাইনে মনে করানো> → `module-0/js/js-refresher` note
```

The reason is concrete: `module-0/js-refresher/` was moved to `module-0/js/js-refresher/`, which silently broke the link in every note that pointed at it — markdown gives no warning, and the rot is only found by accident months later. Plain-text paths survive reorganization, and the reader can still find the file.

Links **inside** the note's own folder are fine and encouraged — images, source files, subfolders. `scripts/check_note.py` flags any link that escapes the folder.
