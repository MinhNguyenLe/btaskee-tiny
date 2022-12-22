import { Meteor } from "meteor/meteor";
import { ServicesCollection } from "../imports/api/services";

// async function insertLink({ title, url }) {
//   await ServicesCollection.insertAsync({ title, url, createdAt: new Date() });
// }

Meteor.startup(async () => {
  // If the Links collection is empty, add some data
  if ((await ServicesCollection.find().countAsync()) === 0) {
    // await insertLink({
    //   title: "Do the Tutorial",
    //   url: "https://www.meteor.com/tutorials/react/creating-an-app",
    // });
    // await insertLink({
    //   title: "Follow the Guide",
    //   url: "https://guide.meteor.com",
    // });
    // await insertLink({
    //   title: "Read the Docs",
    //   url: "https://docs.meteor.com",
    // });
    // await insertLink({
    //   title: "Discussions",
    //   url: "https://forums.meteor.com",
    // });
  }
});
