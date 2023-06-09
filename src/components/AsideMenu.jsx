import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Box, Stack } from "@mui/material";
import GithubIcon from "../assets/icons/github-icon.png";
import LightDarkIcon from "../assets/icons/light-dark-icon.png";

import "./asidemenu.css";

const AsideMenu = ({ display }) => {
  return (
    <Box display={{ md: "none" }}>
      <Stack
        className="aside-menu"
        direction="column"
        alignItems="center"
        display={display}
      >
        <Stack gap="10px" className="aside-a-menu">
          <Link to="/" className="aside-a-menu">
            Home
          </Link>
          <Link to="#about" smooth className="aside-a-menu">
            About
          </Link>
          <Link to="#work" smooth className="aside-a-menu">
            Work
          </Link>
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
