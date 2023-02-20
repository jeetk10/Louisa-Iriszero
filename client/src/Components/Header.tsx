import { Center, Container, Text, Heading } from "@chakra-ui/react";

function Header() {
  return (
    <Center
      bgGradient="linear(to-l, blue.500, blue.200)"
      // pos="absolute"
      display="block"
      w="100%"
      h="5.5em"
      p="2"
      boxShadow="lg"
      color="white"
      textAlign="center"
    >
      <Heading fontFamily="serif">TWEET GENERATOR</Heading>

      <Text fontFamily="Courier">IrisZero</Text>
    </Center>
  );
}

export default Header;
