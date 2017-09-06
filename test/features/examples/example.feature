Feature: example

  Scenario: Github test with page object
  	When I go to github
  	Then I should see a header logo

  Scenario: Custom Transform
  	Given I have 42 cucumbers in my belly