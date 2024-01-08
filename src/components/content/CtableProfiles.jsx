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
              nameProp="Olivia Martin"
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

        <Table.Row align="center">
          <Table.RowHeaderCell>
            <CcardUserInfo
              nameProp="Jackson Lee"
              ePostProp="jackson.lee@email.com"
              srcProp="https://ui.shadcn.com/avatars/02.png"
            />
          </Table.RowHeaderCell>

          <Table.Cell>
            <Text size="3" weight="medium">
              +$39.899
            </Text>
          </Table.Cell>
        </Table.Row>

        <Table.Row align="center">
          <Table.RowHeaderCell>
            <CcardUserInfo
              nameProp="Isabella Nguyen"
              ePostProp="isabella.nguyen@email.com"
              srcProp="https://ui.shadcn.com/avatars/03.png"
            />
          </Table.RowHeaderCell>

          <Table.Cell>
            <Text size="3" weight="medium">
              +$299.00
            </Text>
          </Table.Cell>
        </Table.Row>

        <Table.Row align="center">
          <Table.RowHeaderCell>
            <CcardUserInfo
              nameProp="William Kim"
              ePostProp="will@email.com"
              srcProp="https://ui.shadcn.com/avatars/04.png"
            />
          </Table.RowHeaderCell>

          <Table.Cell>
            <Text size="3" weight="medium">
              +$99.00
            </Text>
          </Table.Cell>
        </Table.Row>

        <Table.Row align="center">
          <Table.RowHeaderCell>
            <CcardUserInfo
              nameProp="Sofia Davis"
              ePostProp="sofia.davis@email.com"
              srcProp="https://ui.shadcn.com/avatars/05.png"
            />
          </Table.RowHeaderCell>

          <Table.Cell>
            <Text size="3" weight="medium">
              +$39.00
            </Text>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
