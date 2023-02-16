import { Grid, GridItem } from "@chakra-ui/react";
import { Box, Container } from "@chakra-ui/react";

const GridLayout = () => {
  return (
    <Box pos="absolute" bgColor="cyan.300" mt="20" w="100%">
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="green.500" />
        <GridItem w="100%" h="10" bg="green.500" />
        <GridItem w="100%" h="10" bg="green.500" />
        <GridItem w="100%" h="10" bg="green.500" />
        <GridItem w="100%" h="10" bg="green.500" />
      </Grid>
    </Box>
  );
};

export default GridLayout;
