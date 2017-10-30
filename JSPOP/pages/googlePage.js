var googlePage = function() {
    var searchField = element(by.id('lst-ib'));
    var searchButton = element(by.name('btnK'));
  
    this.findQAdevPage = () => {
        return searchField.sendKeys("qadev.pl")
          .then(()=>searchButton.click());
    };
  };
  
module.exports = googlePage;
  