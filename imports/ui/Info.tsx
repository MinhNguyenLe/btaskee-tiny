import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { ServicesCollection } from "../api/services";

export const Info = () => {
  const links = useTracker(() => {
    return ServicesCollection.find().fetch();
  });

  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>
        {links.map((link) => (
          <li key={link._id}>
            <a href={link.url} target="_blank">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
