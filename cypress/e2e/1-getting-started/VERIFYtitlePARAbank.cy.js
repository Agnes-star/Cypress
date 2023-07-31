describe(" Title Parabank", () => {
  it("verify website title - positive", () => {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
    cy.wait(1000);
    cy.title().should(
      "equal",
      "ParaBank | Register for Free Online Account Access"
    );
  });

  it("verify website title - Negative", () => {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
    cy.wait(1000);
    cy.title().should(
      "not.equal",
      "ParaBank | Register for Free Online Account"
    );
  });
});
