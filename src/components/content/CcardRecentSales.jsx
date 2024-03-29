import { Text, Box, Card, Flex } from "@radix-ui/themes";
import CtableProfiles from "./CtableProfiles";

//Nested Component: CtableProfiles
export default function CcardRecentSales() {
  return (
    <Card size="2" style={{ width: 535, height: 550 }}>
      <Flex direction="column">
        <Box>
          <Flex direction="column" justify="between">
            <Box pt="2" pb="1">
              <Text size="3" weight="bold">
                Recent Sales
              </Text>
            </Box>
            <Box>
              <Text size="3">You made 265 sales this month</Text>
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
