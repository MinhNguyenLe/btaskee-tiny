import { createService } from "./common-step";

describe("delete service", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3003/");
  });

  it("should delete service", () => {
    const id = new Date().toString();

    createService(id);

    cy.contains("button", "Accept")
      .click()
      .then(() => {
        expect(cy.contains("div", "Create service successful !")).to.exist;
        expect(cy.get("td").contains(id)).to.exist;

        cy.get("td")
          .contains(id)
          .click()
          .then(() => {
            cy.contains("button", "Delete").click();
            cy.contains("button", "Accept")
              .click()
              .then(() => {
                expect(cy.contains("div", "Delete service successful !")).to
                  .exist;
              });
          });
      });
  });
});
