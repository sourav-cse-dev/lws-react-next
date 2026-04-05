# 1.2 React Installation & Development Environment Setup

---

## Dependencies vs Dev Dependencies

### `dependencies`

Packages that are required in the production build.

### `devDependencies`

Packages that are only needed during development and are not included in production.

---

## Recommended VS Code Extensions

- **Theme:** Learn With Sumit
- **Formatter:** Prettier
- **Linting / Error Checking:** ESLint
- **Live Server**
- **Path Autocomplete**
- **Auto Rename Tag**

---

## Essential Setup Checklist

- Install **Node.js**
- Install **VS Code**
- Check **Node.js version** with `node -v`
- Check **npm version** with `npm -v`
- While installing **Node.js on Windows**, make sure to enable **Add Node.js to PATH**
- In **VS Code**, make sure the `code` command is added to PATH

---

## Useful VS Code Shortcuts

- **Open Settings:** `cmd + ,`
- **Open Command Palette:** `cmd + shift + p`
- **Open Terminal:** `ctrl + \``
- **Workspace Tip:** Use a separate workspace for each project

---

## Create a React Project with Vite

### Step 1: Create the project

`npm create vite@latest`

### Step 2: Choose project location

- Enter a **project name** to create the project in a new folder
- Enter `.` to create the project in the **current folder**

### Step 3: Select project options

- **Framework:** React
- **Variant:** JavaScript

### Step 4: Install dependencies

`npm install`

### Step 5: Run the development server

`npm run dev`

---

## Important Files

### `.gitignore`

Used to exclude files and folders that should not be pushed to GitHub.

### `.env`

Used to store sensitive information such as:

- API keys
- Secret tokens
- Environment variables

> Never push `.env` file to a public repository.

---

## User Snippet

```
{
  "React component": {
    "prefix": "rfc",
    "body": ["export default function $1(){", "    return (", "        $2", "    );", "}"],
    "description": "React functional component"
  }
}
```

---

## Quick Summary

- Use **`dependencies`** for production packages
- Use **`devDependencies`** for development tools
- Install **Node.js** and **VS Code**
- Use **Vite** to quickly create a React project
- Keep sensitive data inside **`.env`**
- Use **`.gitignore`** to avoid pushing unnecessary files
