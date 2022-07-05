Feature: This feature will make sure that create your my sky password message is displayed and make the search show the results that are determined by editorial, as well
as generic searches..

Scenario: User sees create your my sky password message
    Given I am on the home page
    When I try to sign in with invalid credentials
    Then I should see a box with the text "Create your My Sky password"

Scenario: User sees editorial section on search
    Given I am on the home page
    When I search "sky" in the search bar
    Then I should see an editorial section.
