import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

When(`I click on unanswered questions tab`, () => {
	cy.get('button').contains('Unanswered Questions').click();
});

When(`I click on view poll button for a question that has first option as {string}`, (option) => {
	cy.get('div').contains(option).parent().find('a').contains('View Poll').click();
});

When(`I select an answer as {string}`, (answer) => {
	cy.get('label').contains(answer).click();
});

When(`I click on submit`, () => {
	cy.get("button[type='submit']").click();
});

When(`I click on New question`, () => {
	cy.get("a[href='/add']").click();
});

When(`I enter questions as below in the order`, (table) => {
	const data = table.raw();
	data.forEach((item, index) => {
		const question = item[0];
		switch (index) {
			case 0:
				cy.get("input[placeholder='Enter option one']").type(question);
				break;
			case 1:
				cy.get("input[placeholder='Enter option two']").type(question);
				break;
			default:
				break;
		}
	});
});

Then(`I see poll results with your vote badge on answer {string}`, (answer) => {
	cy.get('span').contains('Your Vote').parent().find('div').contains(answer).should('exist');
});

Then(`I see create new question screen`, () => {
	cy.get('div').contains('Create New Question').should('exist');
});

Then(`I see question in unanswered questions list asked by {string} and has below options`, (user, table) => {
	const data = table.raw();
	data.forEach((item) => {
		const option = item[0];
		cy.get('div').contains(option).as('optionItem');
		cy.get('@optionItem').should('exist');
		cy.get('@optionItem').parent().parent().parent().find('div').contains(user).should('exist');
	});
});
