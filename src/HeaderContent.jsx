import { Flex, Text, Button, Tabs, Box } from "@radix-ui/themes";
import Ctabs from "./components/content/Ctabs";

export default function HeaderContent() {
  return (
    <Flex direction="row">
      <Box height="10">
        <Text>Dropdown here</Text>
      </Box>
      <Box>
        <Ctabs />
      </Box>
    </Flex>
  );
}
