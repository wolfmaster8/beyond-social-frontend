import RoutesEnum from "../../../src/routes/RoutesEnum";
import { doPseudoLogin } from "../../utils/login_spec";
import { API_URL, DEV_URL } from "../../utils/consts_spec";
import interceptProfile from "../../utils/interceptProfile_spec";

describe("Home", () => {
  beforeEach(() => {
    doPseudoLogin();
    interceptProfile();
    cy.visit(RoutesEnum.main);
    cy.intercept("GET", `${API_URL}/posts`, {
      statusCode: 200,
      fixture: "posts/feed.json",
    });
  });

  it("should load all posts", () => {
    cy.get("[data-cy=feed]").find("article").its("length").should("eq", 2);
  });

  it("should display correct number of likes", () => {
    cy.get("[data-cy=likes]").first().find("p").should("have.text", 1);
  });

  it("should display correct number of comments", () => {
    cy.get("[data-cy=comments]").eq(1).find("p").should("have.text", 1);
  });

  it("should redirect to post when clicking on it", () => {
    cy.get("[data-cy=feed]").find("article").first().click();
    cy.intercept("GET", `${API_URL}/posts/*`, {
      statusCode: 200,
      fixture: "posts/post.json",
    });
    cy.url().should("eq", `${DEV_URL}${RoutesEnum.post}/1`);
  });
});
