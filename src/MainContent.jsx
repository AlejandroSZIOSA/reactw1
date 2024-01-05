import { Flex, Text, Button, Tabs, Box } from "@radix-ui/themes";
import Ctabs from "./components/content/Ctabs";
import CcardRevenue from "./components/content/CcardRevenue";

export default function MainContent() {
  const styles = {
    container: {
      background: "orange",
    },
    tabContainer: {
      background: "grey",
      border: "solid 1px",
      borderRadius: "10px",
      marginLeft: "40px",
    },
  };
  return (
    <Box style={styles.container}>
      <Flex direction="column">
        <Flex direction="row" justify="between" align="center">
          <Box p="6">
            <Text align="left" size="8" weight="bold">
              Dashboard
            </Text>
          </Box>
          <Box px="6">
            <Button> Download</Button>
          </Box>
        </Flex>

        <Flex direction="column">
          <Box
            style={styles.tabContainer}
            width="min-content"
            height="min-content"
          >
            <Ctabs />
          </Box>
          <Box py="4" px="8">
            <CcardRevenue />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
