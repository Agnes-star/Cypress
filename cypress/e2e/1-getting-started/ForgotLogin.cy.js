describe(" Testing OrangeHRM website", () => {
  it("verify website title - positive", () => {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
    cy.wait(1000);
    cy.get("a[href='lookup.htm']").click();
  });
});
