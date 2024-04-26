import './commands'
import { faker } from '@faker-js/faker'


describe('user registration', () => {


  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })

  it('sucessful user registration', () => {


    cy.new_user(faker.person.fullName(), faker.internet.email(), faker.internet.password());


  })

  it('Display feedback when all required fields are not completed', () => {


    cy.display_feedback_all();


  })


  it('Display feedbak when passowrds do not match', () => {


    cy.display_feedback_passwords_do_not_match();


  })

  it('display feedback when password does not meet requirements', () => {


    cy.display_feedback_password();


  })


}

)