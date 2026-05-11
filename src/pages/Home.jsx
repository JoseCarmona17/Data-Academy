import { Link } from 'react-router-dom'
import { 
  BarChart3, 
  TrendingUp, 
  FileSpreadsheet, 
  Search, 
  Calculator, 
  Briefcase,
  Target,
  MessageSquare,
  Award,
  Users,
  Clock,
  ChevronRight,
  Star,
  Monitor,
  ArrowRight,
  Info,
  CheckCircle2,
  Mail
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { courses } from '../data/courses'

const tools = [
  { name: 'Microsoft Excel', icon: <FileSpreadsheet className="w-6 h-6" />, color: 'from-primary to-primary-dark' },
  { name: 'Power BI', icon: <BarChart3 className="w-6 h-6" />, color: 'from-yellow-400 to-orange-500' },
  { name: 'Google Sheets', icon: <FileSpreadsheet className="w-6 h-6" />, color: 'from-blue-400 to-blue-600' },
  { name: 'Looker Studio', icon: <Search className="w-6 h-6" />, color: 'from-purple-400 to-purple-600' },
  { name: 'Análisis y visualización de datos', icon: <Calculator className="w-6 h-6" />, color: 'from-primary-light to-primary' },
  // { name: 'Ofimática Pro', icon: <Briefcase className="w-6 h-6" />, color: 'from-slate-400 to-slate-600' },
  { name: 'Clases personalizadas', icon: <Briefcase className="w-6 h-6" />, color: 'from-slate-400 to-slate-600' }
]

const methodology = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: 'Aprende según tus necesidades',
    desc: 'Adaptamos la enseñanza a tu caso real.',
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    title: 'Feedback Personalizado',
    desc: 'Tus entregas son revisadas por expertos con años de experiencia corporativa.',
  },

]

const stats = [
  { value: '15,000+', label: 'Estudiantes activos' },
  { value: '4.9/5', label: 'Valoración promedio' },
  { value: '+40%', label: 'Aumento salarial avg.' },
  { value: '95%', label: 'Tasa de satisfacción' },
]

function CourseCard({ course }) {
  return (
    <div className="group bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-navy/5 transition-all duration-300 flex flex-col h-full">
      <Link to={`/cursos/${course.id}`} className="relative h-48 lg:h-56 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm ${course.badgeColor} bg-white/90 backdrop-blur-sm`}>
            {course.badge}
          </span>
        </div>
      </Link>
      
      <div className="p-5 lg:p-6 flex flex-col flex-grow">
        <Link to={`/cursos/${course.id}`} className="block mb-2 lg:mb-3">
          <h3 className="font-bold text-navy text-base lg:text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem] lg:min-h-[3rem]">
            {course.title}
          </h3>
        </Link>

        <div className="mt-auto pt-3 lg:pt-4 border-t border-slate-100">
          <Link
            to={`/cursos/${course.id}`}
            className="w-full py-2.5 lg:py-3 bg-primary hover:bg-primary-dark text-white text-center text-[11px] lg:text-xs font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/10 flex items-center justify-center gap-2"
          >
            <Info className="w-3.5 h-3.5" />
            Información del Curso
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="pt-16">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white text-navy">
        <div className="max-w-7xl mx-auto px-6 py-8 lg:py-16 grid lg:grid-cols-2 items-center gap-12">
          <div className="relative z-10">
            {/* badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6 lg:mb-8">
              <span className="text-primary text-[10px] lg:text-xs font-semibold tracking-wider uppercase">Career Growth</span>
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              <span className="text-primary/80 text-[10px] lg:text-xs font-bold">+40% Avg Salary Increase</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-navy">
              Domina el análisis y visualización de datos con{' '}
              <span className="text-primary">
                EXCELSIOR UNLIMITED
              </span>
            </h1>

            <p className="text-slate-600 text-base lg:text-xl leading-relaxed mb-8 lg:mb-10 max-w-xl">
              Cursos prácticos diseñados para convertirte en un experto en Excel, Power BI y análisis estratégico.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/cursos"
                className="inline-flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5 text-sm lg:text-base"
              >
                Inscribirse ahora
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/sobre-mi"
                className="inline-flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 border-2 border-slate-200 hover:border-primary/30 text-navy font-bold rounded-xl transition-all duration-300 hover:bg-slate-50 text-sm lg:text-base"
              >
                Conoce al instructor
              </Link>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl rotate-3"></div>
            <div className="relative bg-white p-3 lg:p-4 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
              <img 
                src="/hero-dashboard.png" 
                alt="Data Analysis Dashboard" 
                className="rounded-2xl w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute top-4 lg:top-8 right-4 lg:right-8 bg-white/90 backdrop-blur-md p-3 lg:p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-4 lg:w-5 h-4 lg:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[8px] lg:text-[10px] uppercase font-bold text-slate-400">Monthly Growth</p>
                    <p className="text-base lg:text-xl font-bold text-navy">+28.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 py-8 lg:py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left md:border-l border-slate-200 first:border-0 md:pl-8">
              <p className="text-2xl lg:text-4xl font-bold text-navy mb-1">{s.value}</p>
              <p className="text-slate-500 text-xs lg:text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-navy mb-4">Herramientas que dominarás</h2>
            <p className="text-slate-500 text-sm lg:text-base max-w-2xl mx-auto">
              Te enseñamos a utilizar las plataformas líderes en el mercado para que puedas generar impacto inmediato en cualquier organización.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 lg:gap-6">
            {tools.map((t) => (
              <div
                key={t.name}
                className="group flex flex-col items-center gap-3 lg:gap-4 p-6 lg:p-8 bg-white rounded-2xl border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 lg:w-14 h-12 lg:h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {t.icon}
                  </div>
                </div>
                <p className="text-[10px] lg:text-xs font-bold text-navy uppercase tracking-wider text-center">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COURSES ── */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-8 mb-8 lg:mb-12">
            <div>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy mb-4">Cursos destacados</h2>
              <p className="text-slate-500 text-sm lg:text-base max-w-xl">
                Programas intensivos diseñados para llevar tus habilidades de cero a profesional en tiempo récord.
              </p>
            </div>
            <Link
              to="/cursos"
              className="group inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors text-sm lg:text-base"
            >
              Ver todos los cursos
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((c) => (
              <CourseCard key={c.title} course={c} />
            ))}
            
            {/* Manual Card for Personalized Classes */}
            <div className="group bg-navy rounded-[2rem] border border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 flex flex-col h-full relative">
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm bg-primary text-white">
                  Premium
                </span>
              </div>
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
                  alt="Clases Personalizadas" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <p className="text-white font-bold text-lg lg:text-xl leading-tight">Clases Personalizadas</p>
                </div>
              </div>
              
              <div className="p-5 lg:p-6 flex flex-col flex-grow bg-navy">
                <p className="text-slate-400 text-xs lg:text-sm leading-relaxed mb-6">
                  Sesiones 1-a-1 diseñadas para resolver tus retos específicos con tus propios datos.
                </p>

                <div className="mt-auto space-y-3">
                  <a
                    href="https://wa.me/573000000000?text=Hola!%20Me%20gustaría%20recibir%20información%20sobre%20las%20clases%20personalizadas."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 lg:py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-center text-[11px] lg:text-xs font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="text-xl" />
                    Más Información
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-navy mb-8 leading-tight">
                Una metodología <span className="text-primary">enfocada en resultados</span>
              </h2>
              <div className="space-y-8 lg:space-y-10">
                {methodology.map((m, i) => (
                  <div key={m.title} className="flex gap-4 lg:gap-6">
                    <div className="shrink-0 w-12 lg:w-16 h-12 lg:h-16 rounded-2xl bg-primary/5 flex items-center justify-center">
                      {m.icon}
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold text-navy mb-2">{m.title}</h3>
                      <p className="text-slate-500 text-sm lg:text-base leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
              <img 
                src="/methodology.png" 
                alt="Collaboration" 
                className="relative rounded-3xl shadow-2xl z-10 w-full max-w-md lg:max-w-none h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CLASES PERSONALIZADAS ── */}
      <section id="personalizadas" className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-50 rounded-[3rem] p-8 lg:p-16 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                  <span className="text-primary text-[10px] lg:text-xs font-bold uppercase tracking-widest">Servicio Premium</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
                  ¿Necesitas un enfoque <span className="text-primary">100% a tu medida?</span>
                </h2>
                <p className="text-slate-500 text-base lg:text-xl leading-relaxed mb-8">
                  Ofrecemos clases personalizadas y mentorías uno a uno diseñadas para resolver tus desafíos específicos en el trabajo o proyectos propios. 
                  Aprende a tu ritmo, con tus propios datos y con un experto a tu disposición.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {[
                    'Resolución de dudas específicas en tiempo real',
                    'Asesoría técnica para proyectos corporativos',
                    'Horarios flexibles que se adaptan a ti',
                    'Enfoque práctico en tus propios archivos de datos'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-navy font-medium text-sm lg:text-base">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://wa.me/573000000000?text=Hola!%20Me%20gustaría%20recibir%20información%20sobre%20las%20clases%20personalizadas." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-green-500/20 flex items-center justify-center gap-3 group"
                  >
                    <FaWhatsapp className="text-3xl" />
                    Contactar WhatsApp
                  </a>
                  <a 
                    href="mailto:info@excelsiorunlimited.com?subject=Consulta%20Clases%20Personalizadas" 
                    className="px-8 py-4 bg-white text-navy font-bold rounded-2xl transition-all duration-300 border border-slate-200 hover:border-primary/30 hover:bg-slate-50 flex items-center justify-center gap-3"
                  >
                    <Mail className="w-6 h-6 text-primary" />
                    Enviar Correo
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl opacity-50"></div>
                <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
                    alt="Clases Personalizadas" 
                    className="rounded-[2rem] w-full h-auto object-cover aspect-video"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-navy text-white p-6 rounded-3xl shadow-xl max-w-[200px]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Próxima sesión</span>
                    </div>
                    <p className="text-sm font-bold leading-tight">Agenda hoy mismo tu mentoría individual.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-16 lg:py-24 bg-navy text-white relative overflow-hidden mx-4 lg:mx-6 rounded-[2rem] lg:rounded-[2.5rem]">
        <div className="absolute top-0 right-0 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-primary/20 rounded-full blur-[80px] lg:blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] bg-primary-light/10 rounded-full blur-[80px] lg:blur-[100px] translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 lg:w-20 h-16 lg:h-20 rounded-2xl lg:rounded-3xl bg-primary/20 mb-6 lg:mb-8 border border-primary/30">
            <Monitor className="w-8 lg:w-10 h-8 lg:h-10 text-primary-light" />
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            ¿Listo para transformar tu carrera profesional?
          </h2>
          <p className="text-slate-400 text-base lg:text-lg mb-8 lg:mb-10 max-w-2xl mx-auto">
            Únete a la academia líder en análisis de datos y adquiere las habilidades más demandadas por las grandes corporaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cursos"
              className="px-8 lg:px-10 py-3 lg:py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-0.5 text-sm lg:text-base"
            >
              Explorar cursos
            </Link>
            <Link
              to="/sobre-mi"
              className="px-8 lg:px-10 py-3 lg:py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-sm text-sm lg:text-base"
            >
              Contactar asesor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
