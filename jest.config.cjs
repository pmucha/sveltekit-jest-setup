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