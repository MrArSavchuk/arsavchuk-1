import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavMenu } from "./hooks/useNavMenu";
import Header from "./components/Header";
import About from "./navigation/About";
import Services from "./navigation/Services";
import Gallery from "./navigation/Gallery";
import ContactMe from "./navigation/ContactMe";
import FirstPage from "./navigation/FirstPage";

function App() {
  const { menuOpen, toggle, close } = useNavMenu(760);

  return (
    <Router>
      <Header menuOpen={menuOpen} toggle={toggle} close={close} />

      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
