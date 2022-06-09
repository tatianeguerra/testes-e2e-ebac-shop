/// <reference types="cypress" />
beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
});

it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    cy.get('[class="product-block grid"]')
        //firs()
        //.last() 
        //.eq(0)
        .contains('Abominable Hoodie')
        .click()
});
it('deve adicionar um produto ao carrinho', () => {
    cy.get('[class="product-block grid"]')
        .contains('Abominable Hoodie').click()
    cy.get('.button-variable-item-L').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear().type(2)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)
    cy.get('.woocommerce-message').should('contain', '2 × “Abominable Hoodie” foram adicionados no seu carrinho')

});

it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
    cy.addproduto('Abominable Hoodie', 'L', 'Red', 2)

})
it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
    cy.addproduto('Aero Daily Fitness Tee', 'XS', 'Brown', 2)

})
/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/nome-funcionliada.page'
const dadosEndereco = require('../fixtures/endereco.json')
describe('funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

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
        
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });


});

