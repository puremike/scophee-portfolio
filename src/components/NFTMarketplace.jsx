import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import NFTImage from "../assets/images/nftmarket.png";
import GithubIcon from "../assets/icons/github-icon.png";
import GotoIcon from "../assets/icons/go-to.png";

import "./portfolio.scss";

const NFTMarketplace = () => {
  return (
    <Box className="other-portfolio">
      <Stack direction="column" gap="23px">
        <Stack direction="row" gap="197px" alignItems="center">
          <Typography
            fontFamily="source code pro"
            fontSize="36px"
            fontWeight="bold"
          >
            NFT Marketplace
          </Typography>
        </Stack>
        <Stack>
          <img src={NFTImage} alt="NFT Portfolio" width="500px" height="372" />
        </Stack>
        <Stack direction="row" gap="149px">
          <Stack direction="row" gap="20px">
            <Typography
              fontWeight="bold"
              fontSize="15px"
              fontFamily="open sans"
            >
              HTML
            </Typography>
            <Typography
              fontWeight="bold"
              fontSize="15px"
              fontFamily="open sans"
            >
              Material UI
            </Typography>
            <Typography
              fontWeight="bold"
              fontSize="15px"
              fontFamily="open sans"
            >
              TypeScript
            </Typography>
            <Typography
              fontWeight="bold"
              fontSize="15px"
              fontFamily="open sans"
            >
              ReactJs
            </Typography>
          </Stack>
          <Stack direction="row" gap="20px">
            <img src={GithubIcon} alt="github-icon" height="23px" />
            <img src={GotoIcon} alt="icon" height="23px" />
          </Stack>
        </Stack>
        <Stack>
          <Typography fontSize="16px" fontFamily="source sans pro">
            Digital agency is a landing page built with the latest version of
            ReactJS using <br />
            best practices.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NFTMarketplace;
