import { Tabs } from "@radix-ui/themes";

export default function Ctabs() {
  return (
    <Tabs.Root defaultValue="overview">
      <Tabs.List size="2">
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="costumers">Costumers</Tabs.Trigger>
        <Tabs.Trigger value="products">Products</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}
