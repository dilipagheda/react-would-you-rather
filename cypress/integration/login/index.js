import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

When(`I click on user {string}`, (user) => {
	cy.get('button').contains(user).click();
});

Then(`I see home page with text {string}`, (expectedText) => {
	cy.get('span').contains(expectedText).should('exist');
});

Then(`I see menu options with following texts and state`, (table) => {
	const menuOptions = table.raw().splice(1);

	menuOptions.forEach((option) => {
		const name = option[0];
		const state = option[1];
		cy.get('a').contains(name).should('exist');
		if (state === 'selected') {
			cy.get('a').contains(name).should('have.class', 'active');
		} else {
			cy.get('a').contains(name).should('not.have.class', 'active');
		}
	});
});

Then(`I see buttons with following texts and state`, (table) => {
	const buttons = table.raw().splice(1);

	buttons.forEach((button) => {
		const name = button[0];
		const state = button[1];
		cy.get('button').contains(name).should('exist');
		if (state === 'selected') {
			cy.get('button').contains(name).should('have.css', 'background-color', 'rgb(90, 85, 96)');
		} else {
			cy.get('button').contains(name).should('have.css', 'background-color', 'rgb(255, 255, 255)');
		}
	});
});

Then(`I see current url route is {string}`, (route) => {
	cy.url().should('include', route);
});
