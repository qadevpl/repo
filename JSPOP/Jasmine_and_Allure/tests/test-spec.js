const AngularjsPage = require('../pages/angularjsPage.js');
const AllureFunction = require('../common/allureFunction.js');
const address = browser.params.url;

beforeAll(function(){
  angularjsPage = new AngularjsPage();
  allureFunction = new AllureFunction();
});

beforeEach(function(){
  browser.waitForAngularEnabled(false);
  browser.get(address);
});

describe('protractor common example', function() {
    it('protractor common example', async function() {
      await angularjsPage.addNewTest();
        expect(await angularjsPage.readElementFromToDoList().count()).toEqual(3);
        expect(await angularjsPage.readElementFromToDoList().get(2).getText()).toEqual('write first protractor test');
        expect(await angularjsPage.clickElementFromToDoListAndGetCompleteAmount(2)).toEqual(2);
    });
});