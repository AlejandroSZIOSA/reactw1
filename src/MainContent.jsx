import { Flex, Text, Button, Tabs, Box } from "@radix-ui/themes";
import Ctabs from "./components/content/Ctabs";

export default function MainContent() {
  const styles = {
    container: {
      background: "orange",
    },
    tabContainer: {
      background: "grey",
      border: "solid 2px",
      borderRadius: "10px",
    },
  };
  return (
    <Box style={styles.container}>
      <Flex direction="column">
        <Flex direction="row" justify="between" align="center">
          <Box p="6">
            <Text align="left" size="8">
              Dashboard
            </Text>
          </Box>
          <Box px="6">
            <Button> Download</Button>
          </Box>
        </Flex>

        <Flex direction="column">
          <Box
            width="min-content"
            height="min-content"
            px="2"
            style={styles.tabContainer}
          >
            <Ctabs />
          </Box>
          <Box>
            <Text>Card</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
