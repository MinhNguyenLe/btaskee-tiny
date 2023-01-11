export const createService = (id) => {
  cy.contains("button", "Create new service").click();

  cy.get('input[name="costSuggestion"]').type("1");
  cy.get('input[name="limitDateOfBooking"]').type("1/6/2023");
  cy.get('input[name="defaultTaskTime"]').type("1");
  cy.get('input[name="icon"]').type(
    "https://btaskee-stag.s3-ap-southeast-1.amazonaws.com/campaigns/AJSeGd5v6fmsh7MaY"
  );
  cy.get('input[name="name"]').type("New service");
  cy.get('input[name="minutesPostTaskAfterNow"]').type("1");
  cy.get('input[name="minAvgRating"]').type("1");
  cy.get('input[name="minTaskDone"]').type("1");
  cy.get('input[name="serviceFeeLeaderTasker"]').type("1");
  cy.get('input[name="limitNumberAcceptTaskInDay"]').type("1");
  cy.get('input[name="maximumPSI"]').type("1");
  cy.get('input[name="minTaskOfSubscription"]').type("1");
  cy.get('input[name="minMoneyDeposite"]').type("1");
  cy.get('input[name="requireTaskerVersion"]').type("version 2");
  cy.get('input[name="taskServiceId"]').type("service 2");
  cy.get('input[name="requireAskerVersion"]').type("Yes");
  cy.get('input[name="linkContentInCar"]').type("https://pomofocus.io/");
  cy.get('input[name="onlyShowTasker"]').check();
  cy.get('input[name="isNewService"]').check();
  cy.get('input[name="isSubscription"]').check();
  cy.get('input[name="isOpenGoMarketDefault"]').check();
  cy.get('input[name="status"]').check();

  cy.get('input[name="text.vi"]').type("E2E testing update Service" + id);
  cy.get('input[name="text.th"]').type("E2E testing update Service" + id);
  cy.get('input[name="text.en"]').type("E2E testing update Service" + id);
  cy.get('input[name="text.ko"]').type("E2E testing update Service" + id);

  cy.get('input[name="shortText.vi"]').type("E2E testing update Service");
  cy.get('input[name="shortText.th"]').type("E2E testing update Service");
  cy.get('input[name="shortText.en"]').type("E2E testing update Service");
  cy.get('input[name="shortText.ko"]').type("E2E testing update Service");

  cy.contains("button", "Save").click();
};

export const updateBasicTab = (id) => {
  cy.get('input[name="costSuggestion"]').clear();
  cy.get('input[name="defaultTaskTime"]').clear();
  cy.get('input[name="icon"]')
    .clear()
    .type(
      "https://btaskee-stag.s3-ap-southeast-1.amazonaws.com/campaigns/AJSeGd5v6fmsh7MaY"
    );
  cy.get('input[name="name"]').clear().type("updated service");
  cy.get('input[name="minutesPostTaskAfterNow"]').clear();
  cy.get('input[name="minAvgRating"]').clear();
  cy.get('input[name="minTaskDone"]').clear();
  cy.get('input[name="serviceFeeLeaderTasker"]').clear();
  cy.get('input[name="limitNumberAcceptTaskInDay"]').clear();
  cy.get('input[name="maximumPSI"]').clear();
  cy.get('input[name="minTaskOfSubscription"]').clear();
  cy.get('input[name="minMoneyDeposite"]').clear();
  cy.get('input[name="requireTaskerVersion"]')
    .clear()
    .type("version 2 Updated");
  cy.get('input[name="taskServiceId"]').clear().type("service Updated");
  cy.get('input[name="requireAskerVersion"]').clear().type("Yes");
  cy.get('input[name="linkContentInCar"]')
    .clear()
    .type("https://pomofocus.io/Updated");

  cy.get('input[name="onlyShowTasker"]').uncheck();
  cy.get('input[name="isNewService"]').uncheck();
  cy.get('input[name="isSubscription"]').uncheck();
  cy.get('input[name="isOpenGoMarketDefault"]').uncheck();
  cy.get('input[name="status"]').uncheck();

  cy.get('input[name="text.vi"]')
    .clear()
    .type("Updated E2E testing update Service" + id);
  cy.get('input[name="text.th"]')
    .clear()
    .type("Updated E2E testing update Service" + id);
  cy.get('input[name="text.en"]')
    .clear()
    .type("Updated E2E testing update Service" + id);
  cy.get('input[name="text.ko"]')
    .clear()
    .type("Updated E2E testing update Service" + id);

  cy.get('input[name="shortText.vi"]')
    .clear()
    .type("Updated E2E testing update Service" + id);
  cy.get('input[name="shortText.th"]')
    .clear()
    .type("Updated E2E testing update Service" + id);
  cy.get('input[name="shortText.en"]')
    .clear()
    .type("Updated E2E testing update Service" + id);
  cy.get('input[name="shortText.ko"]')
    .clear()
    .type("Updated E2E testing update Service" + id);
};

export const verifyBasicTab = (id) => {
  expect(cy.get('input[name="costSuggestion"]').should("have.value", "0")).to
    .exist;
  expect(cy.get('input[name="defaultTaskTime"]').should("have.value", "0")).to
    .exist;
  expect(
    cy.get('input[name="minutesPostTaskAfterNow"]').should("have.value", "0")
  ).to.exist;
  expect(cy.get('input[name="minAvgRating"]').should("have.value", "0")).to
    .exist;
  expect(cy.get('input[name="minTaskDone"]').should("have.value", "0")).to
    .exist;
  expect(
    cy.get('input[name="serviceFeeLeaderTasker"]').should("have.value", "0")
  ).to.exist;
  expect(
    cy.get('input[name="limitNumberAcceptTaskInDay"]').should("have.value", "0")
  ).to.exist;
  expect(
    cy
      .get('input[name="icon"]')
      .should(
        "have.value",
        "https://btaskee-stag.s3-ap-southeast-1.amazonaws.com/campaigns/AJSeGd5v6fmsh7MaY"
      )
  ).to.exist;
  expect(cy.get('input[name="name"]').should("have.value", "updated service"))
    .to.exist;

  expect(cy.get('input[name="maximumPSI"]').should("have.value", "0")).to.exist;
  expect(
    cy.get('input[name="minTaskOfSubscription"]').should("have.value", "0")
  ).to.exist;
  expect(cy.get('input[name="minMoneyDeposite"]').should("have.value", "0")).to
    .exist;
  expect(
    cy
      .get('input[name="requireTaskerVersion"]')
      .should("have.value", "version 2 Updated")
  ).to.exist;
  expect(
    cy
      .get('input[name="taskServiceId"]')
      .should("have.value", "service Updated")
  ).to.exist;
  expect(
    cy
      .get('input[name="linkContentInCar"]')
      .should("have.value", "https://pomofocus.io/Updated")
  ).to.exist;

  expect(cy.get('input[name="onlyShowTasker"]').should("not.be.checked")).to
    .exist;
  expect(cy.get('input[name="isNewService"]').should("not.be.checked")).to
    .exist;
  expect(cy.get('input[name="isSubscription"]').should("not.be.checked")).to
    .exist;
  expect(cy.get('input[name="isOpenGoMarketDefault"]').should("not.be.checked"))
    .to.exist;
  expect(cy.get('input[name="status"]').should("not.be.checked")).to.exist;

  expect(
    cy
      .get('input[name="text.vi"]')
      .should("have.value", "Updated E2E testing update Service" + id)
  ).to.exist;
  expect(
    cy
      .get('input[name="text.th"]')
      .should("have.value", "Updated E2E testing update Service" + id)
  ).to.exist;
  expect(
    cy
      .get('input[name="text.ko"]')
      .should("have.value", "Updated E2E testing update Service" + id)
  ).to.exist;
  expect(
    cy
      .get('input[name="text.en"]')
      .should("have.value", "Updated E2E testing update Service" + id)
  ).to.exist;

  expect(
    cy
      .get('input[name="shortText.vi"]')
      .should("have.value", "Updated E2E testing update Service" + id)
  ).to.exist;
  expect(
    cy
      .get('input[name="shortText.th"]')
      .should("have.value", "Updated E2E testing update Service" + id)
  ).to.exist;
  expect(
    cy
      .get('input[name="shortText.ko"]')
      .should("have.value", "Updated E2E testing update Service" + id)
  ).to.exist;
  expect(
    cy
      .get('input[name="shortText.en"]')
      .should("have.value", "Updated E2E testing update Service" + id)
  ).to.exist;
};

export const updateCityTab = (id) => {
  cy.get('label[data-testid="City_add"]')
    .click()
    .then(() => {
      cy.get('input[name="city.0.name"]')
        .clear()
        .type("Updated city name" + id);

      cy.get('input[name="city.0.baseCost"]').clear();

      //   cy.get('label[data-testid="District_0_add"]')
      //     .click()
      //     .then(() => {
      //       cy.get('input[name="city.0.district.0.name"]')
      //         .clear()
      //         .type("Updated district name" + id);
      //     });
    });
};

export const verifyCityTab = (id) => {
  expect(
    cy
      .get('input[name="city.0.name"]')
      .should("have.value", "Updated city name" + id)
  ).to.exist;

  expect(cy.get('input[name="city.0.baseCost"]').should("have.value", "0")).to
    .exist;

  // expect(
  //   cy
  //     .get('input[name="city.0.district.0.name"]')
  //     .should("have.value", "Updated district name" + id)
  // ).to.exist;
};
