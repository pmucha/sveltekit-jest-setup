# SvelteKit Jest setup (with TypeScript and examples)

Currently [Svelte](https://svelte.dev/) / [SvelteKit](https://kit.svelte.dev/) don't have a quick way to add [Jest](https://jestjs.io/) for testing purposes. This repo was created to show how to do this with as little steps as possible until this issue is resolved by Svelte devs. You can clone it and use as a base to your new app, but I encourage you to treat it only as a tutorial and do everything yourself, since the core packages get updated often.

**Hint:** You can take a look at the commit history to see all the steps I took to create this project.

## Prerequisite: Install SvelteKit

If you don't have SvelteKit installed yet, just follow the steps from the [SvelteKit home page](https://kit.svelte.dev/).

Essentially it's just:
```bash
npm init svelte@next your-app-name
```
The installer will ask you if you want to create a demo app or a skeleton app, if you want to use _TypeScript_, _ESLint_ and _Prettier_. To create this project I picked the skeleton and all the other options.


## Installing _Jest_ in 3 easy steps

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

### Step 3: Add _test_ script

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

One of the ways to place your test files is to create `__tests__` directory by the file you want to test, and create a test file there. You can see one in: `/src/components`. The `TestComponent.ts` is there to test the outer `TestComponent.svelte`.

**Hint:** Currently there's no way to render a component in the test file and check if the `<slot />` will render correctly. Take a look how you can walk around this issue with a file such as `TestComponentWrapper.svelte`.
## License

[Svelte](https://svelte.dev/) itself is [MIT-licensed](https://mit-license.org/), thus all of my code inside is free to use as well. You can freely link here and tell all your friends about this repo.

Feel free to clone, open issues and comment this repo.