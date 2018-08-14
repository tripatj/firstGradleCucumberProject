package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinations {

	WebDriver driver;
	
	@Given("^Launch application \"([^\"]*)\"$")
    public void launch_application(String url) throws Throwable {
		
		System.out.println(url);
		
		System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
		driver= new ChromeDriver();
		
		driver.get(url);
		Thread.sleep(2000);
		driver.close();
		
        
    }

    @When("^Enter userName \"([^\"]*)\"$")
    public void enter_username_something(String username ) throws Throwable {
        
    }

    @Then("^Enter pwdName \"([^\"]*)\"$")
    public void enter_pwdname_something(String password) throws Throwable {
        
    }

}
