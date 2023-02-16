import { Box, Container, Heading } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      bgGradient="linear(to-l, blue.500, blue.300)"
      pos="absolute"
      w="100%"
      p="2"
      boxShadow="lg"
      color="white"
      textAlign="center"
    >
      <Heading>TWEET GENERATOR</Heading>
    </Box>
  );
}

export default Header;
