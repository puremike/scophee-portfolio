import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import GithubIcon from "../assets/icons/github-icon.png";
import LightDarkIcon from "../assets/icons/light-dark-icon.png";

import "./asidemenu.css";

const AsideMenu = ({ display }) => {
  return (
    <Box className="aside-menu" display={display}>
      <Stack direction="column" alignItems="center" display="block">
        <Stack gap="10px" className="aside-a-menu">
          <Link to="/" className="aside-a-menu">
            Home
          </Link>
          <a href="#about" className="aside-a-menu">
            About
          </a>
          <a href="#work" className="aside-a-menu">
            Work
          </a>
        </Stack>

        <Stack direction="row" mt="20px" gap="25px">
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
        </Stack>
      </Stack>
    </Box>
  );
};

export default AsideMenu;
