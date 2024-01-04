import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import "@radix-ui/themes/styles.css";
import { Flex, Text, Button } from "@radix-ui/themes";

import MainContent from "./MainContent.jsx";
import HeaderContent from "./HeaderContent.jsx";

function App() {
  return (
    <Flex direction="column">
      <HeaderContent />
      <MainContent />
    </Flex>
  );
}

export default App;
