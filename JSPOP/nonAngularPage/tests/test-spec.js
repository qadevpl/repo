var GooglePage = require('../pages/googlePage.js');
var address = 'https://google.com';
var googlePage;

beforeAll(function(){
  browser.driver.manage().window().setSize(1600, 800);
  browser.driver.manage().timeouts().implicitlyWait(10000);
  browser.driver.manage().timeouts().pageLoadTimeout(10000);

  googlePage = new GooglePage();
});

beforeEach(function(){
  browser.waitForAngularEnabled(false);
  browser.get(address);
});

describe('test QADev site', function() {
    it('find QADev site in google', function() {
      googlePage.findQAdevPage().
        then(() => googlePage.chooseQADEVPage());
    });
});