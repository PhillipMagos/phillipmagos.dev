import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer />
      </div>
    </>
    
    </div>
  )
}

export default App
