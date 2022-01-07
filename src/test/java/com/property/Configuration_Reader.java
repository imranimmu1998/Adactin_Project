package com.property;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Configuration_Reader {
	public static Properties p;
	
	public Configuration_Reader() throws IOException {

	File f=new File("C:\\Users\\IMRAN\\Eclipse - Work Space\\Adactin_Cucumber\\src\\test\\java\\com\\property\\configuration.properties");
	FileInputStream fis=new FileInputStream(f);
	
	p=new Properties();
	p.load(fis);

	}
	
	public static String getbrowser() {
		String browser = p.getProperty("browser");
		return browser;
		
	}
	
	public static String geturl() {
		
		String url = p.getProperty("url");
		return url;
	}

	
	
	
	
	
	
	
	

}
