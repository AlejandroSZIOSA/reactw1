import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme, Box, Container } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Box
      style={{
        background: "var(--gray-a2)",
        border: "solid 1px",
        borderRadius: 10,
      }}
    >
      <Container size="1">
        <Theme>
          <App />
        </Theme>
      </Container>
    </Box>
  </React.StrictMode>
);
