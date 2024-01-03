import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@radix-ui/themes/styles.css";
import { Flex, Text, Button } from "@radix-ui/themes";
import DropdownTest from "./components/DropdownTest.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>

        <Button>Let's go</Button>
      </Flex>
    </div>
  );
}

export default App;
