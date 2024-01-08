import { Table, Text } from "@radix-ui/themes";
import CcardUserInfo from "../reusable/CcardUserInfo";

export default function CtableProfiles() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>User</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Revenue</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row align="center">
          <Table.RowHeaderCell>
            <CcardUserInfo
              nameProp="Gato"
              ePostProp="olivia.martin@email.com"
              srcProp="https://ui.shadcn.com/avatars/01.png"
            />
          </Table.RowHeaderCell>

          <Table.Cell>
            <Text size="3" weight="medium">
              +$1.990.899
            </Text>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>

          <Table.Cell>Admin</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>

          <Table.Cell>Developer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
