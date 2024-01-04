import { Flex, Text, Button, Tabs, Box } from "@radix-ui/themes";
import Ctabs from "./components/content/Ctabs";
import Hselector from "./components/header/Hselector";

export default function HeaderContent() {
  return (
    <Flex direction="row">
      <Box width="30" height="10">
        <Hselector />
      </Box>
      <Box>
        <Ctabs />
      </Box>
    </Flex>
  );
}
