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
  it("verify login - positive", () => {
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
