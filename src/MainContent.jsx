import { Flex, Text, Button, Tabs, Box } from "@radix-ui/themes";
import Ctabs from "./components/content/Ctabs";
import CcardRevenue from "./components/content/CcardRevenue";
import CcardSubcriptions from "./components/content/CcardSubcriptions";
import CcardSales from "./components/content/CcardSales";
import CcardActive from "./components/content/CcardActive";
import CcardRecentSales from "./components/content/CcardRecentSales";
import Overview from "./components/content/Overview";
import CcardChart from "./components/content/CcardChart";

export default function MainContent() {
  const styles = {
    /* container: {
      background: "orange",
    }, */
    tabContainer: {
      background: "white",
      border: "solid 1px",
      borderRadius: "10px",
      marginLeft: "40px",
      backgroundColor: " #EAEAEA",
    },
  };
  return (
    <Box>
      <Flex direction="column">
        <Flex direction="row" justify="between" align="center">
          <Box p="6">
            <Text align="left" size="8" weight="bold">
              Dashboard
            </Text>
          </Box>
          <Box px="6">
            <Button size="3" style={{ background: "black" }}>
              Download
            </Button>
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

          <Flex direction="row" gap="4" justify="center">
            <Box py="4">
              <CcardRevenue />
            </Box>
            <Box py="4">
              <CcardSubcriptions />
            </Box>
            <Box py="4">
              <CcardSales />
            </Box>
            <Box py="4">
              <CcardActive />
            </Box>
          </Flex>

          <Flex direction="row" justify="center" gap="4">
            <Box>
              <CcardChart />
            </Box>
            <Box mb="4">
              <CcardRecentSales />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
