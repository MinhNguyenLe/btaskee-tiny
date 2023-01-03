import { Meteor } from "meteor/meteor";
// import { Random } from "meteor/random";
import { mockMethodCall } from "meteor/quave:testing";
import { assert } from "chai";
import { Services } from "./collection";

import "/imports/api/services/methods";

if (Meteor.isServer) {
  describe("Services", () => {
    describe("methods", () => {
      let serviceId;

      beforeEach(() => {
        Services.remove({});
        serviceId = Services.insert({
          text: "Test Service",
        });
      });

      it(`can delete services`, () => {
        mockMethodCall("services.deleteById", serviceId);

        assert.equal(Services.find().count(), 0);
      });

      it("can insert new services", () => {
        const name = "New Service";
        mockMethodCall("services.insert", { name });

        const services = Services.find({}).fetch();

        assert.equal(services.length, 2);
        assert.isTrue(services.some((service) => service.name === name));
      });
    });
  });
}
