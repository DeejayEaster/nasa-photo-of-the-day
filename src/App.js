import React, { useState, useEffect } from "react";
import "./App.css";
import MediaCard from "./components/MediaCard";
import InfoCard from "./components/InfoCard";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        setData(res.data);
      });
  }, []);

  if (!data) return <h3>Loading...</h3>;
  return (
    <>
      <MediaCard info={data} />
      <InfoCard info={data} />
    </>
  );
}

export default App;
