import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import SkillsComp from "../components/SkillsComp";
import Experience from "../components/Experience";

const About = () => {
  return (
    <Box id="about">
      <Stack>
        <Typography
          color="#111827"
          fontSize={{ xs: "40px", sm: "60px" }}
          fontWeight="bold"
          lineHeight="70px"
          fontFamily="source code pro"
          sx={{ mt: "92px", mx: "auto", textAlign: "center" }}
        >
          Hello, I'm <br /> Michael Egbinola
        </Typography>
        <Typography
          fontSize={{ xs: "25px", sm: "30px" }}
          fontWeight="bold"
          fontFamily="open sans"
          color="#898989"
          letterSpacing="3px"
          sx={{
            mt: "24px",
            mb: "24px",
            mx: "auto",
          }}
          textAlign={{ xs: "left", sm: "center" }}
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
