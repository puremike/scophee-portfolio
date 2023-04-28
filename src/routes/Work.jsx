import { Box, Typography } from "@mui/material";
import "./work.scss";

const Work = () => {
  return (
    <Box sx={{ mt: "196px", ml: "410px", mb: "123px" }}>
      <Typography
        className="latest-work"
        fontFamily="Source Code Pro"
        fontSize="48px"
        mb="42px"
      >
        My latest <span>work</span>
      </Typography>
    </Box>
  );
};

export default Work;
