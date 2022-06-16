module.exports = {
  // Stop running tests after `n` failures
  bail: 1,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Allow tests to run in .ts files
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },

  testEnvironment: 'node',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/node_modules/'],

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],

  /* An array of regexp pattern strings that are matched against all test paths,
       matched tests are skipped */
  testPathIgnorePatterns: ['\\\\node_modules\\\\', '\\\\dist\\\\'],
};
