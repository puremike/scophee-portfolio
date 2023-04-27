import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HtmlIcon from "../assets/icons/html.png";
import CSSIcon from "../assets/icons/css.png";
import JavaScriptIcon from "../assets/icons/javascript.png";
import TypeScriptIcon from "../assets/icons/typescript.png";
import ReactIcon from "../assets/icons/react.png";
import NextIcon from "../assets/icons/next.png";
import NodeIcon from "../assets/icons/nodejs.png";
import ExpressIcon from "../assets/icons/express.png";

import "./skillscomp.scss";

const SkillsComp = () => {
  return (
    <Stack direction="row" gap="24px" width="1090px" mx="auto" mb="92px">
      <Stack
        className="skills-container"
        direction="row"
        gap="7px"
        alignItems="center"
      >
        <img src={HtmlIcon} width="20" height="17" alt="html-icon" />
        <Typography
          fontFamily="source sans pro"
          fontSize="20px"
          fontWeight="bold"
        >
          HTML
        </Typography>
      </Stack>
      <Stack
        className="skills-container"
        direction="row"
        gap="7px"
        alignItems="center"
      >
        <img src={CSSIcon} width="20" height="17" alt="html-icon" />
        <Typography
          fontFamily="source sans pro"
          fontSize="20px"
          fontWeight="bold"
        >
          CSS
        </Typography>
      </Stack>
      <Stack
        className="skills-container"
        direction="row"
        gap="7px"
        alignItems="center"
      >
        <img src={JavaScriptIcon} width="20" height="17" alt="html-icon" />
        <Typography
          fontFamily="source sans pro"
          fontSize="20px"
          fontWeight="bold"
        >
          JavaScript
        </Typography>
      </Stack>
      <Stack
        className="skills-container"
        direction="row"
        gap="7px"
        alignItems="center"
      >
        <img src={TypeScriptIcon} width="20" height="17" alt="html-icon" />
        <Typography
          fontFamily="source sans pro"
          fontSize="20px"
          fontWeight="bold"
        >
          TypeScript
        </Typography>
      </Stack>
      <Stack
        className="skills-container"
        direction="row"
        gap="7px"
        alignItems="center"
      >
        <img src={ReactIcon} width="20" height="17" alt="html-icon" />
        <Typography
          fontFamily="source sans pro"
          fontSize="20px"
          fontWeight="bold"
        >
          Reactjs
        </Typography>
      </Stack>
      <Stack
        className="skills-container"
        direction="row"
        gap="7px"
        alignItems="center"
      >
        <img src={NextIcon} width="20" height="17" alt="html-icon" />
        <Typography
          fontFamily="source sans pro"
          fontSize="20px"
          fontWeight="bold"
        >
          Nextjs
        </Typography>
      </Stack>
      <Stack
        className="skills-container"
        direction="row"
        gap="7px"
        alignItems="center"
      >
        <img src={NodeIcon} width="20" height="17" alt="html-icon" />
        <Typography
          fontFamily="source sans pro"
          fontSize="20px"
          fontWeight="bold"
        >
          Nodejs
        </Typography>
      </Stack>
      <Stack
        className="skills-container"
        direction="row"
        gap="7px"
        alignItems="center"
      >
        <img src={ExpressIcon} width="18" height="15" alt="html-icon" />
        <Typography
          fontFamily="source sans pro"
          fontSize="20px"
          fontWeight="bold"
        >
          Express
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SkillsComp;
