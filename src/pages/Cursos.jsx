import { Link } from 'react-router-dom'
import { 
  FileSpreadsheet, 
  BarChart3, 
  GraduationCap, 
  Clock, 
  Users, 
  CheckCircle2, 
  Brain, 
  Settings, 
  Layout, 
  Database,
  ArrowRight,
  Star
} from 'lucide-react'

const courses = [
  {
    title: 'Excel Completo: De Cero a Ninja',
    desc: 'Domina desde fórmulas básicas hasta macros avanzadas y automatización con proyectos reales del mundo corporativo.',
    level: 'Todos los niveles',
    hours: '42h',
    students: '4,820',
    rating: 4.9,
    badge: 'Más Popular',
    icon: <FileSpreadsheet className="w-12 h-12 text-primary" />,
    topics: ['Fórmulas avanzadas', 'Tablas dinámicas', 'Macros & VBA', 'Power Query'],
    price: 'S/ 149',
    featured: true,
  },
  {
    title: 'Dashboards en Power BI',
    desc: 'Aprende a conectar diversas fuentes de datos y diseñar tableros de control interactivos que impacten en la toma de decisiones.',
    level: 'Intermedio',
    hours: '28h',
    students: '3,240',
    rating: 4.8,
    badge: 'Trending',
    icon: <BarChart3 className="w-12 h-12 text-orange-500" />,
    topics: ['Modelado DAX', 'Visualizaciones', 'Reportes automáticos'],
    price: 'S/ 179',
    featured: false,
  },
  {
    title: 'Máster en Análisis de Datos',
    desc: 'La ruta definitiva para convertirte en analista: SQL, Estadística aplicada y Visualización Estratégica de alto nivel.',
    level: 'Avanzado',
    hours: '65h',
    students: '1,920',
    rating: 5.0,
    badge: 'Premium',
    icon: <GraduationCap className="w-12 h-12 text-purple-500" />,
    topics: ['SQL', 'Estadística', 'Python básico', 'Viz estratégica'],
    price: 'S/ 299',
    featured: false,
  },
]

const learningItems = [
  { icon: <Brain className="w-8 h-8 text-primary" />, title: 'Análisis Crítico', desc: 'Interpreta grandes volúmenes de datos para tomar decisiones empresariales fundamentadas.' },
  { icon: <Settings className="w-8 h-8 text-primary" />, title: 'Automatización', desc: 'Crea macros y flujos de trabajo que reduzcan horas de trabajo manual en minutos.' },
  { icon: <Layout className="w-8 h-8 text-primary" />, title: 'Visualización', desc: 'Domina el arte de contar historias con datos a través de dashboards de alto impacto.' },
  { icon: <Database className="w-8 h-8 text-primary" />, title: 'Gestión de Datos', desc: 'Conexión, limpieza y modelado desde diversas fuentes para un análisis íntegro.' },
]

export default function Cursos() {
  return (
    <div className="pt-16 bg-white">
      {/* ── HEADER ── */}
      <section className="bg-slate-50 border-b border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Formación de Élite</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6 tracking-tight">Nuestros Cursos</h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Programas intensivos diseñados para transformar tu perfil profesional con las habilidades técnicas más demandadas del mercado.
          </p>
        </div>
      </section>

      {/* ── COURSES GRID ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {courses.map((c) => (
              <div
                key={c.title}
                className={`group flex flex-col bg-white rounded-[2rem] border-2 transition-all duration-300 hover:shadow-2xl hover:shadow-navy/5 ${
                  c.featured ? 'border-primary shadow-xl shadow-primary/5' : 'border-slate-100 hover:border-primary/20'
                }`}
              >
                <div className="p-10 pb-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                      {c.icon}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest ${
                        c.featured ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {c.badge}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="text-xs font-bold">{c.rating}</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-navy mb-4 group-hover:text-primary transition-colors">{c.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{c.desc}</p>
                  
                  <div className="space-y-3 mb-10">
                    {c.topics.map((t) => (
                      <div key={t} className="flex items-center gap-3 text-sm text-navy font-medium">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {t}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-6 pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-wider">
                      <Clock className="w-4 h-4 text-primary" />
                      {c.hours}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-wider">
                      <Users className="w-4 h-4 text-primary" />
                      {c.students}
                    </div>
                  </div>
                </div>

                <div className="p-10 pt-0">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-3xl font-bold text-navy tracking-tight">{c.price}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Acceso de por vida</p>
                    </div>
                    <button className="flex-1 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                      Inscribirme
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU WILL LEARN ── */}
      <section className="py-24 bg-navy text-white m-6 rounded-[3rem]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white">
                Lo que aprenderás en la <span className="text-primary">Academy</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12">
                Nuestro enfoque pedagógico está centrado en la resolución de problemas reales, asegurando que cada lección tenga una aplicación directa en tu trabajo.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {learningItems.map((item) => (
                  <div key={item.title} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300">
                    <div className="mb-6">{item.icon}</div>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] opacity-30 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Data Visualization" 
                className="relative rounded-[2.5rem] shadow-2xl z-10 border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
            ¿Quieres un plan personalizado para tu equipo?
          </h2>
          <p className="text-slate-500 text-lg mb-12">
            Ofrecemos capacitaciones corporativas diseñadas a medida según las necesidades específicas de tu organización.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-1">
              Contactar Ventas
            </button>
            <Link to="/sobre-mi" className="px-10 py-4 border-2 border-slate-200 hover:border-primary/30 text-navy font-bold rounded-2xl transition-all duration-300 hover:bg-slate-50">
              Conocer al instructor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
