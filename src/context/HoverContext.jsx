import { createContext, useState } from "react";

const breakLine = <br />;

export const GoogleExperience = {
  job: "UI Engineer",
  place: "@Google",
  date: "2022 - Present",
  role1:
    "⇒ Design and implementation of visually appealing and intuitive user interfaces for innovative technology products.",
  role2:
    "⇒ Continuous improvement of the user experience and maintenance of quality standards.",
  role3:
    "⇒ Conducting testing and validation, user research, and collaborating with other teams to ensure quality and effective.",
};

export const HashnodeExperience = {
  job: "Frontend Developer",
  place: "@Hashnode",
  date: "2019 - 2022",
  role1:
    "⇒ Created and implemented a custom CSS grid system, with CSS media queries for mobile responsiveness.",
  role2:
    "⇒ Increased front-end efficiency by transferring the blogs over to wordpress and brand-associated them with the main site.",
  role3:
    "⇒ Programmed HTML5 canvases to animate particles on web backgrounds for site-wide promotions.",
};

export const OculusExperience = {
  job: "Frontend Developer",
  place: "@Oculus",
  date: "2016 - 2019",
  role1:
    "⇒ Developed and designed Special Beginnings Assessment Forms for mothers in different stages of expectancy.",
  role2:
    "⇒ Developed code for Shadowboxes, Slider Carousals, Tickers, Rotating Headers, Validation and JS animations.",
  role3:
    "⇒ Maintained, Developed and Designed the BlueCross BlueShield public site for all 4 states on a regular basis with TeamSite.",
};

export const HoverContext = createContext(null);
export const HoverProvider = ({ children }) => {
  const [hover, setHover] = useState("button-container1");

  const [workHover, setWorkHover] = useState(GoogleExperience);
  const value = { hover, setHover, workHover, setWorkHover };

  return (
    <HoverContext.Provider value={value}>{children}</HoverContext.Provider>
  );
};
