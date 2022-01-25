$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "name": "Overall functionality of Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "verify that user is able to login the application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter the valid \"\u003cusername\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "name": "user enter the valid \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user verify the homepage navigate to search hotel",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "imran",
        "123"
      ]
    },
    {
      "cells": [
        "aaa",
        "Imran@1998"
      ]
    },
    {
      "cells": [
        "aaa",
        "1123"
      ]
    },
    {
      "cells": [
        "imranimmu",
        "Imran@1998"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"imranimmu\" in the username field",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"Imran@1998\" in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify that user is able to login the application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"imran\" in the username field",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"123\" in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the homepage navigate to search hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_verify_the_homepage_navigate_to_search_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"imranimmu\" in the username field",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"Imran@1998\" in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify that user is able to login the application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"aaa\" in the username field",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"Imran@1998\" in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the homepage navigate to search hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_verify_the_homepage_navigate_to_search_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"imranimmu\" in the username field",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"Imran@1998\" in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify that user is able to login the application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"aaa\" in the username field",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"1123\" in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the homepage navigate to search hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_verify_the_homepage_navigate_to_search_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"imranimmu\" in the username field",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"Imran@1998\" in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify that user is able to login the application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"imranimmu\" in the username field",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"Imran@1998\" in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the homepage navigate to search hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_verify_the_homepage_navigate_to_search_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"imranimmu\" in the username field",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid \"Imran@1998\" in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_valid_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that user able to search hotel",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Searchhotel"
    }
  ]
});
formatter.step({
  "name": "user launch the search hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the location",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_select_the_location()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_select_the_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the room type",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_select_the_room_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the number of rooms",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_select_the_number_of_rooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the checkin  date",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_select_the_checkin_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the checoutdate",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_select_the_checoutdate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selet the adults per room",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_selet_the_adults_per_room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the Childrens per room",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_select_the_Childrens_per_room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select the search button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_select_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});