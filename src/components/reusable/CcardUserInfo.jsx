import { Text, Box, Card, Flex, Avatar } from "@radix-ui/themes";

//Nested Component
export default function CcardUserInfo(props) {
  return (
    <Card size="1" style={{ maxWidth: 220 }}>
      <Flex gap="2" align="center">
        <Avatar size="2" src={props.srcProp} radius="full" fallback="T" />
        <Box>
          <Text as="div" size="1" weight="bold">
            {props.nameProp}
          </Text>
          <Text as="div" size="1" color="gray">
            {props.ePostProp}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
