import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ConsumerCare from "./Pages/ConsumerCare/ConsumerCare";
import Chatbot from "./Pages/Chatbot/App"; // standalone

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Normal pages with header/footer */}
        <Route path="/" element={<><Header /><Home /><Footer /></>} />
        <Route path="/about" element={<><Header /><AboutUs /><Footer /></>} />
        <Route path="/consumer-care" element={<><Header /><ConsumerCare /><Footer /></>} />

        {/* Fully independent Chatbot page */}
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
