import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import BSFooter from "./components/BSFooter"
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div>
    <>
      <Navbar />
      <div className="containerd-flex align-items-center">
        <Routes class="">
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      {/* <BSFooter>
      </BSFooter> */}
      <BSFooter />
      </div>
    </>
    
    </div>
  )
}

export default App
