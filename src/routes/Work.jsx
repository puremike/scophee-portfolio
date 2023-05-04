import { Box, Typography, Grid } from "@mui/material";
import "./work.scss";
import GlibPortfolio from "../components/GlibPortfolio";
import NFTMarketplace from "../components/NFTMarketplace";
import FintechLanding from "../components/FintechLanding";
import DigitalAgency from "../components/DigitalAgency";

const Work = () => {
  return (
    <Box
      id="work"
      sx={{ m: "130px 0", p: { xs: "1rem 1rem", lg: "2rem 14rem" } }}
    >
      <Typography
        className="latest-work"
        fontFamily="Source Code Pro"
        fontSize="48px"
        mb="42px"
      >
        My latest <span>work</span>
      </Typography>
      <Grid
        container
        direction="row"
        gap="50px"
        justifyContent="center"
        alignItems="center"
      >
        <GlibPortfolio className="one" />
        <NFTMarketplace className="two" />
        <FintechLanding className="three" />
        <DigitalAgency className="four" />
        <NFTMarketplace className="two" />
        <DigitalAgency className="four" />
      </Grid>
    </Box>
  );
};

export default Work;
