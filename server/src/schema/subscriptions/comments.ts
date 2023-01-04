import { GraphQLFloat, GraphQLObjectType } from "graphql";
import { GraphQLID, GraphQLString } from "graphql/type";
import Comments from "../../interfaces/comments";
const { PubSub } = require("graphql-subscriptions");

export const pubsub = new PubSub();

/* email: String
id_comment: Float
commentator: Float
description: String
amount_start: Float
url: String  */

//'fieds' is what it returns
const typeDefs = new GraphQLObjectType({
  name: "DELETE_A_COMMENT",
  fields: {
    id: { type: GraphQLFloat },
  },
});

export const DELETE_A_COMMENT = {
  type: typeDefs,
  subscribe: () => pubsub.asyncIterator("DELETE_A_COMMENT"),
};

const typeDefsAddComment = new GraphQLObjectType({
  name: "ADD_A_COMMENT",
  fields: {
    id: { type: GraphQLID },
    commentator: { type: GraphQLFloat },
    description: { type: GraphQLString },
    amount_start: { type: GraphQLFloat },
  },
});

export const ADD_A_COMMENT = {
  type: typeDefsAddComment,
  subscribe: () => pubsub.asyncIterator("ADD_A_COMMENT"),
};
