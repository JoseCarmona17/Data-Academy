import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { FaWhatsapp } from 'react-icons/fa'
import Home from './pages/Home'
import Cursos from './pages/Cursos'
import SobreMi from './pages/SobreMi'
import Politicas from './pages/Politicas'
import CourseDetail from './pages/CourseDetail'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/cursos/:id" element={<CourseDetail />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/politicas" element={<Politicas />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/573000000000?text=Hola!%20Me%20gustaría%20recibir%20información." 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20ba5a] transition-all duration-300 animate-bounce-slow flex items-center justify-center group"
          aria-label="Contactar por WhatsApp"
        >
          <FaWhatsapp className="text-4xl" />
          <span className="absolute right-full mr-4 bg-navy text-white px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            ¿Tienes dudas? ¡Escríbenos!
          </span>
        </a>
      </div>
    </BrowserRouter>
  )
}

export default App
