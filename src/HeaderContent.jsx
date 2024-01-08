import { Flex, Text, Button, Tabs, Box } from "@radix-ui/themes";
import Hselector from "./components/header/Hselector";
import Havatar from "./components/header/Havatar";
import HnavLinks from "./components/header/HnavLinks";
import CtextField from "./components/header/CtextField";

export default function HeaderContent() {
  return (
    <Box style={{ borderBottom: "solid 1px black" }}>
      <Flex direction="row" justify="between" align="center">
        <Flex align="center">
          <Box p="4">
            <Hselector />
          </Box>
          <Box p="2" pl="4">
            <HnavLinks />
          </Box>
        </Flex>

        <Flex align="center">
          <Box pr="3">
            <CtextField />
          </Box>
          <Box p="2">
            <Havatar />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
