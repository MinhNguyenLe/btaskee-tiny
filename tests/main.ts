import assert from "assert";
import { Factory } from "meteor/dburles:factory";
import { Services } from "../imports/api/services/collection";

import "jsdom-global/register";

// import "/imports/api/services/tests/services.test.ts";

import "/imports/ui/components/Dialog/tests/DialogServiceDetail.test.tsx";

Factory.define("services", Services, {
  name: "John Smith",
});

describe("app-react", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "app-react");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
