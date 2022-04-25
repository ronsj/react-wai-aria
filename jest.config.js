/**
 *
 *  https://tsdx.io/customization#jest
 *  You can add your own jest.config.js to the root of your project and TSDX
 *  will shallow merge it with its own Jest config.
 *  https://github.com/formium/tsdx/blob/master/src/createJestConfig.ts
 *
 */

// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/e2e/', '<rootDir>/node_modules/'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/index.{ts,tsx,js,jsx}',
    '!src/**/*.stories.{ts,tsx,js,jsx}',
  ],
}

module.exports = config
