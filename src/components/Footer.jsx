import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import LinkedInIcon from "../assets/icons/linkedin.png";
import TwitterIcon from "../assets/icons/twitter.png";
import InstaIcon from "../assets/icons/insta.png";
import GithubIcon from "../assets/icons/github-icon.png";

const Footer = () => {
  return (
    <Stack direction="row" gap="1410px" mx="auto" mt="33px" width="1600px">
      <Typography color="#2563EB">Scophee</Typography>
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
