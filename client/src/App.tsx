import React, { useState, useEffect } from "react";

import getNews from "./api";
import GridLayout from "./Components/GridLayout";
import Header from "./Components/Header";
import getTweets from "./api";

import {
  Center,
  Box,
  Container,
  Heading,
  AbsoluteCenter,
  Button,
} from "@chakra-ui/react";
import { GrLinkNext,GrLinkPrevious } from "react-icons/gr";

function App() {
  const [data, setData] = useState([]);
  const [tweets, setTweets] =useState([]);

  useEffect(() => {
    (async () => {
      setData(await getNews());
      setTweets(await getTweets());
    })();
  }, []);

  return (
    <>
    <Box w="100%" position="absolute" backgroundColor={"whiteAlpha.900"}> 
      <Header />
      
      <GridLayout/>
      
    </Box>
    </>
  );
}

export default App;
