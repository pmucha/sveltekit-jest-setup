module.exports = {
  "transform": {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        "preprocess": true
      }
    ],
    "^.+\\.js$": "babel-jest",
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