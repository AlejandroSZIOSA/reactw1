import { Box, Flex } from "@radix-ui/themes";

export default function HnavLinks() {
  return (
    <Box
      style={{
        width: 350,
      }}
    >
      <Flex direction="row" align="center" justify="between">
        <Box>
          <a href="#">Overview</a>
        </Box>
        <Box>
          <a href="#">Costumers</a>
        </Box>
        <Box>
          <a href="#">Products</a>
        </Box>
        <Box>
          <a href="#">Settings</a>
        </Box>
      </Flex>
    </Box>
  );
}
