// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login",(email,password)=>{
   
    cy.visit('https://zootopia.ge/ka')
    cy.viewport(1000,660)
    
    cy.contains('.rprof','შესვლა').click()
    cy.contains('.input-div' ,"ელ.ფოსტა").type(email)
    cy.contains(".input-div",'პაროლი').type(password)
    cy.contains('.form-button','ავტორიზაცია').click()

})
//cypress.Commands.add("registration" ,(fullName,Email,IDnum,mobNum,password,repeatpassword)



