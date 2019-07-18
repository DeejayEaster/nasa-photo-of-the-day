import React, { useState, useEffect } from "react";
import "./App.css";
import MediaCard from "./components/MediaCard";
// import InfoCard from "./components/InfoCard";
import axios from "axios";
import { Header, Container } from "semantic-ui-react";

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
      <Container id="container">
        <Header size="huge">NASA's Pic of the Day</Header>
        <MediaCard info={data} />
        {/* <InfoCard info={data} /> */}
      </Container>
    </>
  );
}

export default App;
