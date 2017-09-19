using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using SeleniumTest.PageObject;
using System.IO;

namespace SeleniumTest
{
    [TestClass]
    public class TestSelenium
    {
        private IWebDriver driver;
        private MainPage firstPage;

        [TestInitialize]
        public void setup()
        {
            FirefoxDriverService service = FirefoxDriverService.CreateDefaultService(@"\lib\");
            FirefoxOptions options = new FirefoxOptions();
            TimeSpan time = TimeSpan.FromSeconds(10);
            driver = new FirefoxDriver(service, options, time);

            driver.Url = "https://www.google.com/";

            //Page initialized
            firstPage = new MainPage(driver);
        }

        [TestMethod]
        public void SearchGoogleTest()
        {
            firstPage.findQAdevPage();
            firstPage.chooseQAdevPage();
            firstPage.close();
        }
    }
}
