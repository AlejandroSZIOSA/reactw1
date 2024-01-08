import { Text, Box, Card, Flex, Avatar } from "@radix-ui/themes";

export default function CcardUserInfo(props) {
  return (
    <Card size="1" style={{ maxWidth: 230 }}>
      <Flex gap="3" align="center">
        <Avatar size="3" src={props.srcProp} radius="full" fallback="T" />
        <Box>
          <Text as="div" size="2" weight="bold">
            {props.nameProp}
          </Text>
          <Text as="div" size="2" color="gray">
            {props.ePostProp}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
