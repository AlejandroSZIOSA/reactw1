import { Flex, Text, Button, Tabs, Box } from "@radix-ui/themes";

export default function CpartOne() {
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
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <Text> Dashboard</Text>
      </div>
      <div>
        <Button> Download</Button>
      </div>
      <Tabs.Root defaultValue="account">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>

        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="account">
            <Text size="2">Make changes to your account.</Text>
          </Tabs.Content>

          <Tabs.Content value="documents">
            <Text size="2">Access and update your documents.</Text>
          </Tabs.Content>

          <Tabs.Content value="settings">
            <Text size="2">
              Edit your profile or update contact information.
            </Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </div>
  );
}
