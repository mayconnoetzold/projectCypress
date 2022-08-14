/// <reference types="cypress" />

describe('Listagem', () => {
    it('Quando houver um ou mais cadastros, então a listagem deve exibir cada registro', () => {
        cy.fixture('comDados').then(data=>{
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        cy.visit('https://form-agilizei.netlify.app/listagem.html')
        cy.get('table tbody tr').should('have.length', 2)
        
    });
    it('Quando não houver cadastros então a listagem deve estar vazia', () => {
        cy.fixture('semDados').then(data=>{
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        cy.visit('https://form-agilizei.netlify.app/listagem.html')
        cy.get('table tbody tr').should('have.length', 0)
    });
});