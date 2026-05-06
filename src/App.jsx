import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
      </div>
    </BrowserRouter>
  )
}

export default App
