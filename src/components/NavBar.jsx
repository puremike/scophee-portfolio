import React, { useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/icons/logo.svg";
import GithubIcon from "../assets/icons/github-icon.png";
import LightDarkIcon from "../assets/icons/light-dark-icon.png";
import MenuIcon from "../assets/icons/menu.png";

import { DisplayContexts } from "../context/DisplayContexts";

import "./navbar.scss";
import AsideMenu from "./AsideMenu";

const NavBar = () => {
  const { aside, setAside } = useContext(DisplayContexts);
  return (
    <Box id="navbar">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        p={{ xs: "1rem 1rem", lg: "2rem 14rem" }}
      >
        <Stack direction="row" alignItems="center" gap="1rem">
          <Stack display={{ md: "none" }}>
            <img
              onClick={() => {
                aside === "none" ? setAside("block") : setAside("none");
              }}
              src={MenuIcon}
              alt="menu-icon"
              className="menu-btn"
            />
          </Stack>

          <img src={Logo} alt="logo" className="logo-btn" />
          <Link to="/">
            <Typography fontSize="25px" color="#111827" fontWeight="bold">
              Scophee
            </Typography>
          </Link>
        </Stack>

        <Stack direction="row" alignItems="center" gap="25px">
          <Stack
            direction="row"
            gap="25px"
            alignItems="center"
            display={{ xs: "none", md: "flex" }}
          >
            <Link to="/" className="navbar-a">
              Home
            </Link>
            <Link to="#about" smooth className="navbar-a">
              About
            </Link>
            <Link to="#work" smooth className="navbar-a">
              Work
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
          </Stack>

          <Link to="#contact" smooth>
            <Typography
              className="contact-btn"
              fontSize="15px"
              textTransform="capitalize"
            >
              Contact
            </Typography>
          </Link>
        </Stack>
      </Stack>
      <AsideMenu display={aside} />
    </Box>
  );
};

export default NavBar;
