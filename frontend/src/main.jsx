import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>

      <App />

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "var(--radius-xl)",
            background: "var(--color-surface)",
            color: "var(--color-inverse)",
            fontWeight: "500",
          },
          success: {
            iconTheme: {
              primary: "var(--color-success)",
              secondary: "var(--color-surface)",
            },
          },
          error: {
            iconTheme: {
              primary: "var(--color-danger)",
              secondary: "var(--color-surface)",
            },
          },
        }}
      />

    </BrowserRouter>
  </React.StrictMode>
);
