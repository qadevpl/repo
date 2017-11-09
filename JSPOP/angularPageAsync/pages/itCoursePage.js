var ItCourse = function() {
  var otherCategoty = element(by.linkText("Inne"));
  var allCourse = element(by.css("a[data-purpose='all-courses-tab-link']"));

  this.gotoOther = () => {
    return otherCategoty.click();
      // .then(()=>allCourse.click())
  };
  };
  
module.exports = ItCourse;
  