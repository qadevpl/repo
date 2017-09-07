package test;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import pages.MainPage;

public class TestSelenium {

        WebDriver driver;

        //Page defined
        MainPage firstPage;

        @Before
        public void setup() {
            System.setProperty("webdriver.gecko.driver", ".\\src\\lib\\geckodriver.exe");
            driver = new FirefoxDriver();
            driver.get("https://www.google.com/");

            //Page initialized
            firstPage = new MainPage(driver);
        }

        @Test
        public void searchGoogle()
        {
            firstPage.findQAdevPage();
            firstPage.chooseQAdevPage();
            firstPage.close();
        }
}
