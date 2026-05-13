import { Link } from 'react-router-dom'
import {
  BarChart3,
  Zap,
  CheckCircle2,
  Star,
  Award,
  ChevronRight,
  TrendingUp,
  FileSpreadsheet,
  ExternalLink,
  GraduationCap,
  Users,
  Laptop
} from 'lucide-react'

const tools = [
  {
    icon: <FileSpreadsheet className="w-7 h-7 text-primary" />,
    name: 'Microsoft Excel',
    desc: 'Desde funciones esenciales hasta fórmulas avanzadas, tablas dinámicas y automatización con macros.',
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-primary" />,
    name: 'Google Sheets',
    desc: 'Manejo de datos en la nube, dashboards colaborativos y automatización con Apps Script.',
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-primary" />,
    name: 'Power BI',
    desc: 'Construcción de reportes interactivos, DAX y conexión con múltiples fuentes de datos.',
  },
  {
    icon: <Zap className="w-7 h-7 text-primary" />,
    name: 'Data Studio / Looker',
    desc: 'Dashboards dinámicos conectados a Google Analytics, Sheets y BigQuery de forma sencilla.',
  },
]

const highlights = [
  { icon: <GraduationCap className="w-6 h-6 text-primary" />, label: 'Ingeniería Industrial', sub: 'Base técnica y analítica sólida' },
  { icon: <BarChart3 className="w-6 h-6 text-primary" />, label: 'Análisis de Datos', sub: 'Años de experiencia aplicada' },
  { icon: <Users className="w-6 h-6 text-primary" />, label: 'Clases Personalizadas', sub: 'Atención individualizada' },
  { icon: <Laptop className="w-6 h-6 text-primary" />, label: 'Cursos Online', sub: 'Aprende desde donde estés' },
]

const socialLinks = [
  {
    id: 'linkedin-link',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/javier-contreras-analista-de-datos/',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    id: 'classgap-link',
    label: 'Classgap',
    href: 'https://www.classgap.com/es-co/tutor/javier-contreras-aristizabal',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 12.9L3.37 11 12 6.09 20.63 11 12 15.9zM1 17l11 6 11-6v-2l-11 6L1 15v2z" />
      </svg>
    ),
  },
]

export default function SobreMi() {
  return (
    <div className="pt-16 bg-white">

      {/* ── HERO ── */}
      <section className="bg-slate-50 border-b border-slate-200 py-10 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-primary text-[10px] lg:text-xs font-bold uppercase tracking-widest">Instructor &amp; Analista de Datos</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 tracking-tight leading-tight">
                Hola, soy <span className="text-primary">Javier Contreras</span>
              </h1>
              <p className="text-slate-600 text-base lg:text-lg font-medium mb-4">
                Ingeniero Industrial · Analista y Visualizador de Datos
              </p>
              <p className="text-slate-500 text-sm lg:text-base leading-relaxed mb-8 max-w-xl">
                Ayudo a estudiantes y profesionales a dominar <strong className="text-navy">Microsoft Excel, Google Sheets, Power BI y Data Studio</strong> de forma práctica, rápida y sencilla — mediante cursos online y clases personalizadas.
              </p>

              {/* Social proof + links */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-navy font-bold text-sm">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  Experiencia demostrada
                </div>
                <div className="w-px h-6 bg-slate-200 hidden sm:block" />
                <div className="flex gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.id}
                      id={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-primary hover:border-primary/30 hover:shadow-sm transition-all duration-200 text-xs font-semibold"
                    >
                      {s.icon}
                      {s.label}
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>

              <Link
                to="/cursos"
                id="hero-cta-cursos"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 text-sm lg:text-base group"
              >
                Ver mis cursos
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Avatar / card */}
            <div className="relative mt-4 md:mt-0">
              <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[120px] opacity-30" />
              <div className="relative max-w-xs sm:max-w-sm mx-auto">
                <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl aspect-[3/4]">
                  <img
                    src="/perfil.PNG"
                    alt="Javier Contreras - Instructor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 bg-gradient-to-t from-navy/95 to-transparent text-white">
                    <p className="text-sm lg:text-lg font-bold">Javier Contreras</p>
                    <p className="text-xs text-slate-300 mt-0.5">Ingeniero Industrial · Analista de Datos</p>
                  </div>
                </div>

                {/* Floating badge — hidden on very small screens to avoid overflow */}
                <div className="hidden sm:flex absolute -bottom-4 -right-2 md:-right-6 bg-white rounded-2xl shadow-xl border border-slate-100 px-3 py-2.5 items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-navy font-bold text-xs">Perfil verificado</p>
                    <p className="text-slate-400 text-[10px]">LinkedIn · Classgap</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-12 lg:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {highlights.map((h) => (
            <div key={h.label} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                {h.icon}
              </div>
              <div>
                <p className="text-navy font-bold text-xs lg:text-sm leading-tight">{h.label}</p>
                <p className="text-slate-400 text-[10px] lg:text-xs mt-0.5">{h.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOBRE MÍ ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Bio */}
            <div>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy mb-6 leading-tight">
                Aprender datos no tiene que ser <span className="text-primary">complicado</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-sm lg:text-base leading-relaxed">
                <p>
                  Soy <strong className="text-navy">Javier Contreras</strong>, ingeniero industrial con años de experiencia en análisis y visualización de datos. Mi camino me llevó a descubrir que la mayor barrera para el crecimiento profesional no es la falta de talento, sino la falta de <strong className="text-navy">guía práctica y accesible</strong>.
                </p>
                <p>
                  Por eso creé una metodología enfocada en lo esencial: aprender haciendo, con ejemplos reales, sin rodeos. Mis estudiantes dominan herramientas clave en tiempo récord porque el aprendizaje tiene que ser <strong className="text-navy">práctico, rápido y sencillo</strong>.
                </p>
                <p>
                  Tanto si eres profesional buscando destacar en tu empresa como si apenas estás comenzando, tengo el curso o la clase personalizada indicada para ti.
                </p>
              </div>

              {/* Experience proof */}
              <div className="mt-8 p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="text-sm font-bold text-navy uppercase tracking-widest mb-4">Experiencia demostrada en</h3>
                <div className="flex flex-wrap gap-3">
                  {['LinkedIn', 'Classgap'].map((platform) => {
                    const link = platform === 'LinkedIn'
                      ? 'https://www.linkedin.com/in/javier-contreras-analista-de-datos/'
                      : 'https://www.classgap.com/es-co/tutor/javier-contreras-aristizabal'
                    return (
                      <a
                        key={platform}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-700 hover:border-primary/40 hover:text-primary hover:shadow-md transition-all duration-200 text-xs font-semibold"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Ver perfil en {platform}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right: Philosophy card */}
            <div className="space-y-6">
              <div className="p-8 lg:p-10 rounded-[2rem] bg-navy text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <h3 className="text-lg lg:text-xl font-bold mb-5 flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  Mi Filosofía
                </h3>
                <p className="text-slate-300 leading-relaxed italic text-sm lg:text-base border-l-4 border-primary pl-5">
                  "No se trata de memorizar fórmulas, se trata de entender qué problema estás resolviendo. Cuando aprendes así, el conocimiento se queda contigo para siempre."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                  <p className="text-3xl font-bold text-primary mb-1">4.9</p>
                  <div className="flex justify-center gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Valoración media</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                  <p className="text-3xl font-bold text-primary mb-1">100%</p>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mt-4">Enfoque práctico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERRAMIENTAS ── */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-navy mb-4 tracking-tight">
              Herramientas que enseño
            </h2>
            <p className="text-slate-500 text-sm lg:text-base max-w-2xl mx-auto">
              Domina las herramientas más demandadas del mercado laboral en análisis y visualización de datos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-primary/30 shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  {t.icon}
                </div>
                <h3 className="text-base font-bold text-navy mb-3 group-hover:text-primary transition-colors">{t.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 lg:py-24 bg-primary text-white mx-4 lg:mx-6 rounded-[2rem] lg:rounded-[3rem] shadow-2xl shadow-primary/20 relative overflow-hidden mb-12">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight">
            ¿Listo para dominar los datos?
          </h2>
          <p className="text-white/80 text-sm lg:text-base mb-8 lg:mb-10 max-w-xl mx-auto leading-relaxed">
            Explora mis cursos o contáctame para una clase personalizada. Aprende a tu ritmo, de forma práctica y sin complicaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cursos"
              id="cta-explorar-cursos"
              className="px-8 py-3.5 bg-navy hover:bg-navy/90 text-white font-bold rounded-xl transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group text-sm"
            >
              Explorar Cursos
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/#personalizadas"
              id="cta-clases-personalizadas"
              className="px-8 py-3.5 bg-white text-primary font-bold rounded-xl transition-all duration-300 hover:bg-slate-50 flex items-center justify-center text-sm"
            >
              Clase Personalizada
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
