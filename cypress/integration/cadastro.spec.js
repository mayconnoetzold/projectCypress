/// <reference types="cypress" />
var Chance = require('chance');
var chance = new Chance();

describe('Cadastro', () => {
    it('Quando for informados os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app/')
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())
        cy.get('input[value=m]').check()
        cy.get('input[type=checkbox').check('Netflix')
        cy.get('input[type=checkbox').check('Livros')
        
        // Inputs do tipo comboox / select -> select
        cy.get('select#countries').select('Dinamarca', {force: true})
        cy.get('select#years').select('2000', {force: true})
        cy.get('select#months').select('Julho', {force: true})
        cy.get('select#days').select('20', {force: true})

        cy.get('input#firstpassword').type('Uai1')
        cy.get('input#secondpassword').type('Uai1')
        cy.get('button#submitbtn').click()

        cy.url().should('contain','listagem')
    });
});