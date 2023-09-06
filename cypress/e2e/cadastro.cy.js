/// <reference types="cypress" />


describe('Cadastro de entregador para Buger Eats', () => {


    it('Deve efetuar cadastro inserindo CNH com método de entrega Moto', () => {

        //Acessa aplicação Buger Eats
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('main > h1')
            .should('be.visible')
            .and('have.text', 'Seja um parceiro entregador pela Buger Eats')

        //Acessa a tela de cadastro
        cy.get('strong').should('be.visible').and('have.text', 'Cadastre-se para fazer entregas').click()
        cy.get('form > h1').should('be.visible').and('contain.text', 'Cadastre-se para')

        //Prenche os dados do usuário
        cy.get('input[placeholder="Nome completo"]').should('be.visible').type('Tiago Garcia')
        cy.get('input[placeholder="CPF somente números"]').should('be.visible').type('31041145871')
        cy.get('input[name="email"]').should('be.visible').type('thiago@teste.com.br')
        cy.get('input[name="whatsapp"]').should('be.visible').type('11971715220')

        //Preenche endereço do usuário
        cy.get('input[placeholder="CEP"]').should('be.visible').type('09110160')
        cy.get('input[type="button"]').should('be.visible').click()
        cy.get('input[placeholder="Número"]').should('be.visible').type('1000')
        cy.get('input[placeholder="Complemento"]').should('be.visible').type('Ap 100 Bl 2')
        
        //Seleciona o método de entrega

        cy.get('li > span').eq(0).should('be.visible').and('have.text', 'Moto').click()
        cy.get('li[class="selected"]').should('be.visible')

        //Upload CNH

        cy.get('.dropzone').should('be.visible').and('have.text', 'Foto da sua CNH')

        cy.get('input[type="file"]')

            .invoke('show')

            .selectFile('cypress/support/imagem/cnh.jpg')

            .then(($input) => {

                console.log($input)

                const _files = $input[0].files

                expect(_files[0].name).to.eq('cnh.jpg')

            })

        cy.get('.button-success')

            .should('be.visible')

            .and('have.text', 'Cadastre-se para fazer entregas')

            .click()

        //Asserção do teste

       cy.get('#swal2-title').should('be.visible').and('have.text', 'Aí Sim...')

       cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()

       cy.get('main > h1')

       .should('be.visible')

       .and('have.text', 'Seja um parceiro entregador pela Buger Eats')


    })



})