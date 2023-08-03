describe(" Testing Ultimate Courses", () => {
  it("verify registration", () => {
    cy.visit("https://courses.ultimateqa.com/users/sign_up");
    cy.wait(1000);
    cy.get("#user\\[first_name\\]").type("Agnieszka");
    cy.get("#user\\[last_name\\]").type("Herold");
    cy.get("#user\\[email\\]").type("agnes.realm@gmail.com");
    cy.get("#user\\[password\\]").type("test123abc");
    cy.get("#user\\[terms\\]").check().should("be.checked");
    cy.get(".form__button-group > .button").click();
  });

  it.only("verify login", () => {
    cy.visit("https://courses.ultimateqa.com/users/sign_in");
    cy.get("#user\\[email\\]").type("agnes.realm@gmail.com");
    cy.get("#user\\[password\\]").type("test123abc");
    cy.get(".form__button-group > .button").click();
    cy.get(".collections__heading").should("have.value", "Products");
  });
});
