import { Text, Box, Card, Flex } from "@radix-ui/themes";

export default function CcardSales() {
  return (
    <Card size="2" style={{ width: 280 }}>
      <Flex direction="column">
        <Box>
          <Flex direction="row" justify="between">
            <Box pt="2" pb="1">
              <Text size="2">Sales</Text>
            </Box>
            <Box pt="2" pb="1">
              <Text size="2">$</Text>
            </Box>
          </Flex>
        </Box>

        <Box pl="1">
          <Text size="8" weight="bold">
            +12,890
          </Text>
        </Box>

        <Box pl="1">
          <Text size="1">+19% from last month</Text>
        </Box>
      </Flex>
    </Card>
  );
}
