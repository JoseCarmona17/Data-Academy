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
  Monitor
} from 'lucide-react'

const tools = [
  { name: 'Microsoft Excel', icon: <FileSpreadsheet className="w-6 h-6" />, color: 'from-primary to-primary-dark' },
  { name: 'Power BI', icon: <BarChart3 className="w-6 h-6" />, color: 'from-yellow-400 to-orange-500' },
  { name: 'Google Sheets', icon: <FileSpreadsheet className="w-6 h-6" />, color: 'from-blue-400 to-blue-600' },
  { name: 'Looker Studio', icon: <Search className="w-6 h-6" />, color: 'from-purple-400 to-purple-600' },
  { name: 'Análisis de Datos', icon: <Calculator className="w-6 h-6" />, color: 'from-primary-light to-primary' },
  { name: 'Ofimática Pro', icon: <Briefcase className="w-6 h-6" />, color: 'from-slate-400 to-slate-600' },
]

const featuredCourses = [
  {
    title: 'Excel Completo (De básico a experto)',
    level: 'Todos los niveles',
    hours: '42h',
    students: '4,820',
    rating: 4.9,
    badge: 'Más Popular',
    badgeColor: 'bg-primary/10 text-primary',
    icon: <FileSpreadsheet className="w-10 h-10 text-primary" />,
    gradient: 'from-white to-slate-50',
    border: 'border-card-border',
  },
  {
    title: 'Crea tu primer Dashboard en Power BI',
    level: 'Intermedio',
    hours: '28h',
    students: '3,240',
    rating: 4.8,
    badge: 'Trending',
    badgeColor: 'bg-orange-100 text-orange-700',
    icon: <BarChart3 className="w-10 h-10 text-orange-500" />,
    gradient: 'from-white to-slate-50',
    border: 'border-card-border',
  },
  {
    title: 'Análisis de Datos con Tablas Dinámicas',
    level: 'Intermedio',
    hours: '18h',
    students: '2,150',
    rating: 4.9,
    badge: 'Nuevo',
    badgeColor: 'bg-blue-100 text-blue-700',
    icon: <Calculator className="w-10 h-10 text-blue-500" />,
    gradient: 'from-white to-slate-50',
    border: 'border-card-border',
  },
  {
    title: 'Herramientas Ofimáticas Pro',
    level: 'Básico',
    hours: '12h',
    students: '1,890',
    rating: 4.7,
    badge: 'Recomendado',
    badgeColor: 'bg-purple-100 text-purple-700',
    icon: <Briefcase className="w-10 h-10 text-purple-500" />,
    gradient: 'from-white to-slate-50',
    border: 'border-card-border',
  },
]

const methodology = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: 'Aprendizaje Basado en Proyectos',
    desc: 'No solo teoría. Trabajarás en casos reales desde el primer día.',
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    title: 'Feedback Personalizado',
    desc: 'Tus entregas son revisadas por expertos con años de experiencia corporativa.',
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: 'Certificación con Valor',
    desc: 'Recibe un certificado que demuestra tu dominio de las herramientas más demandadas.',
  },
]

const stats = [
  { value: '15,000+', label: 'Estudiantes activos' },
  { value: '4.9/5', label: 'Valoración promedio' },
  { value: '+40%', label: 'Aumento salarial avg.' },
  { value: '95%', label: 'Tasa de satisfacción' },
]

export default function Home() {
  return (
    <div className="pt-16">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white text-navy">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 items-center gap-12">
          <div className="relative z-10">
            {/* badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
              <span className="text-primary text-xs font-semibold tracking-wider uppercase">Career Growth</span>
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              <span className="text-primary/80 text-xs font-bold">+40% Avg Salary Increase</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-navy">
              Domina el análisis de datos con{' '}
              <span className="text-primary">
                Professional Data Academy
              </span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Cursos prácticos diseñados para convertirte en un experto en Excel, Power BI y análisis estratégico.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/cursos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5"
              >
                Inscribirse ahora
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/sobre-mi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-200 hover:border-primary/30 text-navy font-bold rounded-xl transition-all duration-300 hover:bg-slate-50"
              >
                Conoce al instructor
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Student" />
                  </div>
                ))}
              </div>
              <p>Únete a <span className="font-bold text-navy">15k+ estudiantes</span> satisfechos</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl rotate-3"></div>
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=1200" 
                alt="Data Analysis Dashboard" 
                className="rounded-2xl w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Monthly Growth</p>
                    <p className="text-xl font-bold text-navy">+28.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left md:border-l border-slate-200 first:border-0 md:pl-8">
              <p className="text-4xl font-bold text-navy mb-1">{s.value}</p>
              <p className="text-slate-500 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Herramientas que dominarás</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Te enseñamos a utilizar las plataformas líderes en el mercado para que puedas generar impacto inmediato en cualquier organización.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {tools.map((t) => (
              <div
                key={t.name}
                className="group flex flex-col items-center gap-4 p-8 bg-white rounded-2xl border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {t.icon}
                  </div>
                </div>
                <p className="text-xs font-bold text-navy uppercase tracking-wider">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COURSES ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Cursos destacados</h2>
              <p className="text-slate-500 max-w-xl">
                Programas intensivos diseñados para llevar tus habilidades de cero a profesional en tiempo récord.
              </p>
            </div>
            <Link
              to="/cursos"
              className="group inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors"
            >
              Ver todos los cursos
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((c) => (
              <div
                key={c.title}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-navy/5 transition-all duration-300 flex flex-col"
              >
                <div className="p-8 pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                    {c.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider ${c.badgeColor}`}>
                      {c.badge}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-[10px] font-bold">{c.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-navy text-lg leading-tight mb-4 group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                </div>
                <div className="px-8 pb-8 mt-auto">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-6 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {c.hours}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      {c.students}
                    </div>
                  </div>
                  <Link
                    to="/cursos"
                    className="block w-full py-3 bg-primary hover:bg-primary-dark text-white text-center text-sm font-bold rounded-xl transition-all duration-300"
                  >
                    Saber más
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                Una metodología <span className="text-primary">enfocada en resultados</span>
              </h2>
              <div className="space-y-10">
                {methodology.map((m, i) => (
                  <div key={m.title} className="flex gap-6">
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center">
                      {m.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy mb-2">{m.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Collaboration" 
                className="relative rounded-3xl shadow-2xl z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-navy text-white relative overflow-hidden m-6 rounded-[2.5rem]">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-light/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/20 mb-8 border border-primary/30">
            <Monitor className="w-10 h-10 text-primary-light" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            ¿Listo para transformar tu carrera profesional?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Únete a la academia líder en análisis de datos y adquiere las habilidades más demandadas por las grandes corporaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cursos"
              className="px-10 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-0.5"
            >
              Explorar cursos
            </Link>
            <Link
              to="/sobre-mi"
              className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              Contactar asesor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
