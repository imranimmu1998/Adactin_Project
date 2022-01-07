package com.property;

import java.io.IOException;

public class FileReaderManaer {
	
	
	private FileReaderManaer() {
	
	}

	public static FileReaderManaer getInstaceCR() {
		FileReaderManaer fr=new FileReaderManaer();
		return fr;
		
	}
	
	public static Configuration_Reader getinstance() throws IOException {
		Configuration_Reader cr=new Configuration_Reader();
	
		return cr;
		
	}
}
