Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Murilo Osnei')
    cy.get('#lastName').type('Poloni Demito')
    cy.get('#email').type('teste@emailinvalido.com')
    cy.get('#open-text-area').type('Automatizando o teste de front-end com Cypress.')
    cy.contains('button','Enviar').click()
})