import { API_URL } from "./consts_spec";

export default function interceptProfile() {
  cy.intercept("GET", `${API_URL}/users/me`, {
    statusCode: 200,
    fixture: "users/me.json",
  });
}
