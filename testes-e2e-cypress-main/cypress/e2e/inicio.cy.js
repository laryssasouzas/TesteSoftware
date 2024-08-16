describe('Página Principal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
})
  it('Deve renderizar h2 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-meio').contains('Vantagens do nosso banco:')})

    it('Deve renderizar h1 com o texto correto!', () => {
      cy.visit('http://localhost:3000')
      cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')})

      it('Deve renderizar h3 com o texto correto!', () => {
        cy.visit('http://localhost:3000')
        cy.getByData('conta-cartao').contains('Conta e cartão gratuitos')})

        it('Deve renderizar p com o texto correto!', () => {
          cy.visit('http://localhost:3000')
          cy.getByData('paragrafo').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')})

          it('Deve renderizar h3 com o texto correto!', () => {
            cy.visit('http://localhost:3000')
            cy.getByData('sacar').contains('Saques sem custo')})
    
})