import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography, Button } from "@mui/material";
import GithubIcon from "../assets/icons/github-icon.png";
import LightDarkIcon from "../assets/icons/light-dark-icon.png";

import "./navbar.scss";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      gap="1200px"
      mt="17.5px"
      mb="17.5px"
      ml="430px"
      mr="140px"
      alignItems="center"
    >
      <Link to="/">
        <Typography fontSize="25px" color="#111827" fontWeight="bold">
          Scophee
        </Typography>
      </Link>

      <Stack direction="row" gap="40px" alignItems="center">
        <Link to="/">
          <Typography fontSize="20px" color="#111827">
            Home
          </Typography>
        </Link>
        <Link to="#about">
          <Typography fontSize="20px" color="#111827">
            About
          </Typography>
        </Link>
        <Link to="#work">
          <Typography fontSize="20px" color="#111827">
            Work
          </Typography>
        </Link>
        <Link to="https://github.com/puremike">
          <img
            src={GithubIcon}
            alt="github-icon"
            style={{ width: "25px", height: "25px" }}
          />
        </Link>

        <img
          src={LightDarkIcon}
          alt="light-dark-icon"
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        />

        <Link to="#contact">
          <Button>
            <Typography
              className="contact-btn"
              fontSize="15px"
              textTransform="capitalize"
            >
              Contact Me →
            </Typography>
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default NavBar;
