package com.adactin.stepdefinition;

import com.adactin.baseclass.Base_Class;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.Status; 

public class Hooks extends Base_Class{

	@Before
	public void beforehooks(Scenario scenario) {
		String title = scenario.getName();
		System.out.println("Scenario Title:" + title);
	}

	@After
	public void afterhooks(Scenario scenario) throws Throwable, InterruptedException {
		Status status = scenario.getStatus();
		System.out.println("Scenario Status:"+status);
		
		if (scenario.isFailed()) {
			screenshot();
			
		}

	
	
	}
}
