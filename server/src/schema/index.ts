import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { metRoute } from "../routes";
import { greeting } from "./queries/greeting";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: greeting,
  },
});

export const schema= new GraphQLSchema({
  query: RootQuery,
});
