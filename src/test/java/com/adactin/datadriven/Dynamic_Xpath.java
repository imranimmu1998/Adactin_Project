package com.adactin.datadriven;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Dynamic_Xpath {
	
	public static void main(String[] args) {
		
		System.setProperty("webdriver.chrome.driver", "C:\\\\Users\\\\IMRAN\\\\Eclipse - Work Space\\\\Adactin_Cucumber\\\\Driver\\\\chromedriver.exe");
		WebDriver driver= new ChromeDriver();
		driver.get("https://www.google.com/");
		driver.manage().window().maximize();
		//...............................................
		
		WebElement search = driver.findElement(By.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div[2]/div[2]/input"));
		search.sendKeys("Testing");
		
		//Dynamic X-Path
		List<WebElement> searchlist = driver.findElements(By.xpath("//ul[@role='listbox']//li/descendant::div[@class='wM6W7d']"));
		
		for (int i = 0; i <searchlist.size(); i++) {
			
			System.out.println(searchlist.get(i).getText());
		
			//if (searchlist.get(i).getText().contains("testing tools")) {
			//searchlist.get(i).click();
			//break;
		//	}
			//else 
				//System.out.println("Enter Value Can't Find");
				
		}
		
		
		
		
	}

}
