import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Work from "./routes/Work";
import Contact from "./routes/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="#about" element={<About />} />
          <Route path="#work" element={<Work />} />
          <Route path="#contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
