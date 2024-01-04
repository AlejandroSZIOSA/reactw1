import { Flex, Text, Button } from "@radix-ui/themes";

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
        <text> Dashboard</text>
      </div>
      <div>
        <Button> Download</Button>
      </div>
    </div>
  );
}
