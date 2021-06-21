/* eslint-disable */
const { createYield } = require("typescript")

/// <reference types ="cypress"/>

// eslint-disable-next-line no-undef
describe('tour-of-heroes', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:4200/dashboard')
  })


it('has a title', () => {
  cy.contains('Tour of Heroes');
  cy.get('.heroes-menu').contains('Narco').click();
})

it('can go between dashboard and heroes', () => {
  cy.get('a[routerlink="/heroes"]').click(); 
  cy.url().should('eq', 'http://localhost:4200/heroes');
  cy.get('a[routerlink="/dashboard"]').click(); 
  cy.url().should('eq', 'http://localhost:4200/dashboard');

})



})