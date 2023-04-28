import React from "react";
import { Box } from "@mui/material";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Home = () => {
  return (
    <Box>
      <About />
      <Work />
      <Contact />
    </Box>
  );
};

export default Home;
