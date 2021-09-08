
describe('Test antrenament', () => {
    beforeEach(() => {
  
      cy.visit('https://www.wikipedia.org/')                    //go to www.wikipedia.org
  
    })
  
    it('Visit the wikipedia webpage', () => {

        cy.contains('English')                                 // find the element wint content 'English'
        .click()                                               // and click on it

        cy.url()                                               // verify that the new URL includes '/Main_Page'
        .should('include', '/Main_Page')
    })
  })


  