import React from "react";
import { Box, Typography } from "@mui/material";

const GetInTouch = () => {
  return (
    <Box mb="92px" justifyItems="center" width="100%" textAlign="center">
      <Typography
        fontWeight="bold"
        fontFamily="source code pro"
        fontSize={{ xs: "30px", md: "50px", lg: "60px" }}
        backgroundColor="#E3E8ED"
        padding="30px"
        borderRadius="20px"
        textAlign="center"
      >
        Ready to start <br /> your next project? <br />
        <span className="get-in-touch">Get in touch with me!</span>
      </Typography>
    </Box>
  );
};

export default GetInTouch;
