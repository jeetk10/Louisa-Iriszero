import React from "react";
import { Box } from "@chakra-ui/react";
import { GridLayout, Header } from "../Components";

function Home() {
  return (
    <Box w="100%" position="absolute" backgroundColor={"whiteAlpha.900"}>
      <Header />

      <GridLayout />
    </Box>
  );
}

export default Home;
