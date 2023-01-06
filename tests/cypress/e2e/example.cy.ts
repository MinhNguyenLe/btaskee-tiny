describe("sign-up", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3003/");
  });

  it("should create new service", () => {
    // cy.get("button").should("have.text", "Create new service").click();
    cy.contains("button", "Create new service").click();

    cy.get('input[name="costSuggestion"]').type(1);

    cy.get('input[name="limitDateOfBooking"]').type("1/6/2023");
    cy.get('input[name="defaultTaskTime"]').type(1);
    cy.get('input[name="icon"]').type(
      "https://btaskee-stag.s3-ap-southeast-1.amazonaws.com/campaigns/AJSeGd5v6fmsh7MaY"
    );
    cy.get('input[name="name"]').type("New service");
    cy.get('input[name="minutesPostTaskAfterNow"]').type(1);
    cy.get('input[name="minAvgRating"]').type(1);
    cy.get('input[name="minTaskDone"]').type(1);
    cy.get('input[name="serviceFeeLeaderTasker"]').type(1);
    cy.get('input[name="limitNumberAcceptTaskInDay"]').type(1);

    cy.get('input[name="maximumPSI"]').type(1);
    cy.get('input[name="minTaskOfSubscription"]').type(1);

    cy.get('input[name="minMoneyDeposite"]').type(1);
    cy.get('input[name="requireTaskerVersion"]').type("version 2");
    cy.get('input[name="taskServiceId"]').type("service 2");

    cy.get('input[name="requireAskerVersion"]').type("Yes");
    cy.get('input[name="linkContentInCar"]').type("http://...");

    cy.get('input[name="onlyShowTasker"]').check();
    cy.get('input[name="isNewService"]').check();
    cy.get('input[name="isSubscription"]').check();
    cy.get('input[name="isOpenGoMarketDefault"]').check();

    cy.get('input[name="status"]').check();

    cy.contains("button", "Save").click();

    // cy.url().should("eq", "http://localhost:3000/board");

    cy.window().then((win) => {
      console.log("----------------- CYPRESS", win);

      const meteor = win.Meteor;
    });
  });
});
