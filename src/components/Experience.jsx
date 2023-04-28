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

const Experience = () => {
  const { hover, setHover } = useContext(HoverContext);
  const [workHover, setWorkHover] = useState(GoogleExperience);

  const { job, place, date, role1, role2, role3 } = workHover;

  return (
    <Box sx={{ mt: "196px", ml: "410px", mb: "100px" }}>
      <Typography fontFamily="Source Code Pro" fontSize="48px" mb="42px">
        My experience
      </Typography>
      <Stack direction="row" gap="70px" alignItems="center">
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
          >
            <img
              src={GoogleIcon}
              width="40px"
              height="40px"
              alt="Google-icon"
            />
            <Typography
              fontSize="12px"
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
            className="button-container"
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
              fontSize="12px"
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
            className="button-container"
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
              fontSize="12px"
              textTransform="capitalize"
              textAlign="justify"
              fontWeight="bold"
            >
              Oculus <br /> <span>Frontend Developer</span>
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="column" gap="24px" width="600px">
          <Typography fontWeight="bold">
            {job} <span className="google-style">{place}</span>
            <br />
            <span className="experience-date">{date}</span>
          </Typography>
          <Typography fontSize="15px" fontFamily="open sans">
            {role1}
          </Typography>
          <Typography fontSize="15px" fontFamily="open sans">
            {role2}
          </Typography>
          <Typography fontSize="15px" fontFamily="open sans">
            {role3}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Experience;
