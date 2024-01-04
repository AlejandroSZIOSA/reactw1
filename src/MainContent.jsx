import { Flex, Text, Button, Tabs, Box } from "@radix-ui/themes";

export default function MainContent() {
  const styles = {
    container: {
      flex: 1,
      flexDirection: "row",
    },

    textContainer: {
      fontSize: 20,
      fontWeight: "bold",
      backgroundColor: "red",
    },
  };
  return (
    <Flex direction="column">
      <Flex direction="row" justify="between">
        <Box display="inline-block" style={styles.textContainer}>
          <Text align="left"> Dashboard</Text>
        </Box>
        <Box>
          <Button> Download</Button>
        </Box>
      </Flex>
    </Flex>
  );
}
