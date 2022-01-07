package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
public class LoginPage {
	
	public static WebDriver driver;
	
	@FindBy (xpath = "//*[@id=\"username\"]")
	private WebElement username;
	
	
	@FindBy(xpath ="//*[@id=\"password\"]" )
	private WebElement password;
	
	@FindBy(xpath ="//*[@id=\"login\"]" )
	private WebElement login;

	public LoginPage(WebDriver driver2) {
		this.driver=driver2;
		PageFactory.initElements(driver2, this);
	}

	public WebElement getUsername() {
		return username;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getLogin() {
		return login;
	}

}
	
	//***************************************************************
	
	
	//****************************************************************
	
	/*@FindBy(xpath = "//*[@id=\"radiobutton_0\"]" )
	private WebElement radiobutton;
	
	@FindBy(xpath ="//*[@id=\"continue\"]" )
	private WebElement continue1;
	
	//*****************************************************************
	
	@FindBy(xpath = "//*[@id=\"first_name\"]" )
	private WebElement firstname; 
	
	@FindBy(xpath ="//*[@id=\"last_name\"]" )
	private WebElement lastname;
	
	@FindBy(xpath = "//*[@id=\"address\"]")
	private WebElement address;
	
	@FindBy(xpath = "//*[@id=\"cc_num\"]" )
	private WebElement creditcard;
		
	@FindBy(xpath = "//*[@id=\"cc_type\"]" )
	private WebElement cardtype;
	
	@FindBy(xpath = "//*[@id=\"cc_exp_month\"]")
	private WebElement expmonth;
	
	@FindBy(xpath = "//*[@id=\"cc_exp_year\"]" )
	private WebElement expyear;
	
	@FindBy(xpath = "//*[@id=\"cc_cvv\"]" )
	private WebElement cvv;
	
	@FindBy(xpath = "//*[@id=\"book_now\"]")
	private WebElement booknow;
	
	
	//***************************************************************
	@FindBy (xpath = "//*[@id=\"booking_form\"]/table/tbody/tr[18]/td[1]")
	private WebElement scroll;
	
	@FindBy (xpath = "//*[@id=\"logout\"]" )
	private WebElement logout;
	
	//***********************************************************

*/
	
	