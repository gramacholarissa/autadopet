import './elements'


Cypress.Commands.add('new_user', (name, email, password) => {

    cy.get(elem.btn_link_register).click();

    cy.get(elem.name).type(name);
    cy.get(elem.email).type(email);
    cy.get(elem.password).type(password);
    cy.get(elem.password).type(password);

    cy.get(elem.btn_register).click();


})


Cypress.Commands.add('display_feedback_all', () => {

    cy.get(elem.btn_link_register).click();
    cy.get(elem.btn_register).click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');


})


Cypress.Commands.add('display_feedback_password', (name, email, password) => {

    cy.get(elem.btn_link_register).click();
    cy.get(elem.name).type(name);
    cy.get(elem.email).type(email);
    cy.get(elem.password).type(password);
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
})

Cypress.Commands.add('display_feedback_passwords_do_not_match', (name, email, password) => {

    cy.get(elem.btn_link_register).click();
    cy.get(elem.name).type(name);
    cy.get(elem.email).type(email);
    cy.get(elem.password).type(password);
    cy.get(elem.password).type('abrobrinha123');
    cy.contains('As senhas não batem').should('be.visible');
})