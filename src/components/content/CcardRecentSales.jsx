import { Text, Box, Card, Flex } from "@radix-ui/themes";
import CtableProfiles from "./CtableProfiles";

export default function CcardRecentSales() {
  return (
    <Card size="2" style={{ width: 535, height: 445 }}>
      <Flex direction="column">
        <Box>
          <Flex direction="column" justify="between">
            <Box pt="2" pb="1">
              <Text size="2">Recent Sales</Text>
            </Box>
            <Box>
              <Text size="2">You made 265 sales this month</Text>
            </Box>
          </Flex>
        </Box>
        <Box>
          <CtableProfiles />
        </Box>
      </Flex>
    </Card>
  );
}

/* TODO:  tables + card profile*/
