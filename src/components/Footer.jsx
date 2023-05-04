import React from "react";
import { Stack, Typography } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";

import LinkedInIcon from "../assets/icons/linkedin.png";
import TwitterIcon from "../assets/icons/twitter.png";
import InstaIcon from "../assets/icons/insta.png";
import GithubIcon from "../assets/icons/github-icon.png";

const Footer = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      m="33px 0 20px 0"
      p="0 20px"
    >
      <Typography color="#2563EB" fontFamily="Piedra">
        <Link to="#navbar" smooth>
          Scophee
        </Link>
      </Typography>
      <Stack direction="row" gap="18px">
        <Link to="https://www.linkedin.com/in/michaelegbinola/">
          <img src={LinkedInIcon} alt="linkedin-icon" />
        </Link>
        <Link to="https://twitter.com/egbinolamichael">
          <img src={TwitterIcon} alt="twitter-icon" />
        </Link>
        <Link to="#">
          <img src={InstaIcon} alt="instagram-icon" />
        </Link>
        <Link to="https://github.com/puremike">
          <img src={GithubIcon} alt="github-icon" />
        </Link>
      </Stack>
    </Stack>
  );
};

export default Footer;
