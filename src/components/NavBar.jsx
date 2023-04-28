import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Box, Stack, Typography, Button } from "@mui/material";
import GithubIcon from "../assets/icons/github-icon.png";
import LightDarkIcon from "../assets/icons/light-dark-icon.png";

import "./navbar.scss";

//        xs: 400,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1440,
//      xxl: 1800

const NavBar = () => {
  return (
    <Box
    // maxWidth={{
    //   md: "760px",
    //   lg: "1200px",
    //   xl: "1440px",
    //   xxl: "1800px",
    // }}
    >
      <Stack
        direction="row"
        alignItems="center"
        gap={{
          md: "190px",
          lg: "400px",
          xl: "600px",
          xxl: "1000px",
        }}
        mt="17.5px"
        mb="17.5px"
        ml={{
          xs: "20px",
          sm: "20px",
          md: "100px",
          lg: "100px",
          xl: "300px",
          xxl: "450px",
        }}
        mr={{
          xs: "20px",
          sm: "20px",
          md: "100px",
          lg: "100px",
          xl: "200px",
          xxl: "300px",
        }}
      >
        <Link to="/">
          <Typography fontSize="25px" color="#111827" fontWeight="bold">
            Scophee
          </Typography>
        </Link>

        <Stack
          direction="row"
          gap={{
            xs: "20px",
            sm: "25px",
            md: "27px",
            lg: "30px",
          }}
          alignItems="center"
        >
          <Link to="/">
            <Typography fontSize="20px" color="#111827">
              Home
            </Typography>
          </Link>
          <a href="#about">
            <Typography fontSize="20px" color="#111827">
              About
            </Typography>
          </a>
          <a href="#work">
            <Typography fontSize="20px" color="#111827">
              Work
            </Typography>
          </a>
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
          <a href="#contact">
            <Button>
              <Typography
                className="contact-btn"
                fontSize="15px"
                textTransform="capitalize"
              >
                Contact
              </Typography>
            </Button>
          </a>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NavBar;
