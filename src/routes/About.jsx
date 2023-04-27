import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import SkillsComp from "../components/SkillsComp";
import Experience from "../components/Experience";

const About = () => {
  return (
    <Box>
      <Stack>
        <Typography
          color="#111827"
          fontSize="60px"
          fontWeight="bold"
          lineHeight="70px"
          fontFamily="source code pro"
          sx={{ mt: "92px", mx: "auto", textAlign: "center" }}
        >
          Hello, I'm <br /> Michael Egbinola
        </Typography>
        <Typography
          fontSize="30px"
          fontWeight="bold"
          fontFamily="open sans"
          color="#898989"
          letterSpacing="3px"
          sx={{
            textAlign: "justify",
            mt: "24px",
            mb: "24px",
            mx: "auto",
          }}
        >
          I am a UI Engineer at Google, where I design and develop user-
          <br />
          centered interfaces for cutting-edge technology products. I work
          <br /> with a talented team to create visually appealing and intuitive
          <br />
          designs that enhance user experience. I am passionate about
          <br />
          using technology to create beautiful and functional designs that{" "}
          <br /> solve real-world problems.
        </Typography>
      </Stack>
      <SkillsComp />
      <Experience />
    </Box>
  );
};

export default About;
