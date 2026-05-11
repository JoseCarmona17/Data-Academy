import { Link } from 'react-router-dom'
import { 
  Briefcase, 
  BarChart3, 
  Zap, 
  CheckCircle2, 
  Star, 
  Mail, 
  Award,
  ChevronRight,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react'

const stats = [
  { value: '10+', label: 'Años de Experiencia Corporativa' },
  { value: '150+', label: 'Proyectos Implementados' },
  { value: '4.9/5', label: 'Valoración de Alumnos' },
  { value: 'Microsoft', label: 'Certificación Especializada' },
]

const specialties = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: 'Estrategia de Datos',
    desc: 'Diseño de arquitecturas de información que alinean los objetivos de negocio con la captura y procesamiento de datos.',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    title: 'Visualización Avanzada',
    desc: 'Creación de dashboards narrativos que cuentan historias claras, eliminando el ruido y resaltando información accionable.',
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Automatización',
    desc: 'Optimización de flujos de trabajo mediante Power Query y macros, reduciendo horas de trabajo manual a segundos.',
  },
]

const timeline = [
  { year: '2010–2015', title: 'Analista Senior en Corporativo', desc: 'Lideré proyectos de inteligencia de negocios en empresas Fortune 500, transformando datos en decisiones estratégicas.' },
  { year: '2015–2020', title: 'Head of Business Intelligence', desc: 'Dirigí equipos de 15+ analistas, implementando pipelines de datos y dashboards ejecutivos de alto impacto.' },
  { year: '2020–Hoy', title: 'Fundador de EXCELSIOR UNLIMITED', desc: 'Creé la academia para democratizar el análisis de datos y cerrar la brecha entre la academia y la industria.' },
]

export default function SobreMi() {
  return (
    <div className="pt-16 bg-white">
      {/* ── HERO ── */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-primary text-[10px] lg:text-xs font-bold uppercase tracking-widest">Instructor Principal</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 tracking-tight leading-tight">
                Transformando carreras <span className="text-primary">a través de los datos</span>
              </h1>
              <p className="text-slate-500 text-base lg:text-xl leading-relaxed mb-8 max-w-xl">
                Soy un apasionado por la analítica de datos con una misión clara: equipar a los profesionales con las herramientas técnicas y estratégicas necesarias para liderar en la era digital.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-navy font-bold text-sm lg:text-base">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  4.9/5.0
                </div>
                <div className="w-px h-6 bg-slate-200" />
                <div className="flex gap-4">
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors" aria-label="Twitter">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors" aria-label="Email"><Mail className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[120px] opacity-30"></div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] lg:rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative aspect-square rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200" 
                    alt="Instructor" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-navy/90 to-transparent text-white">
                    <p className="text-base lg:text-lg font-bold">Director Académico</p>
                    <p className="text-xs lg:text-sm text-slate-300">Ex-Head of BI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-12 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="text-2xl lg:text-4xl font-bold text-navy mb-2 tracking-tight">{s.value}</p>
              <p className="text-slate-400 text-[10px] lg:text-xs font-bold uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRAYECTORIA ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-2xl lg:text-5xl font-bold text-navy mb-8 leading-tight">
                Una trayectoria forjada en <span className="text-primary">resultados reales</span>
              </h2>
              <div className="space-y-10 lg:space-y-12">
                {timeline.map((item, i) => (
                  <div key={item.year} className="relative pl-10 lg:pl-12 group">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-100 group-last:bg-transparent">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 lg:w-8 h-6 lg:h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center z-10">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <div className="pb-2">
                      <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold rounded-lg mb-3 tracking-widest uppercase">
                        {item.year}
                      </span>
                      <h3 className="text-lg lg:text-xl font-bold text-navy mb-3">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed text-xs lg:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6 lg:space-y-8">
              <div className="p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] bg-navy text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <h3 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-6 lg:w-7 h-6 lg:h-7 text-primary" />
                  Mi Filosofía
                </h3>
                <p className="text-slate-300 leading-relaxed italic text-base lg:text-lg border-l-4 border-primary pl-4 lg:pl-6">
                  "No enseño herramientas por enseñar; enseño a pensar con datos. El software cambia, pero la capacidad analítica y estratégica es lo que realmente te hace indispensable en cualquier corporación."
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-slate-50 border border-slate-100">
                  <TrendingUp className="w-8 lg:w-10 h-8 lg:h-10 text-primary mb-4 lg:mb-6" />
                  <h4 className="font-bold text-navy mb-2 text-xs lg:text-sm">Resultados</h4>
                  <p className="text-slate-500 text-[10px] lg:text-xs leading-relaxed">Enfocado en métricas de crecimiento real.</p>
                </div>
                <div className="p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-slate-50 border border-slate-100">
                  <FileSpreadsheet className="w-8 lg:w-10 h-8 lg:h-10 text-primary mb-4 lg:mb-6" />
                  <h4 className="font-bold text-navy mb-2 text-xs lg:text-sm">Práctica</h4>
                  <p className="text-slate-500 text-[10px] lg:text-xs leading-relaxed">Aprender haciendo con casos corporativos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESPECIALIDADES ── */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-navy mb-4 tracking-tight">Áreas de Especialización</h2>
          <p className="text-slate-500 text-sm lg:text-base max-w-2xl mx-auto">
            Dominio técnico avanzado aplicado a la resolución de problemas reales de negocio de alta complejidad.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((s) => (
            <div key={s.title} className="p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] bg-white border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-2xl hover:shadow-navy/5 transition-all duration-300 group">
              <div className="w-12 lg:w-16 h-12 lg:h-14 rounded-xl lg:rounded-2xl bg-slate-50 flex items-center justify-center mb-6 lg:mb-8 group-hover:bg-primary/5 transition-colors">
                <div className="scale-75 lg:scale-100">{s.icon}</div>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-navy mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-slate-500 text-xs lg:text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 lg:py-24 bg-primary text-white mx-4 lg:mx-6 rounded-[2rem] lg:rounded-[3rem] shadow-2xl shadow-primary/20 relative overflow-hidden mb-12">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-5xl font-bold mb-6 lg:mb-8 leading-tight">
            ¿Listo para llevar tus habilidades al siguiente nivel?
          </h2>
          <p className="text-primary-light text-base lg:text-lg mb-8 lg:mb-12 font-medium">
            Únete a nuestra comunidad y comienza tu transformación profesional hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cursos" className="px-8 lg:px-10 py-3 lg:py-4 bg-navy hover:bg-navy/90 text-white font-bold rounded-xl lg:rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group text-sm lg:text-base">
              Explorar Cursos
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="mailto:instructor@dataacademy.pro" className="px-8 lg:px-10 py-3 lg:py-4 bg-white text-primary font-bold rounded-xl lg:rounded-2xl transition-all duration-300 hover:bg-slate-50 flex items-center justify-center text-sm lg:text-base">
              Agendar Asesoría
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
