describe(" Testing OpenCart website", () => {
  it("verify website title - positive", () => {
    cy.visit(
      "https://demo.opencart.com/index.php?route=common/home&language=en-gb"
    );
    cy.title().should("equal", "Your Store");
  });
  it("verify website title - negative", () => {
    cy.visit(
      "https://demo.opencart.com/index.php?route=common/home&language=en-gb"
    );
    cy.title().should("not.equal", "Your Storee");
  });
});
describe(" Testing OpenCart Registration", () => {
  it("verify registration - positive", () => {
    cy.visit(
      "https://demo.opencart.com/index.php?route=account/register&language=en-gb"
    );
    cy.get("#input-firstname").type("Anna");
    cy.get("#input-lastname").type("Karmel");
    cy.get("#input-email").type("agnes.realm@gmail.com");
    cy.get("#input-password").type("test123");
    cy.get("#input-newsletter-no").check().should("be.checked");
    cy.get("input[value='1'][name='agree']").check().should("be.checked");
    cy.get("button[type='submit']").click();
    cy.get("div[id='content'] h1").should(
      "have.text",
      "Your Account Has Been Created!"
    );
  });
});
describe(" Testing OpenCart Login", () => {
  it("verify login - positive", () => {
    cy.visit(
      "https://demo.opencart.com/index.php?route=account/login&language=en-gb"
    );
    cy.get("#input-email").type("agnes.realm@gmail.com");
    cy.get("#input-password").type("test123");
    cy.get("button[type='submit']").click();
    cy.get("body main h2:nth-child(1)").should("have.text", "My Account");
  });

  it("verify login - negative - wrong email", () => {
    cy.visit(
      "https://demo.opencart.com/index.php?route=account/login&language=en-gb"
    );
    cy.get("#input-email").type("agnes.realm@gmail");
    cy.get("#input-password").type("test123");
    cy.get("button[type='submit']").click();
    cy.get("#alert").should(
      "have.value",
      " Warning: No match for E-Mail Address and/or Password."
    );
  });
  it("verify login - negative - wrong password", () => {
    cy.visit(
      "https://demo.opencart.com/index.php?route=account/login&language=en-gb"
    );
    cy.get("#input-email").type("agnes.realm@gmail.com");
    cy.get("#input-password").type("test1233");
    cy.get("button[type='submit']").click();
    cy.get("#alert").should(
      "have.value",
      " Warning: No match for E-Mail Address and/or Password."
    );
  });
});
