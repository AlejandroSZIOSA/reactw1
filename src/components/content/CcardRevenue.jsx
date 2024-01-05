import { Text, Box, Card, Avatar, Flex } from "@radix-ui/themes";

export default function CcardRevenue() {
  return (
    <Card style={{ maxWidth: 240 }}>
      <Flex direction="column">
        <Box>
          <Flex direction="row" justify="between">
            <Box pt="2" pb="1">
              <Text as="div" size="2">
                Total Revenue
              </Text>
            </Box>
            <Box pt="2" pb="1">
              <Text as="div" size="2">
                $
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box pl="1">
          <Text size="8" weight="bold">
            $45,890,90
          </Text>
        </Box>

        <Box pl="1">
          <Text size="1">+20.1% from last month</Text>
        </Box>
      </Flex>
    </Card>
  );
}
