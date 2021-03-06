$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("QuickAssist_Sanity.feature");
formatter.feature({
  "line": 2,
  "name": "Quick Assist Smoke Test Script",
  "description": "Contains 4 TCs on Quick Assist to ensure environment \u0026 build stability",
  "id": "quick-assist-smoke-test-script",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@QuickAssist_Sanity"
    }
  ]
});
formatter.before({
  "duration": 30730,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Login to Quick Assist Application through Ping Page",
  "description": "",
  "id": "quick-assist-smoke-test-script;login-to-quick-assist-application-through-ping-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@PingPageLogin_QuickAssist"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "My WebApp \u0027QuickAssist_App\u0027 is open",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I select option \u0027QuicAssist Token EXternal\u0027 in dropdown \u0027SelectAuthenticationSystem\u0027 by \u0027text\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click \u0027ContinueBtn\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \u0027SQAtest2\u0027 in field \u0027Ping_Username\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \u0027PSCU@1234\u0027 in field \u0027Ping_Password\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \u00272113\u0027 in field \u0027Ping_ClientId\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click \u0027Ping_LogIN\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And I wait for visibility of element \u0027SearchPopUp_Close\u0027"
    },
    {
      "line": 15,
      "value": "#And I click \u0027SearchPopUp_Close\u0027"
    }
  ],
  "line": 16,
  "name": "I should see text \u0027sqatest2.21\u0027 present on page at \u0027QAssist_UserNameDisp\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I wait for \u002710\u0027 seconds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "QuickAssist_App",
      "offset": 11
    }
  ],
  "location": "CommonSteps.my_webapp_is_open(String)"
});
formatter.result({
  "duration": 12562490,
  "error_message": "cucumber.runtime.CucumberException\r\n\tat com.pscu.seleniumcucumber.stepDefinitions.CommonSteps.my_webapp_is_open(CommonSteps.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat com.pscu.SeleniumQuickAssist.Runner.ExtendedCucumberRunner.run(ExtendedCucumberRunner.java:53)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\nCaused by: java.lang.NullPointerException\r\n\tat com.pscu.seleniumcucumber.stepDefinitions.CommonSteps.my_webapp_is_open(CommonSteps.java:53)\r\n\t... 45 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "QuicAssist Token EXternal",
      "offset": 17
    },
    {
      "val": "SelectAuthenticationSystem",
      "offset": 57
    },
    {
      "val": "text",
      "offset": 89
    }
  ],
  "location": "CommonSteps.I_select_option_in_dd_by(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ContinueBtn",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_Click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SQAtest2",
      "offset": 9
    },
    {
      "val": "Ping_Username",
      "offset": 29
    }
  ],
  "location": "CommonSteps.I_enter_in_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PSCU@1234",
      "offset": 9
    },
    {
      "val": "Ping_Password",
      "offset": 30
    }
  ],
  "location": "CommonSteps.I_enter_in_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2113",
      "offset": 9
    },
    {
      "val": "Ping_ClientId",
      "offset": 25
    }
  ],
  "location": "CommonSteps.I_enter_in_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ping_LogIN",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_Click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sqatest2.21",
      "offset": 19
    },
    {
      "val": "QAssist_UserNameDisp",
      "offset": 52
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CommonSteps.I_pause_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1322235,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "TC1 - Search for a Customer\u0027s Account \u0026 verify Card holder infomartion is displayed correctly in card holder info section",
  "description": "",
  "id": "quick-assist-smoke-test-script;tc1---search-for-a-customer\u0027s-account-\u0026-verify-card-holder-infomartion-is-displayed-correctly-in-card-holder-info-section",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@SearchCard"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I click \u0027LeftPanel_SearchBtn\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I enter \u0027\u003cAccountNumber\u003e\u0027 in field \u0027SearchPopUp_AccountNumberField\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click \u0027SearchPopUp_Search_Btn\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see text \u0027Card Holder Search\u0027 present on page at \u0027SearchSuccessToast\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see text \u0027Found record\u0027 present on page at \u0027SearchSuccessToast2\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I wait for \u00275\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see text \u0027\u003cFandLName\u003e\u0027 present on page at \u0027CardHolderInfo_Primary\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#And I should see text \u0027\u003cAddrLine1\u003e\u0027 present on page at \u0027CardHolderInfo_Primary_AddrLine1\u0027"
    }
  ],
  "line": 29,
  "name": "I should see text \u0027\u003cAddrLine2\u003e\u0027 present on page at \u0027CardHolderInfo_Primary_AddrLine2\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see text \u0027\u003cHomePhone\u003e\u0027 present on page at \u0027CardHolderInfo_HomePhone\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see text \u0027\u003cCellPhone\u003e\u0027 present on page at \u0027CardHolderInfo_Cell\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see text \u0027\u003cBusinessPhone\u003e\u0027 present on page at \u0027CardHolderInfo_Business\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see text \u0027\u003cSSN\u003e\u0027 present on page at \u0027CardHolderInfo_SSN\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see text \u0027\u003cDOB\u003e\u0027 present on page at \u0027CardHolderInfo_DOB\u0027",
  "keyword": "And "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "quick-assist-smoke-test-script;tc1---search-for-a-customer\u0027s-account-\u0026-verify-card-holder-infomartion-is-displayed-correctly-in-card-holder-info-section;",
  "rows": [
    {
      "cells": [
        "AccountNumber",
        "FandLName",
        "AddrLine1",
        "AddrLine2",
        "HomePhone",
        "CellPhone",
        "BusinessPhone",
        "SSN",
        "DOB"
      ],
      "line": 37,
      "id": "quick-assist-smoke-test-script;tc1---search-for-a-customer\u0027s-account-\u0026-verify-card-holder-infomartion-is-displayed-correctly-in-card-holder-info-section;;1"
    },
    {
      "cells": [
        "4429005030009751",
        "PRIMARY TESTACCOUNT",
        "6855 PACIFIC STREET",
        "BOILING SPRINGS,SC 29316",
        "(111) 111-1111",
        "(222) 222-2222",
        "(333) 333-3333",
        "XXX-XX-6789",
        "01/01/1970"
      ],
      "line": 38,
      "id": "quick-assist-smoke-test-script;tc1---search-for-a-customer\u0027s-account-\u0026-verify-card-holder-infomartion-is-displayed-correctly-in-card-holder-info-section;;2"
    },
    {
      "cells": [
        "4108836000011270",
        "JANE DOE",
        "737 PLANTATION RD",
        "LANCASTER,SC 29720-5808",
        "",
        "",
        "",
        "XXX-XX-1324",
        "01/01/1970"
      ],
      "line": 39,
      "id": "quick-assist-smoke-test-script;tc1---search-for-a-customer\u0027s-account-\u0026-verify-card-holder-infomartion-is-displayed-correctly-in-card-holder-info-section;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 32965,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "TC1 - Search for a Customer\u0027s Account \u0026 verify Card holder infomartion is displayed correctly in card holder info section",
  "description": "",
  "id": "quick-assist-smoke-test-script;tc1---search-for-a-customer\u0027s-account-\u0026-verify-card-holder-infomartion-is-displayed-correctly-in-card-holder-info-section;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@QuickAssist_Sanity"
    },
    {
      "line": 19,
      "name": "@SearchCard"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I click \u0027LeftPanel_SearchBtn\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I enter \u00274429005030009751\u0027 in field \u0027SearchPopUp_AccountNumberField\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click \u0027SearchPopUp_Search_Btn\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see text \u0027Card Holder Search\u0027 present on page at \u0027SearchSuccessToast\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see text \u0027Found record\u0027 present on page at \u0027SearchSuccessToast2\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I wait for \u00275\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see text \u0027PRIMARY TESTACCOUNT\u0027 present on page at \u0027CardHolderInfo_Primary\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#And I should see text \u0027\u003cAddrLine1\u003e\u0027 present on page at \u0027CardHolderInfo_Primary_AddrLine1\u0027"
    }
  ],
  "line": 29,
  "name": "I should see text \u0027BOILING SPRINGS,SC 29316\u0027 present on page at \u0027CardHolderInfo_Primary_AddrLine2\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see text \u0027(111) 111-1111\u0027 present on page at \u0027CardHolderInfo_HomePhone\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see text \u0027(222) 222-2222\u0027 present on page at \u0027CardHolderInfo_Cell\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see text \u0027(333) 333-3333\u0027 present on page at \u0027CardHolderInfo_Business\u0027",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see text \u0027XXX-XX-6789\u0027 present on page at \u0027CardHolderInfo_SSN\u0027",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see text \u002701/01/1970\u0027 present on page at \u0027CardHolderInfo_DOB\u0027",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LeftPanel_SearchBtn",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_Click(String)"
});
formatter.result({
  "duration": 45043993,
  "error_message": "cucumber.runtime.CucumberException\r\n\tat com.pscu.seleniumcucumber.stepDefinitions.CommonSteps.I_Click(CommonSteps.java:310)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat com.pscu.SeleniumQuickAssist.Runner.ExtendedCucumberRunner.run(ExtendedCucumberRunner.java:53)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\nCaused by: java.lang.NullPointerException\r\n\tat com.pscu.seleniumcucumber.stepDefinitions.CommonSteps.I_Click(CommonSteps.java:305)\r\n\t... 63 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "4429005030009751",
      "offset": 9
    },
    {
      "val": "SearchPopUp_AccountNumberField",
      "offset": 37
    }
  ],
  "location": "CommonSteps.I_enter_in_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchPopUp_Search_Btn",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_Click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Card Holder Search",
      "offset": 19
    },
    {
      "val": "SearchSuccessToast",
      "offset": 59
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Found record",
      "offset": 19
    },
    {
      "val": "SearchSuccessToast2",
      "offset": 53
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonSteps.I_pause_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PRIMARY TESTACCOUNT",
      "offset": 19
    },
    {
      "val": "CardHolderInfo_Primary",
      "offset": 60
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BOILING SPRINGS,SC 29316",
      "offset": 19
    },
    {
      "val": "CardHolderInfo_Primary_AddrLine2",
      "offset": 65
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "(111) 111-1111",
      "offset": 19
    },
    {
      "val": "CardHolderInfo_HomePhone",
      "offset": 55
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "(222) 222-2222",
      "offset": 19
    },
    {
      "val": "CardHolderInfo_Cell",
      "offset": 55
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "(333) 333-3333",
      "offset": 19
    },
    {
      "val": "CardHolderInfo_Business",
      "offset": 55
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "XXX-XX-6789",
      "offset": 19
    },
    {
      "val": "CardHolderInfo_SSN",
      "offset": 52
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/1970",
      "offset": 19
    },
    {
      "val": "CardHolderInfo_DOB",
      "offset": 51
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 43581,
  "status": "passed"
});
formatter.before({
  "duration": 28495,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "TC1 - Search for a Customer\u0027s Account \u0026 verify Card holder infomartion is displayed correctly in card holder info section",
  "description": "",
  "id": "quick-assist-smoke-test-script;tc1---search-for-a-customer\u0027s-account-\u0026-verify-card-holder-infomartion-is-displayed-correctly-in-card-holder-info-section;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@QuickAssist_Sanity"
    },
    {
      "line": 19,
      "name": "@SearchCard"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I click \u0027LeftPanel_SearchBtn\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I enter \u00274108836000011270\u0027 in field \u0027SearchPopUp_AccountNumberField\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click \u0027SearchPopUp_Search_Btn\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see text \u0027Card Holder Search\u0027 present on page at \u0027SearchSuccessToast\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see text \u0027Found record\u0027 present on page at \u0027SearchSuccessToast2\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I wait for \u00275\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see text \u0027JANE DOE\u0027 present on page at \u0027CardHolderInfo_Primary\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#And I should see text \u0027\u003cAddrLine1\u003e\u0027 present on page at \u0027CardHolderInfo_Primary_AddrLine1\u0027"
    }
  ],
  "line": 29,
  "name": "I should see text \u0027LANCASTER,SC 29720-5808\u0027 present on page at \u0027CardHolderInfo_Primary_AddrLine2\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see text \u0027\u0027 present on page at \u0027CardHolderInfo_HomePhone\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see text \u0027\u0027 present on page at \u0027CardHolderInfo_Cell\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see text \u0027\u0027 present on page at \u0027CardHolderInfo_Business\u0027",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see text \u0027XXX-XX-1324\u0027 present on page at \u0027CardHolderInfo_SSN\u0027",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see text \u002701/01/1970\u0027 present on page at \u0027CardHolderInfo_DOB\u0027",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LeftPanel_SearchBtn",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_Click(String)"
});
formatter.result({
  "duration": 32846912,
  "error_message": "cucumber.runtime.CucumberException\r\n\tat com.pscu.seleniumcucumber.stepDefinitions.CommonSteps.I_Click(CommonSteps.java:310)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat com.pscu.SeleniumQuickAssist.Runner.ExtendedCucumberRunner.run(ExtendedCucumberRunner.java:53)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\nCaused by: java.lang.NullPointerException\r\n\tat com.pscu.seleniumcucumber.stepDefinitions.CommonSteps.I_Click(CommonSteps.java:305)\r\n\t... 63 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "4108836000011270",
      "offset": 9
    },
    {
      "val": "SearchPopUp_AccountNumberField",
      "offset": 37
    }
  ],
  "location": "CommonSteps.I_enter_in_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchPopUp_Search_Btn",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_Click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Card Holder Search",
      "offset": 19
    },
    {
      "val": "SearchSuccessToast",
      "offset": 59
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Found record",
      "offset": 19
    },
    {
      "val": "SearchSuccessToast2",
      "offset": 53
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonSteps.I_pause_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "JANE DOE",
      "offset": 19
    },
    {
      "val": "CardHolderInfo_Primary",
      "offset": 49
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "LANCASTER,SC 29720-5808",
      "offset": 19
    },
    {
      "val": "CardHolderInfo_Primary_AddrLine2",
      "offset": 64
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "CardHolderInfo_HomePhone",
      "offset": 41
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "CardHolderInfo_Cell",
      "offset": 41
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "CardHolderInfo_Business",
      "offset": 41
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "XXX-XX-1324",
      "offset": 19
    },
    {
      "val": "CardHolderInfo_SSN",
      "offset": 52
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/1970",
      "offset": 19
    },
    {
      "val": "CardHolderInfo_DOB",
      "offset": 51
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 46096,
  "status": "passed"
});
formatter.before({
  "duration": 29333,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "TC2 - Add Secondary user to Account and verify successful addition",
  "description": "",
  "id": "quick-assist-smoke-test-script;tc2---add-secondary-user-to-account-and-verify-successful-addition",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@AddSecondaryUser"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I scroll to \u0027coordinates\u0027 - \u00270,400\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I wait for \u00272\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click \u0027AccountUsers_AddUser\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I should see text \u0027Add Account User\u0027 present on page at \u0027AddUserPopUp_Header\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I select \u0027AddUserPopUp_SelectType_Secondary\u0027 by clicking \u0027AddUserPopUp_SelectType\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I enter \u0027TestUserFName\u0027 in field \u0027AddUserPopUp_FirstName\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter \u0027TestUserLName\u0027 in field \u0027AddUserPopUp_LastName\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter \u0027123456789\u0027 in field \u0027AddUserPopUp_SSN\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I enter \u002705/25/1985\u0027 in field \u0027AddUserPopUp_DOB\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I select \u0027AddUserPopUp_CBR_DoNotReport\u0027 by clicking \u0027AddUserPopUp_CBR\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I enter \u00271111231234\u0027 in field \u0027AddUserPopUp_HomePhone\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I enter \u00273213211234\u0027 in field \u0027AddUserPopUp_CellPhone\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I enter \u00271233211234\u0027 in field \u0027AddUserPopUp_WorkPhone\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter \u0027test@testSecondary.user\u0027 in field \u0027AddUserPopUp_Email\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 58,
      "value": "#And I scroll to \u0027coordinates\u0027 - \u00270,500\u0027"
    }
  ],
  "line": 59,
  "name": "I click \u0027AddUserPopUp_Confirm\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I should see text \u0027Secondary User Added Successfully\u0027 present on page at \u0027AddUser_SuccessMessage\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "coordinates",
      "offset": 13
    },
    {
      "val": "0,400",
      "offset": 29
    }
  ],
  "location": "CommonSteps.I_scroll_to_element(String,String)"
});
formatter.result({
  "duration": 10090947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonSteps.I_pause_for_seconds(int)"
});
formatter.result({
  "duration": 1989013408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AccountUsers_AddUser",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_Click(String)"
});
formatter.result({
  "duration": 27689274,
  "error_message": "cucumber.runtime.CucumberException\r\n\tat com.pscu.seleniumcucumber.stepDefinitions.CommonSteps.I_Click(CommonSteps.java:310)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat com.pscu.SeleniumQuickAssist.Runner.ExtendedCucumberRunner.run(ExtendedCucumberRunner.java:53)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\nCaused by: java.lang.NullPointerException\r\n\tat com.pscu.seleniumcucumber.stepDefinitions.CommonSteps.I_Click(CommonSteps.java:305)\r\n\t... 45 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Account User",
      "offset": 19
    },
    {
      "val": "AddUserPopUp_Header",
      "offset": 57
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AddUserPopUp_SelectType_Secondary",
      "offset": 10
    },
    {
      "val": "AddUserPopUp_SelectType",
      "offset": 58
    }
  ],
  "location": "CommonSteps.I_select_byClicking(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TestUserFName",
      "offset": 9
    },
    {
      "val": "AddUserPopUp_FirstName",
      "offset": 34
    }
  ],
  "location": "CommonSteps.I_enter_in_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TestUserLName",
      "offset": 9
    },
    {
      "val": "AddUserPopUp_LastName",
      "offset": 34
    }
  ],
  "location": "CommonSteps.I_enter_in_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456789",
      "offset": 9
    },
    {
      "val": "AddUserPopUp_SSN",
      "offset": 30
    }
  ],
  "location": "CommonSteps.I_enter_in_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "05/25/1985",
      "offset": 9
    },
    {
      "val": "AddUserPopUp_DOB",
      "offset": 31
    }
  ],
  "location": "CommonSteps.I_enter_in_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AddUserPopUp_CBR_DoNotReport",
      "offset": 10
    },
    {
      "val": "AddUserPopUp_CBR",
      "offset": 53
    }
  ],
  "location": "CommonSteps.I_select_byClicking(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1111231234",
      "offset": 9
    },
    {
      "val": "AddUserPopUp_HomePhone",
      "offset": 31
    }
  ],
  "location": "CommonSteps.I_enter_in_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3213211234",
      "offset": 9
    },
    {
      "val": "AddUserPopUp_CellPhone",
      "offset": 31
    }
  ],
  "location": "CommonSteps.I_enter_in_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1233211234",
      "offset": 9
    },
    {
      "val": "AddUserPopUp_WorkPhone",
      "offset": 31
    }
  ],
  "location": "CommonSteps.I_enter_in_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test@testSecondary.user",
      "offset": 9
    },
    {
      "val": "AddUserPopUp_Email",
      "offset": 44
    }
  ],
  "location": "CommonSteps.I_enter_in_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AddUserPopUp_Confirm",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_Click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Secondary User Added Successfully",
      "offset": 19
    },
    {
      "val": "AddUser_SuccessMessage",
      "offset": 74
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 42742,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "TC1 - Search for a Customer\u0027s Account \u0026 verify Card holder infomartion is displayed correctly in card holder info section",
  "description": "",
  "id": "quick-assist-smoke-test-script;tc1---search-for-a-customer\u0027s-account-\u0026-verify-card-holder-infomartion-is-displayed-correctly-in-card-holder-info-section",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@SearchCard"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I click \u0027LeftPanel_SearchBtn\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I enter \u0027\u003cAccountNumber\u003e\u0027 in field \u0027SearchPopUp_AccountNumberField\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click \u0027SearchPopUp_Search_Btn\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I should see text \u0027Card Holder Search\u0027 present on page at \u0027SearchSuccessToast\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I should see text \u0027Found record\u0027 present on page at \u0027SearchSuccessToast2\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I wait for \u00275\u0027 seconds",
  "keyword": "And "
});
formatter.examples({
  "line": 71,
  "name": "",
  "description": "",
  "id": "quick-assist-smoke-test-script;tc1---search-for-a-customer\u0027s-account-\u0026-verify-card-holder-infomartion-is-displayed-correctly-in-card-holder-info-section;",
  "rows": [
    {
      "cells": [
        "AccountNumber",
        "FandLName",
        "AddrLine1",
        "AddrLine2",
        "HomePhone",
        "CellPhone",
        "BusinessPhone",
        "SSN",
        "DOB"
      ],
      "line": 72,
      "id": "quick-assist-smoke-test-script;tc1---search-for-a-customer\u0027s-account-\u0026-verify-card-holder-infomartion-is-displayed-correctly-in-card-holder-info-section;;1"
    },
    {
      "cells": [
        "4429005030009751",
        "PRIMARY TESTACCOUNT",
        "6855 PACIFIC STREET",
        "BOILING SPRINGS,SC 29316",
        "(111) 111-1111",
        "(222) 222-2222",
        "(333) 333-3333",
        "XXX-XX-6789",
        "01/01/1970"
      ],
      "line": 73,
      "id": "quick-assist-smoke-test-script;tc1---search-for-a-customer\u0027s-account-\u0026-verify-card-holder-infomartion-is-displayed-correctly-in-card-holder-info-section;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 50845,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "TC1 - Search for a Customer\u0027s Account \u0026 verify Card holder infomartion is displayed correctly in card holder info section",
  "description": "",
  "id": "quick-assist-smoke-test-script;tc1---search-for-a-customer\u0027s-account-\u0026-verify-card-holder-infomartion-is-displayed-correctly-in-card-holder-info-section;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@QuickAssist_Sanity"
    },
    {
      "line": 62,
      "name": "@SearchCard"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I click \u0027LeftPanel_SearchBtn\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I enter \u00274429005030009751\u0027 in field \u0027SearchPopUp_AccountNumberField\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click \u0027SearchPopUp_Search_Btn\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I should see text \u0027Card Holder Search\u0027 present on page at \u0027SearchSuccessToast\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I should see text \u0027Found record\u0027 present on page at \u0027SearchSuccessToast2\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I wait for \u00275\u0027 seconds",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LeftPanel_SearchBtn",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_Click(String)"
});
formatter.result({
  "duration": 194670272,
  "error_message": "cucumber.runtime.CucumberException\r\n\tat com.pscu.seleniumcucumber.stepDefinitions.CommonSteps.I_Click(CommonSteps.java:310)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat com.pscu.SeleniumQuickAssist.Runner.ExtendedCucumberRunner.run(ExtendedCucumberRunner.java:53)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\nCaused by: java.lang.NullPointerException\r\n\tat com.pscu.seleniumcucumber.stepDefinitions.CommonSteps.I_Click(CommonSteps.java:305)\r\n\t... 63 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "4429005030009751",
      "offset": 9
    },
    {
      "val": "SearchPopUp_AccountNumberField",
      "offset": 37
    }
  ],
  "location": "CommonSteps.I_enter_in_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchPopUp_Search_Btn",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_Click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Card Holder Search",
      "offset": 19
    },
    {
      "val": "SearchSuccessToast",
      "offset": 59
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Found record",
      "offset": 19
    },
    {
      "val": "SearchSuccessToast2",
      "offset": 53
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonSteps.I_pause_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 47212,
  "status": "passed"
});
formatter.before({
  "duration": 47771,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "TC4 - Verify deleting the additional card holder is successful (TC4 - Delete Secondary user)",
  "description": "",
  "id": "quick-assist-smoke-test-script;tc4---verify-deleting-the-additional-card-holder-is-successful-(tc4---delete-secondary-user)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 75,
      "name": "@DeleteSecondaryUser"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "I scroll to \u0027coordinates\u0027 - \u00270,500\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "I wait for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 79,
      "value": "#Given I Click \u0027AccountUsers_DeleteUser\u0027 with reference to text: \u0027SECONDARY\u0027"
    }
  ],
  "line": 80,
  "name": "I click \u0027AccountUsers_DeleteUser\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "I should see element \u0027AccountUsers_DeleteUserPopUpHeader\u0027 present on page_",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "I click \u0027AccountUsers_DeleteUserPopUpConfirm\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I should see text \u0027Account User\u0027 present on page at \u0027AccountUsers_DeleteConfirmation1\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "I should see text \u0027Delete Success\u0027 present on page at \u0027AccountUsers_DeleteConfirmation2\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "coordinates",
      "offset": 13
    },
    {
      "val": "0,500",
      "offset": 29
    }
  ],
  "location": "CommonSteps.I_scroll_to_element(String,String)"
});
formatter.result({
  "duration": 14771710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonSteps.I_pause_for_seconds(int)"
});
formatter.result({
  "duration": 2997730717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AccountUsers_DeleteUser",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_Click(String)"
});
formatter.result({
  "duration": 24294987,
  "error_message": "cucumber.runtime.CucumberException\r\n\tat com.pscu.seleniumcucumber.stepDefinitions.CommonSteps.I_Click(CommonSteps.java:310)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat com.pscu.SeleniumQuickAssist.Runner.ExtendedCucumberRunner.run(ExtendedCucumberRunner.java:53)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\nCaused by: java.lang.NullPointerException\r\n\tat com.pscu.seleniumcucumber.stepDefinitions.CommonSteps.I_Click(CommonSteps.java:305)\r\n\t... 45 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "AccountUsers_DeleteUserPopUpHeader",
      "offset": 22
    }
  ],
  "location": "CommonSteps.I_should_see_on_page_AndScreenshot(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AccountUsers_DeleteUserPopUpConfirm",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_Click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Account User",
      "offset": 19
    },
    {
      "val": "AccountUsers_DeleteConfirmation1",
      "offset": 53
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Delete Success",
      "offset": 19
    },
    {
      "val": "AccountUsers_DeleteConfirmation2",
      "offset": 55
    }
  ],
  "location": "CommonSteps.I_should_see_text_present_on_page_At(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 38552,
  "status": "passed"
});
formatter.before({
  "duration": 30730,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "TC3 - Verify one time payment request is successful",
  "description": "",
  "id": "quick-assist-smoke-test-script;tc3---verify-one-time-payment-request-is-successful",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 86,
      "name": "@PaymentRequest"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "I click \u0027QAssist_MainMenu_Payments\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "I scroll to \u0027coordinates\u0027 - \u00270,500\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 90,
      "value": "#And I should see text \u0027One Time Payment\u0027 present on page at \u0027Payments_OneTimePaymentW\u0027"
    }
  ],
  "line": 91,
  "name": "I click \u0027Payments_OneTimePaymentW_AmountDD\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I wait for \u00272\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I click \u0027Payments_OneTimePaymentW_MinimumPayment\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I wait for \u002710\u0027 seconds",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "QAssist_MainMenu_Payments",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_Click(String)"
});
formatter.result({
  "duration": 21326454,
  "error_message": "cucumber.runtime.CucumberException\r\n\tat com.pscu.seleniumcucumber.stepDefinitions.CommonSteps.I_Click(CommonSteps.java:310)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat com.pscu.SeleniumQuickAssist.Runner.ExtendedCucumberRunner.run(ExtendedCucumberRunner.java:53)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\nCaused by: java.lang.NullPointerException\r\n\tat com.pscu.seleniumcucumber.stepDefinitions.CommonSteps.I_Click(CommonSteps.java:305)\r\n\t... 45 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "coordinates",
      "offset": 13
    },
    {
      "val": "0,500",
      "offset": 29
    }
  ],
  "location": "CommonSteps.I_scroll_to_element(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payments_OneTimePaymentW_AmountDD",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_Click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonSteps.I_pause_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payments_OneTimePaymentW_MinimumPayment",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_Click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CommonSteps.I_pause_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 41067,
  "status": "passed"
});
});