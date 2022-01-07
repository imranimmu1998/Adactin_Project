package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Search_Hotel {
	
	public WebDriver driver;
	
	
	@FindBy(xpath = "//*[@id=\"location\"]")
	private WebElement location;
	
	@FindBy(xpath = "//*[@id=\"hotels\"]")
	private WebElement hotels;
	
	@FindBy(xpath = "//*[@id=\"room_type\"]")
	private WebElement roomtype; 
	
	@FindBy(xpath = "//*[@id=\"room_nos\"]")
	private WebElement noofrooms;
	
	@FindBy ( xpath = "//*[@id=\"datepick_in\"]")
	private WebElement checkin;
	
	@FindBy(xpath = "//*[@id=\"datepick_out\"]" )
	private WebElement checkout;
	
	@FindBy(xpath ="//*[@id=\"adult_room\"]")
	private WebElement adultperroom;
	
	@FindBy(xpath ="//*[@id=\"child_room\"]" )
	private WebElement childrenperroom; 
	
	@FindBy(xpath = "//*[@id=\"Submit\"]" )
	private WebElement search;

	public Search_Hotel(WebDriver driver2) {
		this.driver=driver2;
		PageFactory.initElements(driver2, this);
	}

	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotels() {
		return hotels;
	}

	public WebElement getRoomtype() {
		return roomtype;
	}

	public WebElement getNoofrooms() {
		return noofrooms;
	}

	public WebElement getCheckin() {
		return checkin;
	}

	public WebElement getCheckout() {
		return checkout;
	}

	public WebElement getAdultperroom() {
		return adultperroom;
	}

	public WebElement getChildrenperroom() {
		return childrenperroom;
	}

	public WebElement getSearch() {
		return search;
	}
	
	
	
	
	

}
