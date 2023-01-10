import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoadProvider from "./context/nameUserContext";
import { HomeContextProvider } from "./public/home/context/homeContext";
import { LanguageContextProvider } from "./context/languageContext";
import { CommentsContextProvider } from "./context/comments/commentsContext";

import { ApolloClient, HttpLink, split } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";
import { http } from "./services/http";
import { ApolloProvider } from "@apollo/client/react";
import { WebSocketLink } from "@apollo/link-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { ProfileContextProvider } from "./context/profile/profileContext";
const sLink = new HttpLink({
  uri: `${http}graphql`,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:3002/graphql",
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  sLink
);

const client = new ApolloClient({
  connectToDevTools: true, //devtools browser
  cache: new InMemoryCache(),
  link: splitLink,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <LoadProvider>
        <HomeContextProvider>
          <LanguageContextProvider>
            <CommentsContextProvider>
              <ProfileContextProvider>
                <App />
              </ProfileContextProvider>
            </CommentsContextProvider>
          </LanguageContextProvider>
        </HomeContextProvider>
      </LoadProvider>
    </ApolloProvider>
  </React.StrictMode>
);
