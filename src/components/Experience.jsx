import { React, useContext, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import GoogleIcon from "../assets/icons/google.png";
import HashnodeIcon from "../assets/icons/hashnode.png";
import OculusIcon from "../assets/icons/oculus.png";
import {
  HoverContext,
  GoogleExperience,
  HashnodeExperience,
  OculusExperience,
} from "../context/HoverContext";
import "./experience.scss";
import "animate.css";

const Experience = () => {
  const { hover, setHover } = useContext(HoverContext);
  const [workHover, setWorkHover] = useState(GoogleExperience);

  const { job, place, date, role1, role2, role3 } = workHover;

  return (
    <Box
      sx={{ m: "100px 0", p: { xs: "1rem 1rem", lg: "2rem 14rem" } }}
      justifyItems="center"
    >
      <Typography fontFamily="Source Code Pro" fontSize="48px" mb="42px">
        My experience
      </Typography>
      <Stack
        direction={{ xs: "column", xl: "row" }}
        gap="20px"
        alignItems="center"
        width="100%"
      >
        <Stack direction="column" gap="20px">
          <Stack
            onMouseEnter={() => {
              setHover("button-container1");
            }}
            onClick={() => {
              setWorkHover(GoogleExperience);
            }}
            className={hover}
            direction="row"
            gap="20px"
            width={{ xs: "50vw", lg: "50vw" }}
          >
            <img
              src={GoogleIcon}
              width="40px"
              height="40px"
              alt="Google-icon"
            />
            <Typography
              fontSize="18px"
              textTransform="capitalize"
              textAlign="justify"
              fontWeight="bold"
            >
              Google <br /> <span>UI Engineer</span>
            </Typography>
          </Stack>

          <Stack
            onMouseEnter={() => {
              setHover("button-hover");
            }}
            onClick={() => {
              setWorkHover(HashnodeExperience);
            }}
            className="button-container animate"
            direction="row"
            gap="18px"
          >
            <img
              src={HashnodeIcon}
              width="40px"
              height="40px"
              alt="Hashnode-icon"
            />
            <Typography
              fontSize="18px"
              textTransform="capitalize"
              textAlign="justify"
              fontWeight="bold"
            >
              Hashnode <br /> <span>Frontend Developer</span>
            </Typography>
          </Stack>

          <Stack
            onClick={() => {
              setWorkHover(OculusExperience);
            }}
            className="button-container animate"
            direction="row"
            gap="18px"
          >
            <img
              src={OculusIcon}
              width="40px"
              height="24px"
              alt="Oculus-icon"
            />
            <Typography
              fontSize="18px"
              textTransform="capitalize"
              textAlign="justify"
              fontWeight="bold"
            >
              Oculus <br /> <span>Frontend Developer</span>
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="column" gap="24px" className="animate">
          <Typography fontWeight="bold" fontSize="18px">
            {job} <span className="google-style">{place}</span>
            <br />
            <span className="experience-date">{date}</span>
          </Typography>
          <Typography fontSize="18px" fontFamily="open sans">
            {role1}
          </Typography>
          <Typography fontSize="18px" fontFamily="open sans">
            {role2}
          </Typography>
          <Typography fontSize="18px" fontFamily="open sans">
            {role3}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Experience;
