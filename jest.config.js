module.exports = {
  moduleFileExtensions: ["js", "vue", "json", "ts"],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.ts$": "ts-jest"
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  testMatch: [
    '**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/controllers/App.ts",
    "!<rootDir>/src/router.ts",
    "!<rootDir>/src/main.ts",
    "!<rootDir>/src/shims-tsx.d.ts",
    "!<rootDir>/src/shims-vue.d.ts"
  ],
}
