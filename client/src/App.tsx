import React, { useState, useEffect } from "react";

import getNews from "./api";
import GridLayout from "./Components/GridLayout";
import Header from "./Components/Header";

import {
  Center,
  Box,
  Container,
  Heading,
  AbsoluteCenter,
} from "@chakra-ui/react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setData(await getNews());
    })();
  }, []);

  return (
    <Box w="100%" position="absolute">
      {/* <Header /> */}
      <GridLayout />
    </Box>
  );
}

export default App;
