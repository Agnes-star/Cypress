describe(" Navigate to OrangeHRM website", () => {
  it("verify website title - positive", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.wait(1000);
    cy.title().should("equal", "OrangeHRM");
  });

  it("verify website title - Negative", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.wait(1000);
    cy.title().should("not.equal", "OrangeHRMM");
  });
});

describe(" Verify Login functionality", () => {
  it("positive login scenario", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });
});
