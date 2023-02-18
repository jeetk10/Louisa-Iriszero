import { Center, Container, Heading } from "@chakra-ui/react";

function Header() {
  return (
    <Center
      bgGradient="linear(to-l, blue.500, blue.200)"
      // pos="absolute"
      w="100%"
      p="2"
      boxShadow="lg"
      color="white"
      textAlign="center"
    >
      <Heading fontFamily="serif">TWEET GENERATOR</Heading>
    </Center>
  );
}

export default Header;
