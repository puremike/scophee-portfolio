import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./routes/Home";
import About from "./routes/About";
import Work from "./routes/Work";
import Contact from "./routes/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 600,
      md: 760,
      lg: 1200,
      xl: 1440,
      xxl: 1800,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="#about" element={<About />} />
          <Route path="#work" element={<Work />} />
          <Route path="#contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
