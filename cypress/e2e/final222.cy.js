


// //ტესტ ქეისი N1(ავტორიზაცია )
// გახსენი https://zootopia.ge/ka
// დააჭირე "შესვლა"
// შეიყვანე ელ.ფოსტა და პაროლი
// დააკლიკე"ავტორიზაცია "
//შეამოწმე რომ "პროფოილის"აიქონი არის ხილვადი 




// ტესტ ქეისი N2 (კალათში პროდუქტების დამატება )
// გახსენი https://zootopia.ge/ka
// დააჭირე "შესვლა"
// შეიყვანე ელ.ფოსტა და პაროლი
// დააკლიკე"ავტორიზაცია "
//ჩამოსქროლე და დააკლიკე ნებისმიერ "პროდუქციის ნახვას "
// დამატე 3 ნებისმიერი პროდუქტი კალათშო
// დააკლიკე კალათის აიქონს 
// //შეამოწმე რომ 3 პროდუქტი ხივლადია კალათაში 


// ტესტ ქეისი N3(რეგისტრაციისას ერთი სავალდებულო ველის გამოტოვება)

// გახსენი https://zootopia.ge/ka
// დააჭირე "შესვლა"
// დააჭირე "გაიარეთ რეგისტრაცია"
//შეავსე ყველა ველი გარდა პირადი ნომრისა
//დაეთანხმე წესებს და პირობებს
// დააკლიკე ღილაკს "რეგისტრაცია"
// შეამოწმე რომ მომხარებელი ვერ რეგისტრირდება და გამოტოვებულ ველში გამოდის შესბაამისი ერორ მესიჯი 

//ტესტ ქეისი N4 (რეგისტრაცია ვალიდურო მონაცემებით)
// დააჭირე "შესვლა"
// დააჭირე "გაიარეთ რეგისტრაცია"
//შეავსე თითოეული ველი ვალიდური მონაცემეით
//დაეთანხმე წესებს და პირობებს
//დააკლიკე "რეგისტრაციის" ღილაკს
//დააკლიკე"go home" ღილაკს


//ტესტ ქეისი N5(კალათიდან პროდუქტის წაშლა)
// გახსენი https://zootopia.ge/ka
// დააჭირე "შესვლა"
// შეიყვანე ელ.ფოსტა და პაროლი
// დააკლიკე"ავტორიზაცია "
//ჩამოსქროლე და დააკლიკე ნებისმიერ "პროდუქციის ნახვას "
// დამატე 3 ნებისმიერი პროდუქტი კალათშო
// დააკლიკე კალათის აიქონს 
//წაშალე პირველი პროდუქტი კალათიდან
//შეამოწმე რომ პირველი პროდუქტი არ ჩანს კალათში

import credentials from "../fixtures/example.json"
describe('zootopiatestcases', () => {
  it('login', () => {
    cy.login(credentials.email, credentials.password)
    cy.contains(".menu-pop", "პროფილი").should('be.visible')
  })
  it('addtobasket', () => {
    cy.login(credentials.email, credentials.password)
    cy.get('.pug > .seepro')

    cy.contains(".seepro", 'პროდუქციის ნახვა').click()
    cy.get(':nth-child(19) > .price-cart > .product-cart > p').click()
    cy.get(':nth-child(23) > .price-cart > .product-cart > p').click()
    cy.get(':nth-child(26) > .price-cart > .product-cart > p').click()
    cy.get('.menu-pop > [href="https://zootopia.ge/ka/cart"]').click()
    cy.get('[href="https://zootopia.ge/ka/product/558-ROPE.-MINT-FLAVOUR-32CM"] > h2').should('be.visible')
    cy.get('[href="https://zootopia.ge/ka/product/49-Bosch-HPC-Soft-Junior-Chicken-&-Sweet-Potato-12.5-kg"] > h2').should('be.visible')
    cy.get('[href="https://zootopia.ge/ka/product/51-Bosch-HPC-Soft-Mini-Wachtel-&-Potato1-kg"] > h2').should('be.visible')
    // //ზედა 7 აბზაცის ელემენტებს ხელით ვერ მივწვდი
  })

  it('registrationwithoutonemandatoryfield(IDnum)', () => {

    cy.visit('https://zootopia.ge/ka')
    cy.viewport(1000, 660)
    cy.contains('.rprof', 'შესვლა').click()
    cy.contains(" გაიარეთ რეგისტრაცია ").click()
    cy.get('[name="first_name"]').type("liza liza")
    let email = 'achezhia' + Math.random() + '@gmail.com'
    cy.contains(".input-div ", "ელ.ფოსტა").type(email)
    cy.contains(".input-div ", "ტელ").type(686368833)
    cy.get('[name="reg_password"]').type("liza11")
    cy.get('[name="reg_password_confirmation"]').type("liza11")
    cy.get('#etx').check({ force: true })
    //cy.contains(".regsub","რეგისტრაცია").click()
    //რეგისტრაციის ღილაკზე ქლიქს ხან აფეილებს,ხან არა. 
    cy.get('.regsub').click()
    cy.get(".alert").should("be.visible")



  })
  it('registrationwithvalidcredentials', () => {

    cy.visit('https://zootopia.ge/ka')
    cy.viewport(1000, 660)
    cy.contains('.rprof', 'შესვლა').click()
    cy.contains(" გაიარეთ რეგისტრაცია ").click()
    cy.get('[name="first_name"]').type("liza liza")
    let email = 'achezhia' + Math.random() + '@gmail.com'
    cy.contains(".input-div ", "ელ.ფოსტა").type(email)
    cy.get('[name="personal_id"]').type(45376456)
    cy.contains(".input-div ", "ტელ").type(13564332)
      / cy.get('[name="reg_password"]').type("liza11")
    cy.get('[name="reg_password_confirmation"]').type("liza11")
    cy.get('#etx').check({ force: true })
    //cy.contains(".regsub","რეგისტრაცია").click()
    //რეგისტრაციის ღილაკზე ქლიქს ხან აფეილებს,ხან არა. 
    cy.get('.regsub').click()
    cy.contains("Go Home").click()


  })

  it('deleteproductfrombasket', () => {
    cy.login(credentials.email, credentials.password)

    cy.contains(".seepro", 'პროდუქციის ნახვა').click()
    cy.get(':nth-child(5) > .price-cart > .product-cart > p').click()
    cy.get(':nth-child(23) > .price-cart > .product-cart > p').click()
    cy.get(':nth-child(26) > .price-cart > .product-cart > p').click()
    cy.get('.menu-pop > [href="https://zootopia.ge/ka/cart"]').click()
    cy.get('[href="https://zootopia.ge/ka/product/558-ROPE.-MINT-FLAVOUR-32CM"] > h2').should('be.visible')
    cy.get('[href="https://zootopia.ge/ka/product/49-Bosch-HPC-Soft-Junior-Chicken-&-Sweet-Potato-12.5-kg"] > h2').should('be.visible')
    cy.get('[href="https://zootopia.ge/ka/product/51-Bosch-HPC-Soft-Mini-Wachtel-&-Potato1-kg"] > h2').should('be.visible')

    cy.get('.menu-pop > [href="https://zootopia.ge/ka/cart"] > #cart-items-count').click()
    cy.get('[href="https://zootopia.ge/ka/product/558-ROPE.-MINT-FLAVOUR-32CM"] > h2').should('not.be.visible')

  })


})







