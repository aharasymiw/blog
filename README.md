# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


https://vitejs.dev/guide/
npm create vite@latest aharasymiw -- --template react-ts
cd aharasymiw

https://ui.shadcn.com/docs/installation/vite
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Add this to `tsconfig.json` file:
```
,
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
```
Add this to `tsconfig.app.json` file, inside `"compilerOptions": {}`:
```
,
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
```
npm i -D @types/node

Add this to `vite.config.ts`, inside `defineConfig({})`

```
import path from "path"

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
```
npx shadcn-ui@latest init
- Would you like to use TypeScript (recommended)?
  - yes
- Which style would you like to use?
  - Default
- Which color would you like to use as base color?
  - Zinc
- Where is your global CSS file?
  - src/index.css
- Would you like to use CSS variables for colors?
  - yes
- Are you using a custom tailwind prefix eg. tw-?
  - leave blank
- Where is your tailwind.config.js located?
  - tailwind.config.js
- Configure the import alias for components:
  - @/components
- Configure the import alias for utils:
  - @/lib/utils
- Are you using React Server Components?
  - no
- Write configuration to components.json. Proceed?
  - Y

Other Dependencies
npm install react-router-dom
npm i -D @types/react-router
npm i -D @types/react-router-dom

npx shadcn-ui@latest add badge
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add radio-group
npx shadcn-ui@latest add popover
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add switch
npx shadcn-ui@latest add navigation-menu
