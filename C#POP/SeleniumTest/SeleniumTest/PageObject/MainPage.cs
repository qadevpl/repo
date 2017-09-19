using OpenQA.Selenium;
using OpenQA.Selenium.Support.PageObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeleniumTest.PageObject
{
    class MainPage
    {
        private IWebDriver driver;

        [FindsBy(How = How.Id, Using = "lst-ib")]
        [CacheLookup]
        public IWebElement searchField { get; set; }

        [FindsBy(How = How.Name, Using = "btnK")]
        [CacheLookup]
        public IWebElement searchButton { get; set; }

        [FindsBy(How = How.XPath, Using = "//a[text() ='QADev']")]
        [CacheLookup]
        public IWebElement linkForPage { get; set; }
        
        public MainPage(IWebDriver driver)
        {
            this.driver = driver;
            PageFactory.InitElements(driver, this);
        }

        //method
        public void findQAdevPage()
        {
            searchField.SendKeys("qadev.pl");
            searchButton.Click();
        }

        public void chooseQAdevPage()
        {
            linkForPage.Click();
        }

        public void close()
        {
            this.driver.Close();
        }
    }
}
