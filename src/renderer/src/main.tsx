import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";

import "./index.css";

// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

loader.config({ monaco });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
