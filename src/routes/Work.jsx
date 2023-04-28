import { Box, Typography, Stack } from "@mui/material";
import "./work.scss";
import GlibPortfolio from "../components/GlibPortfolio";
import NFTMarketplace from "../components/NFTMarketplace";
import FintechLanding from "../components/FintechLanding";
import DigitalAgency from "../components/DigitalAgency";

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
      <div className="portfolio-grid">
        <GlibPortfolio className="one" />
        <NFTMarketplace className="two" />
        <FintechLanding className="three" />
        <DigitalAgency className="four" />
      </div>
    </Box>
  );
};

export default Work;
