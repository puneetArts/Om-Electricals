import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ConsumerCare from "./Pages/ConsumerCare/ConsumerCare";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/about" element={<AboutUs />}/>
             <Route path="/consumer-care" element={<ConsumerCare />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
