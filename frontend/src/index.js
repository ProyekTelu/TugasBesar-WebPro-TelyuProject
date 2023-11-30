import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import Modal from "react-modal";
import { ThemeProvider } from "@material-tailwind/react";

const container = document.getElementById("root");
Modal.setAppElement(container);
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);
