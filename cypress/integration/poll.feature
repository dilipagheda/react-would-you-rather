Feature: Poll Functionality
    User can vote for a question and see the poll results

    Scenario Outline:  User selects an unanswered question, votes and checks the poll result.
        Given I navigate to would you rather web app
        And I wait for data to load
        When I click on user 'Sarah Edo'
        And I wait for data to load
        And I click on unanswered questions tab
        And I click on view poll button for a question that has first option as '<option>'
        And I select an answer as '<answer>'
        And I click on submit
        And I wait for data to load
        Then I see poll results with your vote badge on answer '<answer>'
        When I click on logout button
        Then I see login page
        Examples:
            | option            | answer                          |
            | write JavaScript? | write JavaScript                |
            | write JavaScript? | write Swift                     |
            | find $50 yourself | find $50 yourself               |
            | find $50 yourself | have your best friend find $500 |

    Scenario: User creates a new question
        Given I navigate to would you rather web app
        And I wait for data to load
        When I click on user 'Sarah Edo'
        And I wait for data to load
        And I click on New question
        Then I see create new question screen
        When I enter questions as below in the order
            | learn python |
            | learn java   |
        And I click on submit
        And I wait for data to load
        Then I see question in unanswered questions list asked by 'Sarah Edo' and has below options
            | learn python |
            | learn java   |

