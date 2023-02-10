Feature: login page

  Scenario: user logges in

    Given I go to login page
    When I click on login
    Then I should see error
    And I logout