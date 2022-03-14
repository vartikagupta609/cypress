/// <reference types="Cypress"/>

// describe['Login',()=>{
//     it('Sign in',()=>{
//         cy.visit('https://react-redux.realworld.io/#/login');
//         cy.get('input[type="email"]').type["guptaavarta@gmail.com"]
//         cy.get('input[type="password"]').type["Vartika@1"]
//         cy.get('btn').contains("Sign in").should("be.visible").click();

//     })
// }]

// describe("login", () => { 
//     beforeEach(() => {
//         cy.visit('https://sabtestx.extramarks.com');
//     });

//     it('Example test', () => {
//        // cy.get('input[type="email"]').type["guptaavarta@gmail.com"]
//        // cy.get('input[type="password"]').type["Vartika@1"]
//       cy.get('#loginbtnnavloginbtnnav').contains("Login").click();
//     })
// });



describe('MyTestSuite',function()
{
    it('Verify Title pf the Page-Positive',function()
    {
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq','nopCommerce demo store')
    })

    it('Verify Title pf the Page-Negitive',function()
    {
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq','nopCommerce store')
    })
}
)