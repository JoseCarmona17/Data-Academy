import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Politicas() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [hash])

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8 lg:p-12">
          <h1 className="text-3xl lg:text-5xl font-bold text-navy mb-8">Políticas y Términos Legales</h1>
          
          <div className="prose prose-slate max-w-none space-y-12 text-slate-600">
            
            {/* ── SECCIÓN 1: PRIVACIDAD ── */}
            <section id="privacidad" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">01</span>
                Política de Privacidad (Habeas Data)
              </h2>
              <p className="mb-4">
                En cumplimiento de la <strong>Ley 1581 de 2012</strong> y el Decreto 1377 de 2013 de la República de Colombia, 
                <strong> EXCELSIOR UNLIMITED</strong> informa a los usuarios sobre su política de tratamiento de datos personales.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-navy">1.1 Finalidad del Tratamiento</h3>
                  <p>Los datos personales recolectados a través de nuestra plataforma serán utilizados para:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Gestionar el acceso a los cursos y contenidos educativos.</li>
                    <li>Enviar información sobre actualizaciones de los cursos o nuevas ofertas académicas.</li>
                    <li>Procesar transacciones y gestionar el soporte técnico.</li>
                    <li>Cumplir con obligaciones legales y contables.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-navy">1.2 Derechos del Titular</h3>
                  <p>Como titular de sus datos, usted tiene derecho a conocer, actualizar, rectificar y suprimir su información personal, así como revocar la autorización otorgada para su tratamiento, a través del correo electrónico de soporte proporcionado en la plataforma.</p>
                </div>
              </div>
            </section>

            {/* ── SECCIÓN 2: TÉRMINOS Y CONDICIONES ── */}
            <section id="terminos" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">02</span>
                Términos y Condiciones de Uso
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-navy">2.1 Propiedad Intelectual</h3>
                  <p>Todo el contenido disponible en EXCELSIOR UNLIMITED (videos, guías, plantillas de Excel, códigos de Power BI) es propiedad intelectual de su respectivo autor y está protegido por las leyes de derecho de autor nacionales e internacionales. Está prohibida su reproducción total o parcial, así como su distribución sin autorización previa.</p>
                </div>
                <div>
                  <h3 className="font-bold text-navy">2.2 Acceso al Contenido</h3>
                  <p>El acceso a los cursos es personal e intransferible. El usuario se compromete a hacer un uso lícito de la plataforma y a no compartir sus credenciales de acceso con terceros.</p>
                </div>
                <div>
                  <h3 className="font-bold text-navy">2.3 Responsabilidad</h3>
                  <p>Excelsior Unlimited no se hace responsable por el uso que el estudiante dé a la información recibida. Los resultados profesionales dependen del esfuerzo y aplicación individual del usuario.</p>
                </div>
              </div>
            </section>

            {/* ── SECCIÓN 3: E-COMMERCE ── */}
            <section id="compras" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">03</span>
                Condiciones de Compra y Retracto
              </h2>
              <p className="mb-4 text-sm bg-slate-50 p-4 rounded-xl border border-slate-100 italic">
                De acuerdo con la <strong>Ley 1480 de 2011 (Estatuto del Consumidor)</strong>, regulamos las ventas a través de comercio electrónico.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-navy">3.1 Derecho de Retracto</h3>
                  <p>El usuario podrá ejercer su derecho de retracto dentro de los cinco (5) días hábiles siguientes a la compra, siempre que no haya visualizado más del 10% del contenido del curso, debido a la naturaleza digital de nuestros productos.</p>
                </div>
                <div>
                  <h3 className="font-bold text-navy">3.2 Reclamaciones</h3>
                  <p>Para cualquier PQR (Petición, Queja o Reclamo), el usuario puede contactarnos a través de los canales oficiales de comunicación indicados en el pie de página del sitio web.</p>
                </div>
              </div>
            </section>

            <div className="pt-8 border-t border-slate-100 text-xs text-slate-400 text-center">
              Última actualización: {new Date().toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
