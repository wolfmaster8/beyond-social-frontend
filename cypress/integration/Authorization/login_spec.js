import RoutesEnum from "../../../src/routes/RoutesEnum";
import { DEV_URL } from "../../utils/consts_spec";

describe("Authorization", () => {
  it("should redirect to login page when attempting to access a private route", () => {
    cy.visit(RoutesEnum.main);
    cy.url().should("eq", `${DEV_URL}${RoutesEnum.login}`);
  });

  it("login button should be disabled when no fields are filled", () => {
    cy.visit(RoutesEnum.login);

    cy.get("button").should("have.attr", "disabled");
  });

  it("login button should be disabled when only username is filled", () => {
    cy.visit(RoutesEnum.login);

    cy.get("#username").type("test");

    cy.get("button").should("have.attr", "disabled");
  });

  it("login button should be disabled when only password is filled", () => {
    cy.visit(RoutesEnum.login);

    cy.get("#password").type("test");

    cy.get("button").should("have.attr", "disabled");
  });

  it("login button should be enabled when username & password are filled", () => {
    cy.visit(RoutesEnum.login);
    cy.get("#username").type("test");

    cy.get("#password").type("test");

    cy.get("button").should("not.have.attr", "disabled");
  });
});
