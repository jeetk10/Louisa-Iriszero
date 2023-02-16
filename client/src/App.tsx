import { flexbox, Grid } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

import getNews from "./api";
import GridLayout from "./Components/GridLayout";
import Header from "./Components/Header";

import { Center, Box, Container, Heading } from "@chakra-ui/react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setData(await getNews());
    })();
  }, []);

  return (
    <Box display="flex">
      <Header />
    </Box>
  );
}

export default App;
