import SecondPage from "./components/secondPage/SecondPage";
import LandingPage from "./components/landingPage/LandingPage";
import BackgroundCircle from "./components/backgroundCircle/BackgroundCircle";
import Nav from "./components/nav/Nav";
import AppMenu from "./components/menu/AppMenu";
import Confirme from "./components/confirme/Confirme";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
// router
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <BackgroundCircle />
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="menu" element={<AppMenu />} />
        <Route path="menu/secondpage" element={<SecondPage />} />
        <Route path="menu/secondpage/confirme" element={<Confirme />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
