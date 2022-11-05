import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ToastProvider from "./context/toast/toast";
import LoadProvider from "./context/nameUser";
import CommentsProvider from "./context/comments";
import { HomeContextProvider } from "./context/home/homeContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider>
      <LoadProvider>
        <CommentsProvider>
          <HomeContextProvider>
              <App />
          </HomeContextProvider>
        </CommentsProvider>
      </LoadProvider>
    </ToastProvider>
  </React.StrictMode>
);
