import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoadProvider from "./context/nameUser/nameUserContext";
import { HomeContextProvider } from "./context/home/homeContext";
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
