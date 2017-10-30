var GooglePage = function() {
    var searchField = element(by.id('lst-ib'))
    var searchButton = element(by.xpath("//*[@name ='btnK']"));
    var linkForPage = element(by.xpath("//a[text() ='QADev']"));
  
    this.findQAdevPage = () => {
        return searchField.sendKeys("qadev.pl")
          .then(() => browser.driver.sleep(100))
          .then(()=>searchButton.click());
    };

    this.chooseQADEVPage = () => {
      return linkForPage.click();
    };
  };
  
module.exports = GooglePage;
  