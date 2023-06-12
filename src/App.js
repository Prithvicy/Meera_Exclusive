import "./App.css";
import Nav from "./components/Nav";
import Offer from "./components/Offer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductRange from "./pages/ProductRange";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <div className="App">
      <Offer />
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductRange" element={<ProductRange />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
