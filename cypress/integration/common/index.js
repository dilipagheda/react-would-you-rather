import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://localhost:3000';
const waitForDataLoad = () => {
	cy.get('div.spinner-border', { timeout: 10000 }).should('not.exist');
};

Given('I wait for data to load', waitForDataLoad);
When('I wait for data to load', waitForDataLoad);

Given('I navigate to would you rather web app', () => {
	cy.visit(url);
	//Refresh the page each time you visit root route to clear the redux state
	cy.reload();
});

When(`I click on logout button`, () => {
	cy.get('a').contains('Logout').click();
});

When(`I click on user {string}`, (user) => {
	cy.get('button').contains(user).click();
});

Then(`I see login page`, () => {
	cy.get('div').contains('Login').should('exist');
	cy.get('div').contains('Please select a user').should('exist');
});
