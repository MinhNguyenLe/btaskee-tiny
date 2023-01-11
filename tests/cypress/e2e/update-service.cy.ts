import {
  createService,
  updateBasicTab,
  updateCityTab,
  verifyBasicTab,
  verifyCityTab,
} from "./common-step";

describe("update service", () => {
  const id = new Date().toString();
  beforeEach(() => {
    cy.visit("http://localhost:3003/");

    createService(id);
  });

  // it("should update in tab Basic", () => {
  //   cy.contains("button", "Accept")
  //     .click()
  //     .then(() => {
  //       expect(cy.contains("div", "Create service successful !")).to.exist;
  //       expect(cy.get("td").contains(id)).to.exist;

  //       cy.get("td")
  //         .contains(id)
  //         .click()
  //         .then(() => {
  //           cy.contains("button", "Basic")
  //             .click()
  //             .then(() => {
  //               updateBasicTab(id);

  //               cy.contains("button", "Save")
  //                 .click()
  //                 .then(() => {
  //                   cy.contains("button", "Accept")
  //                     .click()
  //                     .then(() => {
  //                       cy.get("td")
  //                         .contains(id)
  //                         .click()
  //                         .then(() => {
  //                           cy.contains("button", "Basic")
  //                             .click()
  //                             .then(() => {
  //                               verifyBasicTab(id);
  //                             });
  //                         });
  //                     });
  //                 });
  //             });
  //         });
  //     });
  // });

  it("should update in tab City", () => {
    cy.contains("button", "Accept")
      .click()
      .then(() => {
        expect(cy.contains("div", "Create service successful !")).to.exist;
        expect(cy.get("td").contains(id)).to.exist;

        cy.get("td")
          .contains(id)
          .click()
          .then(() => {
            cy.contains("button", "City")
              .click()
              .then(() => {
                updateCityTab(id);

                cy.contains("button", "Save")
                  .click()
                  .then(() => {
                    cy.contains("button", "Accept")
                      .click()
                      .then(() => {
                        cy.get("td")
                          .contains(id)
                          .click()
                          .then(() => {
                            cy.contains("button", "City")
                              .click()
                              .then(() => {
                                verifyCityTab(id);
                              });
                          });
                      });
                  });
              });
          });
      });
  });
});
