describe(" Testing Booking website", () => {
  it("verify enquiry message", () => {
    cy.visit("https://automationintesting.online/");
    cy.get(".col-2 > .btn").click();
    cy.get("#name").type("Aggy");
    cy.get("#email").type("djhdkc@gmail.com");
    cy.get("#phone").type("78478463878765");
    cy.get("#subject").type("i want to book a room");
    cy.get("#description").type(
      "I would like to book double room on the 3rd of August 2023 till 15th August"
    );
    cy.get("#submitContact").click();
    cy.get("div[class='col-sm-5'] div h2").should("include", "Thanks");
  });
});
