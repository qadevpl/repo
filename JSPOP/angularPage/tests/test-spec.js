var AngularjsPage = require('../pages/angularjsPage.js');
var address = 'https://angularjs.org';
var angularjsPage;

beforeAll(function(){
  browser.driver.manage().window().setSize(1600, 800);
  browser.driver.manage().timeouts().implicitlyWait(10000);
  browser.driver.manage().timeouts().pageLoadTimeout(10000);

  angularjsPage = new AngularjsPage();
});

beforeEach(function(){
  browser.get(address);
});

describe('protractor common example', function() {
  it('protractor common example', function() {
    angularjsPage.addNewTest()
      .then(() => expect(angularjsPage.readElementFromToDoList().count()).toEqual(3))
      .then(() => expect(angularjsPage.readElementFromToDoList().get(2).getText()).toEqual('write first protractor test'))
      .then(() => expect(angularjsPage.clickElementFromToDoListAndGetCompleteAmount(2)).toEqual(2));
  });
});