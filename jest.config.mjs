import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  globals: {
    __DEV__: true
  },
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFiles: [
    "./jest/mocks/react-native-svg.js"],
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    '^react-native$': 'react-native-web',
    '^react-native-svg$': 'react-native-svg-web',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
