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
        var reporters = require('jasmine-reporters');
        var junitReporter = new reporters.JUnitXmlReporter({
        savePath: 'testresults',
        consolidateAll: false
      });
      jasmine.getEnv().addReporter(junitReporter)
      },

    onComplete: function() {
      var browserName, browserVersion;
      var capsPromise = browser.getCapabilities();
  
      capsPromise.then(function (caps) {
         browserName = caps.get('Chrome');
         browserVersion = caps.get('version');
  
         var HTMLReport = require('protractor-html-reporter');
  
         testConfig = {
             reportTitle: 'Test Execution Report',
             outputPath: './htmlreport',
             screenshotPath: './screenshots',
             testBrowser: browserName,
             browserVersion: browserVersion,
             modifiedSuiteName: false,
             screenshotsOnlyOnFailure: true
         };
         new HTMLReport().from('testresults/junitresults-testRestApi.xml', testConfig);
     });
    }
  };