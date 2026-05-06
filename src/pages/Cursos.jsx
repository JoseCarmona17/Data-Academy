import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  Brain,
  Settings,
  Layout,
  Database,
  ArrowRight,
  Star,
  Clock,
  Users,
  Info
} from 'lucide-react'
import { courses } from '../data/courses'

const learningItems = [
  { icon: <Brain className="w-8 h-8 text-primary" />, title: 'Análisis Crítico', desc: 'Interpreta grandes volúmenes de datos para tomar decisiones empresariales fundamentadas.' },
  { icon: <Settings className="w-8 h-8 text-primary" />, title: 'Automatización', desc: 'Crea macros y flujos de trabajo que reduzcan horas de trabajo manual en minutos.' },
  { icon: <Layout className="w-8 h-8 text-primary" />, title: 'Visualización', desc: 'Domina el arte de contar historias con datos a través de dashboards de alto impacto.' },
  { icon: <Database className="w-8 h-8 text-primary" />, title: 'Gestión de Datos', desc: 'Conexión, limpieza y modelado desde diversas fuentes para un análisis íntegro.' },
]

function CourseItem({ c }) {
  return (
    <div
      className={`group flex flex-col bg-white rounded-[2rem] border-2 transition-all duration-300 hover:shadow-2xl hover:shadow-navy/5 border-slate-100 hover:border-primary/20`}
    >
      <Link to={`/cursos/${c.id}`} className="relative h-48 lg:h-56 overflow-hidden rounded-t-[1.85rem]">
        <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 left-4">
          <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest bg-white/90 text-slate-500 backdrop-blur-sm shadow-sm`}>
            {c.badge}
          </span>
        </div>
      </Link>

      <div className="p-5 lg:p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs font-bold text-navy">{c.rating}</span>
          </div>
          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{c.level}</div>
        </div>

        <Link to={`/cursos/${c.id}`}>
          <h2 className="text-lg font-bold text-navy group-hover:text-primary transition-colors min-h-[2.5rem] lg:min-h-[3rem] leading-tight mb-2">{c.title}</h2>
        </Link>

        <p className="text-slate-500 text-xs lg:text-sm leading-relaxed mb-3 line-clamp-2">
          {c.shortDesc}
        </p>

        <div className="space-y-2">
          {c.topics.slice(0, 3).map((t) => (
            <div key={t} className="flex items-center gap-2.5 text-xs lg:text-sm text-navy font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="truncate">{t}</span>
            </div>
          ))}

          <div className="mt-auto flex items-center gap-6 pt-1 border-slate-100">
            <div className="flex items-center gap-2 text-[10px] lg:text-xs text-slate-400 font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-primary" />
              {c.hours}
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 l pt-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <p className="text-lg lg:text-xl font-bold text-navy tracking-tight">{c.price}</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Inscripción</p>
          </div>
          <div className="w-full sm:w-auto flex gap-2">
            <Link
              to={`/cursos/${c.id}`}
              className="flex-1 sm:flex-none px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-navy font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-[11px]"
            >
              <Info className="w-3.5 h-3.5" />
              Info
            </Link>
            <a
              href={c.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-3.5 py-2.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/10 flex items-center justify-center gap-2 text-[11px]"
            >
              Comprar
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Cursos() {
  return (
    <div className="pt-16 bg-white">
      {/* ── HEADER ── */}
      <section className="bg-slate-50 border-b border-slate-200 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-primary text-[10px] lg:text-xs font-bold uppercase tracking-widest">Formación de Élite</span>
          </div>
          <h1 className="text-3xl lg:text-6xl font-bold text-navy mb-6 tracking-tight leading-tight">Nuestros Cursos</h1>
          <p className="text-slate-500 text-base lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Programas intensivos diseñados para transformar tu perfil profesional con las habilidades técnicas más demandadas del mercado.
          </p>
        </div>
      </section>

      {/* ── COURSES GRID ── */}
      <section className="py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {courses.map((c) => (
              <CourseItem key={c.title} c={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU WILL LEARN ── */}
      <section className="py-16 lg:py-24 bg-navy text-white mx-4 lg:mx-6 rounded-[2rem] lg:rounded-[3rem]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl lg:text-5xl font-bold mb-6 lg:mb-8 leading-tight text-white">
                Lo que aprenderás en <span className="text-primary">EXCELSIOR</span>
              </h2>
              <p className="text-slate-400 text-base lg:text-lg mb-8 lg:mb-12">
                Nuestro enfoque pedagógico está centrado en la resolución de problemas reales, asegurando que cada lección tenga una aplicación directa en tu trabajo.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-8">
                {learningItems.map((item) => (
                  <div key={item.title} className="p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300">
                    <div className="mb-4 lg:mb-6">{item.icon}</div>
                    <h3 className="text-base lg:text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-400 text-xs lg:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2">
              <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] opacity-30 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                alt="Data Visualization"
                className="relative rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl z-10 border border-white/10 w-full max-w-md lg:max-w-none h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-5xl font-bold text-navy mb-6 lg:mb-8 leading-tight">
            ¿Quieres un plan personalizado para tu equipo?
          </h2>
          <p className="text-slate-500 text-base lg:text-lg mb-8 lg:mb-12">
            Ofrecemos capacitaciones corporativas diseñadas a medida según las necesidades específicas de tu organización.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 lg:px-10 py-3 lg:py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-1 text-sm lg:text-base">
              Contactar Ventas
            </button>
            <Link to="/sobre-mi" className="px-8 lg:px-10 py-3 lg:py-4 border-2 border-slate-200 hover:border-primary/30 text-navy font-bold rounded-xl transition-all duration-300 hover:bg-slate-50 text-sm lg:text-base">
              Conocer al instructor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
