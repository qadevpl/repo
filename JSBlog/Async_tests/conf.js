exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./*/*-spec.js'],
    capabilities : {
        'browserName':'chrome'
    },
    onPrepare: function() {
        //conf for browser
        browser.driver.manage().window().setSize(1600,800);
        browser.driver.manage().timeouts().implicitlyWait(10000);
        browser.driver.manage().timeouts().pageLoadTimeout(10000);
    },

    //tests params
    params:{
        url: 'https://angularjs.org'
    },
  };