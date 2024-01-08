import { Card, Flex, Box, Text } from "@radix-ui/themes";
import Overview from "./Overview";

//Nested Component: Overview.jsx
export default function CcardChart() {
  return (
    <Card size="2" style={{ width: 650, height: 550 }}>
      <Flex direction="column" justify="center" align="left">
        <Box pt="3" pb="5">
          <Text size="5" weight="medium">
            Overview
          </Text>
        </Box>
        <Box>
          <Overview />
        </Box>
      </Flex>
    </Card>
  );
}
