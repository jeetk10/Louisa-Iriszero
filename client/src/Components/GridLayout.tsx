import { Grid, GridItem } from "@chakra-ui/react";
import { Center, Box, Container } from "@chakra-ui/react";

const GridLayout = () => {
  return (
    <Center bgColor="cyan.300" mt="0.5em" w="100%">
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="green.500" />
        <GridItem w="100%" h="10" bg="green.500" />
        <GridItem w="100%" h="10" bg="green.500" />
        <GridItem w="100%" h="10" bg="green.500" />
        <GridItem w="100%" h="10" bg="green.500" />
      </Grid>
    </Center>
  );
};

export default GridLayout;
