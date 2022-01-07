
package com.adactin.runner;

import java.io.IOException;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.Base_Class;
import com.property.FileReaderManaer;

import cucumber.api.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

//import cucumber.api.CucumberOptions;
//import cucumber.api.junit.Cucumber;

//import io.cucumber.junit.Cucumber;
//import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features="src//test//java//com//adactin//feature//Adactin.feature",
	glue="com\\adactin\\stepdefinition",
	//plugin = {"pretty", "html:Report\\CucumberReport"},
	plugin = {"pretty", "html:Report\\Cucumber-Report"},
	//plugin = {"com.avenstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:",
	//		"timeline:test-output-thread/"},
	tags= "{@Searchhotel}",
	monochrome = true,
	dryRun = false
	)	
	

public class TestRunner  {
	
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void setup() throws IOException {
		String browser = FileReaderManaer.getInstaceCR().getinstance().getbrowser();
		driver = Base_Class.getbrowser(browser);		
	}
	
	
	
	
	
	
	}
	


