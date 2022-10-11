import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ToastProvider from "./context/toast/toast";
import LoadProvider from "./context/nameUser";
import CommentsProvider from "./context/comments";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider>
      <LoadProvider>
        <CommentsProvider>
          <App />
        </CommentsProvider>
      </LoadProvider>
    </ToastProvider>
  </React.StrictMode>
);
