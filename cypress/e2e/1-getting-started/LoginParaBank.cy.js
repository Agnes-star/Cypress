describe(" Login Parabank", () => {
  it("verify login - positive", () => {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
    cy.wait(1000);

    cy.get("input[name='username']").type("snickers");
    cy.get("input[name='password']").type("testing123");
    cy.get("input[value='Log In']").click();
  });
  it("verify login - negative - wrong password", () => {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
    cy.wait(1000);

    cy.get("input[name='username']").type("snickers");
    cy.get("input[name='password']").type("testing1233");
    cy.get("input[value='Log In']").click();

    cy.get(".error").should(
      "have.value",
      "An internal error has occurred and has been logged."
    );
  });
  it("verify login - negative - wrong username", () => {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
    cy.wait(1000);

    cy.get("input[name='username']").type("snickers111");
    cy.get("input[name='password']").type("testing123");
    cy.get("input[value='Log In']").click();

    cy.xpath("//p[@class='error']").should(
      "have.value",
      "An internal error has occurred and has been logged."
    );
  });
  it("verify login - negative - blank username", () => {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
    cy.wait(1000);

    cy.get("input[name='username']").click();
    cy.get("input[name='password']").type("testing123");
    cy.get("input[value='Log In']").click();

    cy.get(".error").should(
      "have.value",
      "Please enter a username and password."
    );
  });
  it("verify login - negative - blank password", () => {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
    cy.wait(1000);

    cy.get("input[name='username']").type("snickers");
    cy.get("input[name='password']").click();
    cy.get("input[value='Log In']").click();

    cy.get(".error").should(
      "have.value",
      "Please enter a username and password."
    );
  });
});
