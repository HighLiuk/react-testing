/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
      tsconfig: "./tsconfig.test.json",
    },
  },
}
