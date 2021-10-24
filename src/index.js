import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
  // <React.StrictMode>
  <SpeechProvider appId="9073602e-6dc0-47b6-8038-df5dee50c1f1" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
