/// <reference types="cypress" />
beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
});


it('Deve adicionar produtos ao carrinho - Usando Comando customizado',()=> {
    cy.addproduto('Abominable Hoodie', 'L', 'Red', 2)

    cy.get('.woocommerce-message').should('contain' , '2 × “Abominable Hoodie” foram adicionados no seu carrinho')
})
it('Deve adicionar produtos ao carrinho - Usando Comando customizado',()=> {
    cy.addproduto('Aero Daily Fitness Tee', 'XS', 'Brown', 2)

    cy.get('.woocommerce-message').should('contain' , '2 × “Aero Daily Fitness Tee” foram adicionados no seu carrinho')
})
it('Deve adicionar produtos ao carrinho - Usando Comando customizado',()=> {
    cy.addproduto('Aether Gym Pant', '32', 'Green', 2)

    cy.get('.dropdown-toggle > .mini-cart-items')
    cy.get('.woocommerce-message').should('contain' , '2 × “Aether Gym Pant” foram adicionados no seu carrinho')
})


/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/nome-funcionliada.page'
  const dadosEndereco= require('../fixtures/endereco.json')
describe('funcionalidade Endereços - Faturamento e Entrega', () => {
 beforeEach (() => {
     cy.visit('minha-conta')
     cy.fixture('perfil').then(dados =>{
         cy.login(dados.usuario, dados.senha)
 });
})

 it('Deve fazer cadastro de faturamento com sucesso - Usando arquivos de dados', () => {
     EnderecoPage.editarEndereçoFaturamento(
         dadosEndereco[1].nome,
         dadosEndereco[1].sobrenome,
         dadosEndereco[1].empresa,
         dadosEndereco[1].pais,
         dadosEndereco[1].endereco,
         dadosEndereco[1].numero,
         dadosEndereco[1].cidade,
         dadosEndereco[1].estado,
         dadosEndereco[1].cep,
         dadosEndereco[1].telefone,
         dadosEndereco[1].email
)
     cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso')
 });
 

});

