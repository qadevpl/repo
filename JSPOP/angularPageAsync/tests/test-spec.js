var MainPage = require('../pages/mainPage.js');
var ItCoursePage = require('../pages/itCoursePage.js');
var address = 'https://www.udemy.com/';
var mainPage;
var itCoursePage;

beforeAll(function(){
  browser.driver.manage().window().setSize(1600, 800);
  browser.driver.manage().timeouts().implicitlyWait(100000);
  browser.driver.manage().timeouts().pageLoadTimeout(100000);

  mainPage = new MainPage();
  itCoursePage = new ItCoursePage();
});

beforeEach(function(){
  browser.get(address);
});

var originalTimeout;
describe('test udemy page', function() {
  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
  });

    it('find a on-line course', function(){
      mainPage.gotoItCourse()
      .then(()=>itCoursePage.gotoOther());
    }, 15000)
});