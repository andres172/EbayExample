package Steps;

import Base.BaseUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class Hook extends BaseUtil {

    private BaseUtil base;

    public Hook(BaseUtil base){
        this.base = base;
    }

    @Before
    public void InitializeTest(){
        System.out.println("Opening the browser: Chrome");


        WebDriverManager.chromedriver().version("78.0.3904.70").setup();

        //Add new properties to ChromeDriver

        ChromeOptions options = new ChromeOptions();

//                    options.addArguments("start-maximized");
//                    options.addArguments("enable-automation");
//                    options.addArguments("--no-sandbox");
//                    options.addArguments("--disable-infobars");
//                    options.addArguments("--disable-dev-shm-usage");
//                    options.addArguments("--disable-browser-side-navigation");
//                    options.addArguments("--disable-gpu");

//                    options.addArguments("window-size=400,380");
        options.addArguments("--ignore-certificate-errors");
//                  DesiredCapabilities capabilities = DesiredCapabilities.chrome();
//                  capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
//                  capabilities.setCapability(ChromeOptions.CAPABILITY, options);
        //Old way to set up chrome driver from a path in your system (not recomended)
//                  String rutaDriverChome ="/src/test/resources/chromedriver";
//                  System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+rutaDriverChome);

        base.Driver = new ChromeDriver(options);


       // base.Driver = new ChromeDriver();
    }

    @After
    public void TearDownTest(Scenario scenario){

        if(scenario.isFailed()){
            //take screenshot
            System.out.println(scenario.getName());
        }

        System.out.println("Closing the browser: HOCK");
    }
}
