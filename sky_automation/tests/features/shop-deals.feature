Feature: This feature will make sure that the shop page is navigable and usable.

Scenario: User navigates to shop page
    Given I am on the home page
    When I navigate to ‘Deals’
    Then the user should be on the "https://www.sky.com/deals" page

Scenario Outline: User sees a list of <Mobile> deals on the deals page with a price <Price>
    Given I am on the "https://www.sky.com/deals" page
    Then I see a list of <Mobile> deals with a price <Price> to it

Examples:
    | Mobile | Price |
    | iPhone | £27 |
    | samsung | £39 |
    | simonly | £12 |
