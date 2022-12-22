import { Mongo } from "meteor/mongo";
import { Service } from "../ui/utils/types";

export const ServicesCollection = new Mongo.Collection<Service>("services");
