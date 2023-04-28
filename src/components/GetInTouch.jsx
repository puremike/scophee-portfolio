import React from "react";
import { Box, Typography } from "@mui/material";

const GetInTouch = () => {
  return (
    <Box mx="auto" mb="92px">
      <Typography
        fontWeight="bold"
        fontFamily="source code pro"
        fontSize="60px"
        width="1500px"
        backgroundColor="#E3E8ED"
        padding="50px"
        borderRadius="20px"
        textAlign="center"
        mx="auto"
      >
        Ready to start <br /> your next project? <br />{" "}
        <span className="get-in-touch">Get in touch with me!</span>
      </Typography>
    </Box>
  );
};

export default GetInTouch;
