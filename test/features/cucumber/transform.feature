Feature: transform

  @example
  Scenario: Custom Transform should take belly and capitalize it
  	Given I have cucumbers in my belly

  @example3
  Scenario: Should return parameter as int
  	Given I have 42 cucumbers

  Scenario: Should return parameter as string with double quotes
  	Given I am "24" years old

  Scenario: Should return parameter as string with single quotes
  	Given I am '24' years old

  Scenario: Should return parameter as float
  	Given I am 6.1 ft tall

  Scenario: Should return paraemter as word
  	Given I like to watch scary movies
