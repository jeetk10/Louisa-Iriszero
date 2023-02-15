import React, { useState, useEffect } from "react";

import getNews from "./api";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setData(await getNews());
    })();
  }, []);

  return <div>App</div>;
}

export default App;
