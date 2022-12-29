import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoadProvider from "./context/nameUserContext";
import { HomeContextProvider } from "./context/homeContext";
import { LanguageContextProvider } from "./context/languageContext";
import { ApolloClient, HttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";
import { http } from "./services/http";
import { ApolloProvider } from "@apollo/client/react";
import { CommentsContextProvider } from "./context/comments/commentsContext";
const client = new ApolloClient({
  connectToDevTools: true, //devtools browser
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${http}graphql`,
  }),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <LoadProvider>
        <HomeContextProvider>
          <LanguageContextProvider>
            <CommentsContextProvider>
              <App />
            </CommentsContextProvider>
          </LanguageContextProvider>
        </HomeContextProvider>
      </LoadProvider>
    </ApolloProvider>
  </React.StrictMode>
);
