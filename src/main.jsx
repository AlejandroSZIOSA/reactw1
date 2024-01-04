import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme, Card } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Card size="2" style={{ maxWidth: 1300 }}>
      <Theme>
        <App />
      </Theme>
    </Card>
  </React.StrictMode>
);
