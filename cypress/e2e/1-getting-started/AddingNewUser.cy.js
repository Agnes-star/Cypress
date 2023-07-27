describe(" Verify Adding new user", () => {
  beforeEach("Login to the page", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").click();
    cy.get("input[placeholder='Username']").type("Admin");

    cy.get("input[placeholder='Password']").click();
    cy.get("input[placeholder='Password']").type("admin123");

    cy.get("button[type='submit']").click();

    cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text");
  });

  it("Adding new user - positive scenario", () => {
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();

    cy.get(".orangehrm-header-container > .oxd-button").click();

    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    )
      .click()
      .select("ESS");
  });
});
