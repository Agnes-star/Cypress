/// <reference types="cypress" />

describe("Para Bank", () => {
  it("Registration - positive scenario", () => {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
    cy.get(
      "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > form:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > input:nth-child(1)"
    )
      .click()
      .type("Magda");
    cy.get(
      "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > form:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > input:nth-child(1)"
    ).type("Ofjhvfdjhvb");
    cy.get(
      "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > form:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2) > input:nth-child(1)"
    ).type("66 Street");
    cy.get(
      "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > form:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2) > input:nth-child(1)"
    ).type("Warsaw");
    cy.get(
      "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > form:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(2) > input:nth-child(1)"
    ).type("Oklahoma");
    cy.get(
      "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > form:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(2) > input:nth-child(1)"
    ).type("nh17 18jk");
    cy.get(
      "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > form:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(7) > td:nth-child(2) > input:nth-child(1)"
    ).type("0765298425");
    cy.get(
      "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > form:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(8) > td:nth-child(2) > input:nth-child(1)"
    ).type("87463474");
    cy.get(
      "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > form:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(10) > td:nth-child(2) > input:nth-child(1)"
    ).type("snickers");
    cy.get(
      "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > form:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(11) > td:nth-child(2) > input:nth-child(1)"
    ).type("testing123");
    cy.get("#repeatedPassword").type("testing123");

    cy.get("input[value='Register']").click();
  });
});
