/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

import EnderecoPage from '../support/page_objects/nome-funcionliada.page'

describe('funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    })

    beforeEach(() => {

        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });


    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        
        cy.addproduto('Aether Gym Pant', '34', 'Green', '1')
        cy.addproduto('Orestes Yoga Pant', '32', 'Blue', '1')
        cy.addproduto('Aether Gym Pant', '33', 'Blue', '1')
        cy.addproduto('Orestes Yoga Pant', '32', 'Black', '2')
        cy.get('#cart > .dropdown-toggle').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart')

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
            cy.get('#terms').click()
            cy.get('#place_order').click()
            cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
        });
    })
})    