// import { Meteor } from "meteor/meteor";
// import { Random } from "meteor/random";
import { mockMethodCall } from "meteor/quave:testing";

import { assertChai } from "../../../../tests/chai";
import { Services } from "../collection";

import assert from "assert";

import "/imports/api/services/methods";

if (Meteor.isServer) {
  describe("Services", () => {
    describe("methods", () => {
      let idService, servicesInit;

      beforeEach(() => {
        Services.remove({});

        idService = Services.insert({
          name: "Test Service",
          weight: 0,
        });

        servicesInit = Services.find({}).fetch();
      });

      it(`Get all services by services.getAll`, () => {
        const services = mockMethodCall("services.getAll");

        assertChai.equal(services.length, servicesInit.length);
      });

      it(`Get service with id by services.getById`, () => {
        const service = mockMethodCall("services.getById", idService);

        assertChai.equal(service.name, "Test Service");
      });

      it(`Thrown Meteor error when call services.getById without idService`, () => {
        assert.throws(
          function () {
            mockMethodCall("services.getById");
          },
          (err) => err?.toString() === "Error: [Id not found]"
        );
      });

      it("Insert new services by services.insert", () => {
        const name = "New Service";
        mockMethodCall("services.insert", { name });

        const services = Services.find({}).fetch();

        assertChai.equal(services.length, servicesInit.length + 1);
        assertChai.isTrue(services.some((service) => service.name === name));
      });

      it(`Thrown Meteor error when call services.insert without data`, () => {
        assert.throws(
          function () {
            mockMethodCall("services.insert");
          },
          (err) => err?.toString() === "Error: [No data to insert]"
        );
      });

      it(`Update services by services.updateById`, () => {
        mockMethodCall("services.updateById", idService, { name: "updated" });

        const services = Services.find({}).fetch();

        assertChai.equal(services.length, servicesInit.length);
        assertChai.equal(services[0].name, "updated");
      });

      it(`Thrown Meteor error when call services.updateById without data or idService`, () => {
        assert.throws(
          function () {
            mockMethodCall("services.updateById");
          },
          (err) => err?.toString() === "Error: [No data or idService to update]"
        );
      });

      it(`Delete services by services.deleteById`, () => {
        mockMethodCall("services.deleteById", idService);

        assertChai.equal(Services.find().count(), servicesInit.length - 1);
      });

      it(`Thrown Meteor error when call services.deleteById without idService`, () => {
        assert.throws(
          function () {
            mockMethodCall("services.deleteById");
          },
          (err) => err?.toString() === "Error: [No idService to delete]"
        );
      });

      it(`Update service when drag and drop by services.updateByDragAndDrop`, () => {
        const idService2 = Services.insert({
          name: "Test Service 2",
          weight: 1,
        });

        const listNewOrders = [
          {
            idService,
            weight: 1,
          },
          {
            idService: idService2,
            weight: 0,
          },
        ];

        mockMethodCall("services.updateByDragAndDrop", listNewOrders);

        const services = Services.find({}).fetch();

        assertChai.equal(services[0].weight, 1);
        assertChai.equal(services[1].weight, 0);
      });

      it(`Thrown Meteor error when call services.updateByDragAndDrop without listNewOrders`, () => {
        assert.throws(
          function () {
            mockMethodCall("services.updateByDragAndDrop");
          },
          (err) => err?.toString() === "Error: [Data is not array!]"
        );
      });
    });
  });
}
