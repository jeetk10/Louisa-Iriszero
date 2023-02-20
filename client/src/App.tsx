import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

import getNews from "./api";
import getTweets from "./api";

function App() {
  const [data, setData] = useState([]);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    (async () => {
      setData(await getNews());
      setTweets(await getTweets());
    })();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
