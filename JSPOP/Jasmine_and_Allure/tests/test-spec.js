const AngularjsPage = require('../pages/angularjsPage.js');
const AllureFunction = require('../common/allureFunction.js');
const address = browser.params.url;

beforeAll(function(){
  angularjsPage = new AngularjsPage();
  allureFunction = new AllureFunction();
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