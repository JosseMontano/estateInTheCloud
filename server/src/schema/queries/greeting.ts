import { GraphQLString } from "graphql";

export const greeting = {
  type: GraphQLString,
  resolve: () => "Hello",
};
