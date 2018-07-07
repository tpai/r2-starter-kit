jasmine.VERBOSE = true;

var reporters = require('jasmine-reporters');
var junitReporter = new reporters.JUnitXmlReporter({
  savePath: 'tests/__jenkins__/',
  consolidateAll: false
});

jasmine.getEnv().addReporter(junitReporter);
