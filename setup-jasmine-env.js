jasmine.VERBOSE = true;

var reporters = require('jasmine-reporters');
var junitReporter = new reporters.JUnitXmlReporter({
  savePath: 'tests/jenkins/',
  consolidateAll: false
});

jasmine.getEnv().addReporter(junitReporter);
