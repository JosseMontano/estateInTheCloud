import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ToastProvider from "./context/toast/toast";
import LoadProvider from "./context/nameUser";
import { HomeContextProvider } from "./context/home/homeContext";
import { LanguageContextProvider } from "./context/languageContext";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();