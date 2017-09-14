@example2
Feature: github-example

  Scenario: Github test with page object
  	When I go to github
  	Then I should see a header logo
