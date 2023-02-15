import React, { useState, useEffect } from "react";

import getNews from "./api";
import Header from "./Components/Header";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setData(await getNews());
    })();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
