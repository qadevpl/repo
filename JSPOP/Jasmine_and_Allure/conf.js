exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./*/*-spec.js'],
    frameworks: ['jasmine'],
    capabilities : {
        'browserName':'chrome'
    },
    onPrepare: function() {
        //conf for browser
        browser.driver.manage().window().setSize(1600,800);
        browser.driver.manage().timeouts().implicitlyWait(10000);
        browser.driver.manage().timeouts().pageLoadTimeout(10000);
        
        //conf allure report
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir: 'allure-results'
        }));

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
            allure.createAttachment('ScreenshotAfterEachTest', function () {
                return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    },

    //tests params
    params:{
        url: 'https://angularjs.org'
    },

    //SELENIUM_PROMISE_MANAGER: false,
  };