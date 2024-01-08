import "./App.css";

import "@radix-ui/themes/styles.css";
import { Flex } from "@radix-ui/themes";

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
