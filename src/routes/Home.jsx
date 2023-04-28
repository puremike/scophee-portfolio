import React from "react";
import { Box } from "@mui/material";
import About from "./About";
import Work from "./Work";
import GetInTouch from "../components/GetInTouch";

const Home = () => {
  return (
    <Box>
      <About />
      <Work />
      <GetInTouch />
    </Box>
  );
};

export default Home;
