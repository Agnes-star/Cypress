describe(" Testing OrangeHRM website", () => {
  it("verify website title - positive", () => {
    cy.visit("https://demo.applitools.com/");
    cy.wait(1000);
    cy.get("#username").type("Beata");
    cy.get("#password").type("test123");
    cy.get("#log-in").click();

    cy.get(
      "div[class='element-wrapper compact pt-4'] h6[class='element-header']"
    ).should("have.text", "Financial ");
  });
});
