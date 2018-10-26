module.exports = {
  verbose: true,
  coverageReporters: ['json', 'text', 'lcov'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/*.js',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    'jest.config.js'
  ],
};
