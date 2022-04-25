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
  testPathIgnorePatterns: ['<rootDir>/e2e/', '<rootDir>/node_modules/'],
}

module.exports = config
