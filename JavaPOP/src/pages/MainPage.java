package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MainPage {

    private WebDriver driver;

    @FindBy(id = "lst-ib")
    private WebElement searchField;
    @FindBy(name = "btnK")
    private WebElement searchButton;
    @FindBy(xpath = "//a[text() ='QADev']")
    private WebElement linkForPage;

    //constructor
    public MainPage(WebDriver driver)
    {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    //method
    public void findQAdevPage(){
        searchField.sendKeys("qadev.pl");
        searchButton.click();
    }

    public void chooseQAdevPage(){
        linkForPage.click();
    }

    public void close()
    {
        this.driver.close();
    }
}
