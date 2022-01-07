Feature: Overall functionality of Application

Background:
Given user launch the application
When user enter the valid "imranimmu" in the username field 
And user enter the valid "Imran@1998" in the password field 
And user click on login button 

@Login
Scenario Outline: verify that user is able to login the application

Given user launch the application
When user enter the valid "<username>" in the username field 
And user enter the valid "<password>" in the password field 
And user click on login button 
Then user verify the homepage navigate to search hotel 

Examples:
|username|password|
|imran|123|
|aaa|Imran@1998|
|aaa|1123|
|imranimmu|Imran@1998|

@Searchhotel
Scenario: Verify that user able to search hotel

Given user launch the search hotel page 

When user select the location
And User select the hotel
And user select the room type
And user select the number of rooms
And user select the checkin  date 
And user select the checoutdate
And user selet the adults per room
And user select the Childrens per room
And User select the search button






