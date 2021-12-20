# SvelteKit Jest setup (with TypeScript and examples)

Currently (the end of 2021) [SvelteKit](https://kit.svelte.dev/) doesn't have a quick way to add [Jest](https://jestjs.io/) for testing purposes. This repo was created to show how to do this with as little steps as possible, until this issue is resolved by Svelte devs. You can clone it and use as a base to your new app, but I encourage you to treat it only as a tutorial and do everything yourself, since the core packages get updated often.

Here is the list of files created and modified in this tutorial:
```
src/
  components/
    __tests__/
      TestComponent.js
      TestComponent.ts
      TestComponentWrapper.svelte
    TestComponent.svelte
  package.json
  babel.config.cjs
  jest.config.cjs
```

### Before you begin: Install _Node.js_ and _SvelteKit_

For the purpose of this task I used [Node.js](https://nodejs.org/) in the latest LTS version (currently it's _16.13.1_).

If you don't have SvelteKit installed yet, just follow the steps from the [SvelteKit home page](https://kit.svelte.dev/).

Essentially it's just:
```bash
npm init svelte@next your-app-name
```
The installer will ask you if you want to create a demo app or a skeleton app, if you want to use _TypeScript_, _ESLint_ and _Prettier_. To create this project I picked the skeleton and all the other options.



## To the point: _SvelteKit_ + _Jest_ in 4 easy steps

Like the Svelte devs I assume you use `npm` to install packages. Otherwise you should adjust the following command to your needs.

### Step 1: Install the required packages

Open your terminal and go to your project's directory. Then copy the following command and paste it:

```bash
npm install --save-dev jest svelte-jester @testing-library/jest-dom @testing-library/svelte babel-jest @babel/preset-env @babel/core ts-jest @types/jest
```

All of those are `devDependencies` so they won't affect your app's build size.

### Step 2: Create _Jest_ config file

In the root of your project create a `jest.config.cjs` file, and paste the following code there:

```js
module.exports = {
  "transform": {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        "preprocess": true
      }
    ],
    "^.+\\.ts$": "ts-jest"
  },
  "testEnvironment": "jsdom",
  "moduleFileExtensions": [
    "js",
    "ts",
    "svelte"
  ],
  "verbose": true,
  "collectCoverage": true
}
```

### Step 3: Create _Babel_ config file

As above: In the root of your project create a `babel.config.cjs` file, and paste the following code there:

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        },
      },
    ],
  ],
}
```

### Step 4: Add _test_ script

In the root directory of your project there is a `package.json` file. Open it and find a `scripts` section. Add a new script called `test` (or anything similar) there. It should look something like this:
```json
{
  "scripts": {
    ...
    "test": "jest ./src"
    ...
  }
}
```
It will look for tests in the `./src` directory. Now just run in your terminal:
```bash
npm run test
```
**Congratulations, you can now test your Svelte project!**

## Example tests

There are lots of tutorials out there on how to write _Jest_ tests. I will only focus on an example I added to this code.

One of the ways to place your test files is to create `__tests__` directory by the file you want to test, and create a test file there. You can see examples in: `/src/components`. Both do the same, but one is written in JavaScript (`TestComponent.js`) and the other in TypeScript (`TestComponent.ts`). Both test the outer `TestComponent.svelte`.

**Hint:** Currently there's no way to render a component in the test file and check if the `<slot />` will render correctly. Take a look how you can walk around this issue with a file such as `TestComponentWrapper.svelte`.
## License

[Svelte](https://svelte.dev/) itself is [MIT-licensed](https://mit-license.org/), thus all of my code inside is free to use as well. You can freely link here and tell all your friends about this repo.

Feel free to fork, clone, open issues and comment this repo.