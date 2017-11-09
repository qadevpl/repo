var MainPage = function() {
    var menu = element(by.id("dropdownButton"));
    var itCourse = element(by.xpath("//li[@data-purpose='ver-IT-and-Software']"));   

    this.gotoItCourse = () => {
      return menu.click()
       .then(()=>itCourse.click());
    };
  };
  
module.exports = MainPage;
  