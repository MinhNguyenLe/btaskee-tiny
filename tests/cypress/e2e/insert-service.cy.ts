import { createService } from "./common-step";

describe("insert service", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3003/");
  });

  it("should create new service", () => {
    const id = new Date().toString();

    createService(id);

    cy.contains("button", "Save").click();
    cy.contains("button", "Accept")
      .click()
      .then(() => {
        expect(cy.contains("div", "Create service successful !")).to.exist;
        expect(cy.get("td").contains(id)).to.exist;
      });
  });
});
