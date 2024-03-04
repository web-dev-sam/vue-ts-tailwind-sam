# vue-ts-tailwind-sam

This is a stricter Vue3 + TypeScript + TailwindCSS project template for more complex team-based vue apps.

## IDE Setup

- Install recommended extensions
- Run `npm install` to install dependencies
- Start coding like you used to... _(Hint: `npm run dev`)_

## Features

- Vue3 with Composition API
- TypeScript
- TailwindCSS (With Automatic Class Sorting)
- ESLint with Prettier
- Vitest for unit tests
- Cypress for e2e tests
- Husky for pre-commit checks
  - Auto actions before commit
    - Formatting staged files
    - Fixing fixable ESLint errors in staged files
  - Checks before commit _(Commit fails if any of these checks fail)_
    - Type checking with TypeScript
    - Linting staged files with ESLint

## Project Setup

```sh
npm install
npm run dev
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
