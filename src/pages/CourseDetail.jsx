import { useParams, Link } from 'react-router-dom'
import { courses } from '../data/courses'
import { 
  Clock, 
  Users, 
  Star, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft,
  Calendar,
  Award,
  BookOpen
} from 'lucide-react'
import { useEffect } from 'react'

export default function CourseDetail() {
  const { id } = useParams()
  const course = courses.find(c => c.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!course) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-xl lg:text-2xl font-bold text-navy mb-4">Curso no encontrado</h2>
        <Link to="/cursos" className="text-primary font-bold hover:underline text-sm lg:text-base">Volver a cursos</Link>
      </div>
    )
  }

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* ── HEADER / HERO ── */}
      <section className="bg-slate-50 border-b border-slate-200 py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/cursos" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-bold mb-6 lg:mb-8 transition-colors text-xs lg:text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Cursos
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="order-last lg:order-first">
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest ${course.badgeColor} bg-white shadow-sm border border-slate-100`}>
                  {course.badge}
                </span>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs lg:text-sm font-bold text-navy">{course.rating}</span>
                </div>
              </div>
              
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight tracking-tight">
                {course.title}
              </h1>
              
              <p className="text-slate-500 text-base lg:text-xl leading-relaxed mb-8">
                {course.shortDesc}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-10">
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] lg:text-[10px] text-slate-400 font-bold uppercase tracking-widest">Duración</span>
                  <div className="flex items-center gap-2 text-navy font-bold text-xs lg:text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    {course.hours}
                  </div>
                </div>
                {/* <div className="flex flex-col gap-1">
                  <span className="text-[8px] lg:text-[10px] text-slate-400 font-bold uppercase tracking-widest">Estudiantes</span>
                  <div className="flex items-center gap-2 text-navy font-bold text-xs lg:text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    {course.students}
                  </div>
                </div> */}
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] lg:text-[10px] text-slate-400 font-bold uppercase tracking-widest">Nivel</span>
                  <div className="flex items-center gap-2 text-navy font-bold text-xs lg:text-sm">
                    <BookOpen className="w-4 h-4 text-primary" />
                    {course.level}
                  </div>
                </div>
                {/* <div className="flex flex-col gap-1">
                  <span className="text-[8px] lg:text-[10px] text-slate-400 font-bold uppercase tracking-widest">Certificado</span>
                  <div className="flex items-center gap-2 text-navy font-bold text-xs lg:text-sm">
                    <Award className="w-4 h-4 text-primary" />
                    Sí
                  </div>
                </div> */}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={course.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 lg:px-10 py-3 lg:py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl lg:rounded-2xl transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-1 text-sm lg:text-lg text-center"
                >
                  Ver oferta
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] lg:rounded-[2.5rem] blur-2xl rotate-3"></div>
              <div className="relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <img src={course.image} alt={course.title} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Main info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6 lg:mb-8">Descripción del Curso</h2>
              <div className="prose prose-slate max-w-none">
                <div className="text-slate-600 leading-relaxed text-sm lg:text-lg whitespace-pre-line bg-slate-50 p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-slate-100">
                  {course.description}
                </div>
              </div>
            </div>

            {/* Sidebar info */}
            <div className="space-y-6 lg:space-y-8 mt-17">
              <div className="p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-navy text-white shadow-2xl">
                <h3 className="text-lg lg:text-xl font-bold mb-6">Temario del Curso</h3>
                <div className="space-y-4">
                  {course.topics.map((t, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs lg:text-sm">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-slate-300">{t}</span>
                    </div>
                  ))}
                </div>
                {/* <button className="w-full mt-6 lg:mt-8 py-3 lg:py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 border border-white/10 text-xs lg:text-sm">
                  Descargar Syllabus
                </button> */}
              </div>

              {/* <div className="p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-slate-50 border border-slate-100">
                <h3 className="text-lg lg:text-xl font-bold text-navy mb-6">¿Qué incluye?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-xs lg:text-sm text-slate-600 font-medium">
                    <Calendar className="w-4 h-4 text-primary" />
                    Acceso de por vida
                  </li>
                  <li className="flex items-center gap-3 text-xs lg:text-sm text-slate-600 font-medium">
                    <Award className="w-4 h-4 text-primary" />
                    Certificado de finalización
                  </li>
                  <li className="flex items-center gap-3 text-xs lg:text-sm text-slate-600 font-medium">
                    <Users className="w-4 h-4 text-primary" />
                    Grupo privado de Telegram
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
