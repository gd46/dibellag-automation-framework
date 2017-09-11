Feature: example

	@example2
  Scenario: Github test with page object
  	When I go to github
  	Then I should see a header logo

  @example
  Scenario: Custom Transform should take belly and capitalize it
  	Given I have cucumbers in my belly

  @example3
  Scenario: Should return parameter as int
  	Given I have 42 cucumbers