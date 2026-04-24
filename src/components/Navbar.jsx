import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Rocket } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-primary font-bold text-sm transition-colors duration-200'
      : 'text-slate-600 hover:text-navy font-semibold text-sm transition-colors duration-200'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy/5 border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-navy text-lg tracking-tight">
            Professional <span className="text-primary">Data Academy</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink to="/" end className={navLinkClass}>Inicio</NavLink>
          <NavLink to="/cursos" className={navLinkClass}>Cursos</NavLink>
          <NavLink to="/sobre-mi" className={navLinkClass}>Sobre Mí</NavLink>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/cursos"
            className="px-6 py-2.5 text-sm font-bold text-white bg-primary rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/10 hover:-translate-y-0.5"
          >
            Comenzar Ahora
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <NavLink to="/" end className={navLinkClass} onClick={() => setMobileOpen(false)}>Inicio</NavLink>
          <NavLink to="/cursos" className={navLinkClass} onClick={() => setMobileOpen(false)}>Cursos</NavLink>
          <NavLink to="/sobre-mi" className={navLinkClass} onClick={() => setMobileOpen(false)}>Sobre Mí</NavLink>
          <Link
            to="/cursos"
            className="px-6 py-3 text-sm font-bold text-white bg-primary rounded-xl hover:bg-primary-dark text-center transition-colors shadow-lg shadow-primary/10"
            onClick={() => setMobileOpen(false)}
          >
            Comenzar Ahora
          </Link>
        </div>
      )}
    </header>
  )
}
