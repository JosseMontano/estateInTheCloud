import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoadProvider from "./context/nameUserContext";
import { HomeContextProvider } from "./context/homeContext";
import { LanguageContextProvider } from "./context/languageContext";
import { ProfileContextProvider } from "./context/profile/profileContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LoadProvider>
      <HomeContextProvider>
        <LanguageContextProvider>
          <ProfileContextProvider>
            <App />
          </ProfileContextProvider>
        </LanguageContextProvider>
      </HomeContextProvider>
    </LoadProvider>
  </React.StrictMode>
);
