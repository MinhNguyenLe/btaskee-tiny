import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducers from "./reducer";

const logger = createLogger();
let middleware: any = [];

if (Meteor.settings.public.MODE !== "prod") {
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}

const store = createStore(
  rootReducers,
  compose(applyMiddleware(...middleware))
);

export default store;
