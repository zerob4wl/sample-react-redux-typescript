/*eslint no-undef: "off"*/
// you can have external state, and also require things!
const url = 'http://localhost:3000/';

given('I open panel', () => {
    cy.visit(url);
});

then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title);
});

then(`Set {string} as {string}`, (id, value) => {
    cy.get(`${id}`).type(value);
});


then(`Set {string} id as {string}`, (id, value) => {
    cy.get(`#${id}`).type(value);
});


then(`Set {string} class as {string}`, (className, value) => {
    cy.get(`.${className}`).type(value);
});


then(`Press {string}`, (btn) => {
    cy.get('form button').contains(btn).click();
});


then(`I see {string} in url`, (text) => {
    cy.url().should('contain', text);
});


then(`I click on {string}`, (selector) => {
    cy.get(selector).click();
});




