package com.adactin.pom;

import org.openqa.selenium.WebDriver;

public class Pom_Manager {
	public WebDriver driver;
	private LoginPage lp;
	private Search_Hotel sh;

	public Pom_Manager(WebDriver driver2) {
		this.driver=driver2;
	
	}

	public LoginPage getLp() {
		lp =new LoginPage(driver);
		return lp;
	}

	public Search_Hotel getSh() {
		sh=new Search_Hotel(driver);
		return sh;
	}

}
