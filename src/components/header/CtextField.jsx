import { TextField, Text } from "@radix-ui/themes";

export default function CtextField() {
  return (
    <TextField.Root size="3" style={{ width: "340px" }}>
      <TextField.Input placeholder="Search…" />
    </TextField.Root>
  );
}
