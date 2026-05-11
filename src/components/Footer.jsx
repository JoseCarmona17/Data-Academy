import { Link } from 'react-router-dom'
import { Rocket, Mail } from 'lucide-react'
import { FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo2.png" alt="EXCELSIOR UNLIMITED Logo" className="h-12 md:h-16 w-auto object-contain" />
              <span className="text-2xl font-black tracking-tighter text-white">
                UNLIMITED
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Potenciamos tu carrera a través del dominio estratégico de los datos. Somos una empresa enfocada en generar un impacto real.
            </p>
            <div className="flex items-center gap-5 mt-8">
              <a href="#" className="text-slate-500 hover:text-primary transition-colors text-xl" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors text-xl" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#25D366] transition-colors text-xl" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="mailto:info@excelsiorunlimited.com" className="text-slate-500 hover:text-primary transition-colors" aria-label="Email"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Plataforma</h4>
            <ul className="space-y-4">
              <li><Link to="/cursos" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">Nuestros Cursos</Link></li>
              <li><Link to="/sobre-mi" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">Sobre el Instructor</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">Inicio</Link></li>
              {/* <li><a href="#" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">Testimonios</a></li> */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Soporte</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">Centro de Ayuda</a></li>
              <li><Link to="/politicas" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">Privacidad</Link></li>
              <li><Link to="/politicas" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">Términos y Condiciones</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-slate-500 text-xs font-medium">
            © {new Date().getFullYear()} EXCELSIOR UNLIMITED. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-xs font-medium italic">
            Master your data, transform your career.
          </p>
        </div>
      </div>
    </footer>
  )
}
