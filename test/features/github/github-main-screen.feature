@example2
Feature: github-main-screen

  Scenario: Github test with page object
  	Given I go to github
  	Then I should see a header logo
