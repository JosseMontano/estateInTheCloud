import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoadProvider from "./context/nameUserContext";
import { HomeContextProvider } from "./context/homeContext";
import { LanguageContextProvider } from "./context/languageContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <LoadProvider>
        <HomeContextProvider>
          <LanguageContextProvider>
            <App />
          </LanguageContextProvider>
        </HomeContextProvider>
      </LoadProvider>
  </React.StrictMode>
);
