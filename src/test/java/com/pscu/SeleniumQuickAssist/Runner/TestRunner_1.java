package com.pscu.SeleniumQuickAssist.Runner;

import java.io.File;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import com.cucumber.listener.Reporter;
import com.pscu.seleniumcucumber.Runner.AfterSuite;
import com.pscu.seleniumcucumber.Runner.BeforeSuite;
import com.pscu.seleniumcucumber.framework.GenerateCustomReport;
import com.pscu.seleniumcucumber.framework.HashMapContainer;
import com.pscu.seleniumcucumber.framework.StepBase;
import com.pscu.seleniumcucumber.framework.TestConfig;

@CucumberOptions(
		// dryRun = false,
		plugin = {"com.cucumber.listener.ExtentCucumberFormatter:",
				  "pretty",
				  "html:src/test/java/com/pscu/TestResults/cucumber-report",
				  "junit:src/test/java/com/pscu/TestResults/cucumber-report/cucumber_1.xml",
				  "json:src/test/java/com/pscu/TestResults/cucumber-report/cucumber_1.json"},
		strict = true, 
		features = { "src/test/java/com/pscu/SeleniumQuickAssist/features" }, 
		glue = { "com.pscu.seleniumcucumber.Hooks","com.pscu.seleniumcucumber.stepDefinitions" }, 
		tags = { "@PingPageLogin_QuickAssist","~@Ignore" }, 
		monochrome = false
		)

//@RunWith(Cucumber.class)
@RunWith(ExtendedCucumberRunner.class)
public class TestRunner_1{
	
	static String Platform = "desktop";
	static String Browser = "chrome";
	
	@BeforeSuite
	public static void setUp() {
		try {
			//LoadConfigurations
			TestConfig.LoadAllConfig();
			if(Platform.equals("desktop")){
				StepBase.setUp(Platform,Browser);		
			}else{
				System.out.println("Enter valid platform choice: desktop / android / ios");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@AfterSuite
	public static void tearDown() {
		try {
			StepBase.tearDown();	
			
			//Extent Report Config
			Reporter.loadXMLConfig(new File(System.getProperty("user.dir")+"/src/test/java/com/pscu/Resources/extent-config.xml"));
	        Reporter.setSystemInfo("User", System.getProperty("user.name"));
	        Reporter.setSystemInfo("OS", Platform);
	        Reporter.setSystemInfo("Browser", Browser);
	        Reporter.setTestRunnerOutput("Extent Report for Test Run on Chrome");
	        
			if(!System.getProperty("test.DisableCucumberReport").equalsIgnoreCase("true"))
			{
		        //Cucumber Report Generation
		        GenerateCustomReport.generateCustomeReport(Browser, Platform);
				HashMapContainer.ClearHM();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
