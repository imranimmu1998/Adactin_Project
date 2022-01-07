package com.adactin.datadriven;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Iterator;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class Data_Driven {

	public static void main(String[] args) throws Throwable {
		File f = new File("C:\\Users\\IMRAN\\Eclipse - Work Space\\Adactin_Cucumber\\Data\\Login.xlsx");
		FileInputStream fis = new FileInputStream(f);
		// HSSF / XSSF
		//Workbook wb = new HSSFWorkbook(fis);
		Workbook wb =new XSSFWorkbook(fis);
		Sheet sheet = wb.getSheetAt(0);

		int rowsize = sheet.getPhysicalNumberOfRows();
		for (int i = 0; i < rowsize; i++) {
			Row row = sheet.getRow(i);

			int cells = row.getPhysicalNumberOfCells();
			for (int j = 0; j < cells; j++) {
				Cell cell = row.getCell(j);
				
				System.out.println(row);
				System.out.println(cell);
				

				CellType cellType = cell.getCellType();
				if (cellType.equals(cellType.STRING)) {
					String stringCellValue = cell.getStringCellValue();
					System.out.println(stringCellValue);
				} else if (cellType.equals(cellType.NUMERIC)) {
					double numericCellValue = cell.getNumericCellValue();
					long value = (long) numericCellValue;
					System.out.println(value);
				
				}
			}

		}

	}

	}


