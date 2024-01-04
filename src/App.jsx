import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import "@radix-ui/themes/styles.css";
import { Flex, Text, Button } from "@radix-ui/themes";

import DropdownTest from "./components/header/DropdownTest.jsx";
import CpartOne from "./components/content/CpartOne.jsx";

function App() {
  return (
    <Flex direction="column">
      <CpartOne />
    </Flex>
  );
}

export default App;
