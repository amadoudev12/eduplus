import './index.css'
import Navbar from "./assets/components/navbar/Navbar.jsx"
import Hero from "./assets/components/hero/Hero.jsx"
import About from "./assets/components/about/About.jsx"
import { Routes, Route } from "react-router-dom";
import Inscription from "./assets/components/form-inscription/Inscription.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
          </>
        } />
        <Route path='/about' element={<About />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </>
  )
}

export default App
