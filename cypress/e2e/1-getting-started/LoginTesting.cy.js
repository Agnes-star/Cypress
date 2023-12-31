describe(" Testing OrangeHRM website", () => {
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
    cy.get("input[placeholder='Username']").click();
    cy.get("input[placeholder='Username']").type("Admin");

    cy.get("input[placeholder='Password']").click();
    cy.get("input[placeholder='Password']").type("admin123");

    cy.get("button[type='submit']").click();

    cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text");
  });

  it("negative login scenario - blank password", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").click();
    cy.get("input[placeholder='Username']").type("Adminn");

    cy.get("input[placeholder='Password']").click();
    cy.get("input[placeholder='Password']").type(" ");

    cy.get(".oxd-input-group > .oxd-text").should("have.text", "Required");
  });

  it("negative login scenario - wrong password", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").click();
    cy.get("input[placeholder='Username']").type("Adminn");

    cy.get("input[placeholder='Password']").click();
    cy.get("input[placeholder='Password']").type("admin1233");

    cy.get("button[type='submit']").click();

    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should(
      "have.text",
      "Invalid credentials"
    );
  });
});
