import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeaderTop from "./components/Header/HeaderTop";
import Elevators from "./pages/Elevators";
import Electromechanics from "./pages/Electromechanics";
import Contact from "./pages/Contact";
import Contracting from "./pages/Contracting";
function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <HeaderTop />
        <Header />
        <Routes>
          <Route path="/" element={<Elevators />} />
          <Route path="/electromechanics" element={<Electromechanics />} />
          <Route path="/contracting" element={<Contracting/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
