import { Box } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      bg="#0a64c4"
      fontFamily="monospace"
      bgGradient="linear(to-l, blue.500, blue.300)"
      boxShadow="lg"
      position="absolute"
      w="100%"
      p={2}
      color="white"
      fontSize={35}
      textAlign="center"
    >
      TWEET GENERATOR
    </Box>
  );
}

export default Header;
