Feature: Login functionality
    I want to test login functionality

    Scenario: Login with a valid user
        Given I navigate to would you rather web app
        And I wait for data to load
        When I click on user 'Sarah Edo'
        And I wait for data to load
        Then I see home page with text 'Hello Sarah Edo'
        And I see menu options with following texts and state
            | Menu Option  | State      |
            | Home         | selected   |
            | New Question | unselected |
            | Leaderboard  | unselected |
            | Logout       | unselected |
        And I see buttons with following texts and state
            | Button Text          | State      |
            | Answered Questions   | unselected |
            | Unanswered Questions | selected   |

