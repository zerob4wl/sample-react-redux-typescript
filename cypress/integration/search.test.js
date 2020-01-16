import { BASE_URL } from "../config";

describe("Search", function() {
  it("search city", function() {
    cy.visit(BASE_URL);
    cy.get(".search-input").type("berlin");
  });
});
