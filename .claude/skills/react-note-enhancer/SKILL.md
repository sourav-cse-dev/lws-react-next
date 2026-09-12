---
name: react-note-enhancer
description: Create or enhance a topic folder's README.md learning note for React, Next.js, or JavaScript in this repo — grounded in the actual code in that folder, written Bangla-first with English technical terms, and ending with interview questions. Use this whenever the user mentions a readme, a note, documenting or writing up a topic, "enhance this", "complete my note", "/note", or when they open a topic folder's README.md and ask to improve, finish, or polish it — even if they never say the word "skill" or "enhance". Also use it when the user has just finished coding a topic experiment and asks "what should I write down about this?"
---

# React Note Enhancer

This repo is a learning environment (see `CLAUDE.md` for the persona, language policy, and rules of engagement — those still apply here). Each topic folder gets one `README.md` that is the complete note for that topic.

**The division of labour:** The user drafts the note first — rough, unstructured, mixed-language, full of half-thoughts and confusions from while they were learning. Then they ask you to enhance it. Your job is to turn that draft into a complete, polished, codebase-grounded note **without losing anything they wrote**.

That preservation rule is the most important thing here, and the reason is worth understanding: their rough points are a record of how *they* understood the topic. If you silently replace their wording with a cleaner generic explanation, the note stops being their note — they lose the hook that makes it memorable when they reread it in six months. Restructure and expand freely; delete nothing.

---

## Step 1 — Read the actual code first

Before writing a line, read what is actually in that topic folder:

- Every authored source file: `index.html`, `*.js`, `src/**/*.jsx`, and `package.json` (scripts + dependencies only).
- Any half-finished or commented-out experiments — those usually mark exactly where the user got stuck, which is the most valuable thing to explain.
- **The previous topic's README** (for `1.5`, read `1.4`). Notes build on each other; re-explaining what they already documented wastes their reading time.
- `module-0/js-refresher/README.md`, to see which JavaScript foundations they have already covered.

A note that could have been written without opening the folder has failed. Reference their real file names and real variable names — that is what makes the note *theirs* rather than a tutorial they could have googled.

## Step 2 — Preserve, correct, and flag

You may fix grammar, restructure, merge duplicates, move a point to a better section, or expand a terse point into a full explanation with a code example.

If a point they wrote is **factually wrong**: put the corrected version in the note, then tell them in chat what was wrong and why. Silently fixing it means they keep the misconception — they will write it again next module. Flagging it is the whole point of having a tutor.

If a point is ambiguous, leave it as-is and ask what they meant.

## Step 3 — Fill the gaps

Add what is missing for the topic to be complete: concepts they skipped, edge cases, gotchas, a short heavily-commented example per concept, and the official `react.dev` / `nextjs.org` page for that exact topic.

## Step 4 — Link the JavaScript foundations

React concepts usually rest on a core JavaScript concept, and confusion about the React half is often really confusion about the JS half. Where that applies, add a **🔗 JavaScript Prerequisites** section: a one-line reminder of the JS concept, naming the note that covers it.

**Every link in a note must stay inside that note's own folder.** Refer to notes in other folders by path as plain text — `` `module-0/js/js-refresher` note `` — never as a `../` markdown link. Folders in this repo get reorganized (`module-0/js-refresher/` became `module-0/js/js-refresher/`, silently breaking every note that linked to it), and a note whose links rot is worse than one that just names its neighbour. In-folder links are fine and encouraged: images, source files, anything under the topic folder itself.

Read `references/js-prerequisites.md` for the topic→prerequisite map.

If the prerequisite is **not yet covered** in the js-refresher note, say so in chat so they can go add it.

## Step 5 — Structure and format

Read `assets/README-template.md` and follow it. Skip any section that would be empty rather than padding it.

Formatting conventions already established in this repo:

- Title: `# <N.x> - <Topic Group>: <Specific Topic>` (e.g. `# 1.5 - Basics of React Components: Importing & Exporting Components`). `module-0` topics use a plain title.
- `---` between major sections; tables for any A-vs-B comparison; fenced blocks tagged `jsx`, `js`, `bash`, or `text`.
- `text` blocks for ASCII diagrams — worth adding whenever a process has three or more steps, since those are what the user actually revisits.
- Verify relative link depth against the file's real location.
- Heading hierarchy must be real (`#` → `##` → `###`). Never leave an answer or a sentence sitting as a heading.

## Step 6 — Validate

```bash
python3 .claude/skills/react-note-enhancer/scripts/check_note.py <path/to/README.md>
```

It checks the four things that are easy to misjudge by eye: the Bangla/English prose ratio, whether relative links resolve, heading hierarchy, and the required sections with 5–6 interview questions.

The ratio check exists because the 60/40 target is genuinely not eyeball-able — the user's best existing notes (`1.4`, `1.5`) measure 55%, so that is the realistic band to land in. A result near 0–20% means explanations were written in English; above 80% usually means technical terms got translated, which §4 of `CLAUDE.md` explains is the worse failure.

Fix what it reports, then rerun. Warnings are judgment calls, not hard failures — if a note is legitimately English-heavy (a tooling or CLI topic like `1.2`), say so in your report rather than padding it with Bangla.

## Step 7 — Report back in chat

1. কী কী যোগ করেছি — the concepts they were missing.
2. তাদের কোন point ভুল ছিল এবং কেন.
3. কোন JS prerequisite এখনো cover করা হয়নি.
4. এর পরে কী শেখা উচিত.

---

## Worked example

**Input** — the kind of rough draft the user actually writes:

```markdown
# 1.6 props

- props diye parent theke child e data pass kora jay
- props read only
- destructure kora jay
```

**Output** — same points, all preserved, expanded:

````markdown
## Props কী?

Props (properties) হলো সেই data যা **parent component** তার **child component**-কে পাঠায়।

> **Analogy:** চায়ের দোকানে তুমি অর্ডার দাও "এক কাপ চা, চিনি কম"। দোকানদার সেই অর্ডার অনুযায়ী চা বানায়।
> এখানে তোমার অর্ডারটাই **props** — দোকানদার (child component) সেটা অনুযায়ী কাজ করে,
> কিন্তু অর্ডারটা নিজে পাল্টাতে পারে না।

```jsx
// Parent passes props down
<Profile name="Shoieb" role="Learner" />

// Child receives them — destructured straight in the parameter list
function Profile({ name, role }) {
  return <h2>{name} — {role}</h2>;
}
```

## Props হলো Read-Only

Child কখনো তার নিজের props সরাসরি পরিবর্তন করতে পারে না — `props.name = "X"` লিখলে React error দেবে।
কারণ React-এ data flow **one-way (top-down)**। Child যদি parent-এর data বদলাতে পারত, তাহলে কোন
component কোথায় data পাল্টাচ্ছে সেটা খুঁজে বের করা প্রায় অসম্ভব হয়ে যেত। পরিবর্তন দরকার হলে সেটা
**state** দিয়ে parent-এ করতে হয়।

## 🔗 JavaScript Prerequisites

- **Object destructuring:** `{ name, role }` আসলে object থেকে property বের করে আনার JS syntax —
  React-এর নিজস্ব কিছু নয়। → `module-0/js/js-refresher` note
````

Notice what happened: all three original points survive as full sections, each gained an analogy plus the *why*, the code came from their own folder, and the destructuring point pulled in its JS foundation.

---

## Bundled resources

- `assets/README-template.md` — the note skeleton to follow (Step 5)
- `references/js-prerequisites.md` — React/Next.js topic → JavaScript prerequisite map (Step 4)
- `scripts/check_note.py` — conventions validator (Step 6)
- `evals/evals.json` — test prompts for iterating on this skill with `skill-creator`
