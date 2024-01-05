import { Flex, Text, Button, Tabs, Box } from "@radix-ui/themes";
import Ctabs from "./components/content/Ctabs";
import Hselector from "./components/header/Hselector";
import Havatar from "./components/header/Havatar";

export default function HeaderContent() {
  const styles = {
    container: {
      background: "yellow",
    },
  };
  return (
    <Box style={styles.container}>
      <Flex direction="row" justify="between">
        <Flex direction="row">
          <Box p="2">
            <Hselector />
          </Box>
          <Box p="2">
            <Ctabs />
          </Box>
        </Flex>
        <Box p="2">
          <Havatar />
        </Box>
      </Flex>
    </Box>
  );
}
