exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./*/*-spec.js'],

    capabilities: {
      browserName: 'phantomjs',
      'phantomjs.binary.path': './node_modules/phantomjs/lib/phantom/bin/phantomjs.exe',
      'phantomjs.cli.args': ['--web-security=false', '--ignore-ssl-errors=true', '--webdriver-loglevel=DEBUG'],
    },

    framework: 'jasmine2',
      onPrepare: function() {
      var jasmineReporters = require('jasmine-reporters');
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'testresults',
        filePrefix: 'xmloutput'
    }));
  },

  //HTMLReport called once tests are finished 
  onComplete: function() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');

      var HTMLReport = require('protractor-html-reporter');

      testConfig = {
          reportTitle: 'Test Execution Report',
          outputPath: './htmlreport', //--change add folder
          screenshotPath: './screenshots',
          testBrowser: browserName,
          browserVersion: browserVersion,
          modifiedSuiteName: false,
          screenshotsOnlyOnFailure: true
      };
      new HTMLReport().from('testresults/xmloutput.xml', testConfig); //--change location for xml file
  });
  }
};