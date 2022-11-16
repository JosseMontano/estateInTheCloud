import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ToastProvider from "./context/toast/toast";
import LoadProvider from "./context/nameUser";
import { HomeContextProvider } from "./context/home/homeContext";
import { NavbarContextProvider } from "./context/navbarContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider>
      <LoadProvider>
        <HomeContextProvider>
          <NavbarContextProvider>
            <App />
          </NavbarContextProvider>
        </HomeContextProvider>
      </LoadProvider>
    </ToastProvider>
  </React.StrictMode>
);
