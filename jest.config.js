module.exports = {
  setupFiles: ['./jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  coverageDirectory: '<rootDir>/tests/__coverage__/',
  setupTestFrameworkScriptFile: '<rootDir>/setup-jasmine-env.js'
};
