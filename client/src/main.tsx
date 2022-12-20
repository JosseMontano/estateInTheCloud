import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ToastProvider from "./context/toast/toast";
import LoadProvider from "./context/nameUser";
import { HomeContextProvider } from "./context/home/homeContext";
import { LanguageContextProvider } from "./context/languageContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider>
      <LoadProvider>
        <HomeContextProvider>
          <LanguageContextProvider>
            <App />
          </LanguageContextProvider>
        </HomeContextProvider>
      </LoadProvider>
    </ToastProvider>
  </React.StrictMode>
);
