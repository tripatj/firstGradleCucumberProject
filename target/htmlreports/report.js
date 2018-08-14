$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/firstFeature.feature");
formatter.feature({
  "name": "validate",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Sceanario1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sample"
    }
  ]
});
formatter.step({
  "name": "Launch application \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter userName \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter pwdName \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "URL"
      ]
    },
    {
      "cells": [
        "admin",
        "admin123",
        "https://orangehrm-demo-6x.orangehrmlive.com/auth/login"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Sceanario1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sample"
    }
  ]
});
formatter.step({
  "name": "Launch application \"https://orangehrm-demo-6x.orangehrmlive.com/auth/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.launch_application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter userName \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter pwdName \"admin123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.enter_pwdname_something(String)"
});
formatter.result({
  "status": "passed"
});
});