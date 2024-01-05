import { Text, Box, Card, Flex } from "@radix-ui/themes";

export default function CcardSubcriptions() {
  return (
    <Card size="3" style={{ width: 300 }}>
      <Flex direction="column">
        <Box>
          <Flex direction="row" justify="between">
            <Box pt="2" pb="1">
              <Text size="2">Subscriptions</Text>
            </Box>
            <Box pt="2" pb="1">
              <Text size="2">$</Text>
            </Box>
          </Flex>
        </Box>

        <Box pl="1">
          <Text size="8" weight="bold">
            +2350
          </Text>
        </Box>

        <Box pl="1">
          <Text size="1">+180.1% from last month</Text>
        </Box>
      </Flex>
    </Card>
  );
}
