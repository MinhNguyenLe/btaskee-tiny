const { defineConfig } = require('cypress')
const { MongoClient } = require("mongodb")

async function queryTestDb() {
  const url = 'mongodb://localhost:27017';
  const client = new MongoClient(url);

  const dbName = 'test';
  const db = client.db(dbName);

  const collection = db.collection('services');
  await collection.insertOne({
    "_id": "1111111111111111111",
    "icon": "/icons/service-icon/noi_tro.png",
    "text": {
      "vi": "Dịch vụ khác",
      "en": "Other service",
      "ko": "기타 서비스"
    },
    "status": "INACTIVE",
    "costSuggestion": 0,
    "discountByDuration": [],
    "discountByDoneTask": []
  });
  const test = await collection.find();
  client.close();
  return test;
}
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3003',
    specPattern: 'tests/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    // plugins: "tests/cypress/plugins/index.ts",
    setupNodeEvents(on) {
      on("task", {
        queryDb: () => {
          return queryTestDb();
        }
      });
    }
  }
})