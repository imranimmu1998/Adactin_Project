package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.Base_Class;
import com.adactin.pom.Pom_Manager;
import com.adactin.runner.TestRunner;
import com.property.FileReaderManaer;

//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Stepdefinition extends Base_Class {

	public static WebDriver driver = TestRunner.driver;
	Pom_Manager pm = new Pom_Manager(driver);

	@Given("^user launch the application$")
	public void user_launch_the_application() throws Throwable {
		String url = FileReaderManaer.getInstaceCR().getinstance().geturl();
		getlink(url);
	}

	@When("^user enter the valid \"([^\"]*)\" in the username field$")
	public void user_enter_the_valid_in_the_username_field(String arg1) throws Throwable {
		sendvalue(pm.getLp().getUsername(), arg1);
	}

	@When("^user enter the valid \"([^\"]*)\" in the password field$")
	public void user_enter_the_valid_in_the_password_field(String arg1) throws Throwable {
		sendvalue(pm.getLp().getPassword(), arg1);
	}

	@When("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
		click(pm.getLp().getLogin());
	}

	@Then("^user verify the homepage navigate to search hotel$")
	public void user_verify_the_homepage_navigate_to_search_hotel() throws Throwable {

	}
	//**************************************************************************************
	//Search Hotel Page 
	
	@Given("user launch the search hotel page")
	public void user_launch_the_search_hotel_page() {
	}
	
	@When("user select the location")
	public void user_select_the_location() throws InterruptedException {
		dropdown(pm.getSh().getLocation(),"London");
	}

	@When("User select the hotel")
	public void user_select_the_hotel() throws InterruptedException {
		dropdown(pm.getSh().getHotels(),"Hotel Sunshine");
	}

	@When("user select the room type")
	public void user_select_the_room_type() throws InterruptedException {
		dropdown(pm.getSh().getRoomtype(),"Deluxe");
	}

	@When("user select the number of rooms")
	public void user_select_the_number_of_rooms() throws InterruptedException {
		dropdown(pm.getSh().getNoofrooms(),"3");
	}

	@When("user select the checkin  date")
	public void user_select_the_checkin_date() throws InterruptedException {
		click(pm.getSh().getCheckout());
		sendvalue(pm.getSh().getCheckout(),"08/01/2022");
	}

	@When("user select the checoutdate")
	public void user_select_the_checoutdate() throws InterruptedException {
		click(pm.getSh().getCheckout());
		sendvalue(pm.getSh().getCheckin(),"10/01/2022");
		
	}

	@When("user selet the adults per room")
	public void user_selet_the_adults_per_room() throws InterruptedException {
		dropdown(pm.getSh().getAdultperroom(),"2");
	}

	@When("user select the Childrens per room")
	public void user_select_the_Childrens_per_room() throws InterruptedException {
		dropdown(pm.getSh().getChildrenperroom(),"2");
	}

	@When("User select the search button")
	public void user_select_the_search_button() throws InterruptedException {
		click(pm.getSh().getSearch());
	}


	

}