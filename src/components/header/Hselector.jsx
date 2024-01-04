import { Select } from "@radix-ui/themes";

export default function Hselector() {
  return (
    <Select.Root>
      <Select.Trigger placeholder="User 1" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Personal Account</Select.Label>
          <Select.Item value="user1">User 1</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Teams</Select.Label>
          <Select.Item value="teamAlias1">Team 1</Select.Item>
          <Select.Item value="teamAlias2">Team 2</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}
