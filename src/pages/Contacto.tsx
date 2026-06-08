import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteSettings } from '../data/seed';
import { GlassCard } from '../components/GlassCard';
import { PremiumPageHero } from '../components/PremiumPageHero';
import { MessageSquare, Phone, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

// Import background WebP scenes
import webConversionScene from '../assets/backgrounds/web-conversion-scene.webp';

export function Contacto() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const contactExpectations = [
    {
      title: "Diga que ruta necesita",
      body: "Emprender, ordenar un tramite o aprender primero: esa diferencia cambia el siguiente paso.",
    },
    {
      title: "Comparta el contexto basico",
      body: "Si ya tiene documentos, fechas importantes o dudas concretas, incluyalas desde el inicio.",
    },
    {
      title: "Avance por el canal correcto",
      body: "Si detectamos complejidad legal, la ruta responsable es escalar a abogado u organizacion autorizada.",
    },
  ];

  const whatsappMessage = encodeURIComponent("Hola America Tramites. Quiero clasificar mi ruta: emprender, tramite o aprender gratis.");
  const whatsappHref = `https://wa.me/${siteSettings.whatsapp}?text=${whatsappMessage}`;
  const serviceLabels: Record<string, string> = {
    emprender: "emprender preparando formularios",
    tramite: "apoyo administrativo con un tramite",
    gratis: "aprender gratis antes de decidir",
    complejo: "clasificar un caso que puede ser complejo",
    otro: "otra necesidad",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) return;
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormData({ name: '', phone: '', service: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <>
      <PremiumPageHero
        eyebrow="Contacto"
        title="Cuéntenos qué ruta necesita"
        description="Comparta si quiere emprender, ordenar un trámite o aprender antes de decidir. Le responderemos con una clasificación inicial clara y responsable."
        intent="conversion"
      />

      {/* EXPECTATIVAS ANTES DE ESCRIBIR */}
      <section className="w-full relative py-16 overflow-hidden z-20 border-b border-white/5 bg-[#050B14]">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Antes de escribir</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Un mensaje claro nos ayuda a separar formación, apoyo administrativo y posibles casos que deben revisarse por un canal legal autorizado.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactExpectations.map((item, index) => (
              <GlassCard key={index} glowColor="rgba(59, 130, 246, 0.1)" className="p-8">
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL: CANALES Y FORMULARIO */}
      <section className="w-full relative py-24 overflow-hidden z-20">
        {/* Background WebP */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15] mix-blend-overlay"
            style={{ backgroundImage: `url(${webConversionScene})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] via-transparent to-[#050B14]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10">

            {/* CANALES RAPIDOS */}
            <div className="space-y-6">
              <div className="text-left mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">CANALES</span>
                <h2 className="text-3xl font-extrabold text-white mt-1">Elija cómo quiere iniciar</h2>
                <p className="text-slate-400 text-sm mt-2">Puede empezar con WhatsApp si quiere velocidad o usar el formulario si necesita dejar más contexto.</p>
              </div>

              {/* WhatsApp */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="block hover:scale-[1.01] transition-transform"
              >
                <GlassCard className="p-6 flex items-start gap-4" glowColor="rgba(34,197,94,0.15)">
                  <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center text-green-400 shrink-0">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-green-400">WhatsApp</h4>
                    <p className="text-xl font-bold text-white mt-1">Clasificar mi ruta</p>
                    <p className="text-slate-400 text-xs mt-2">Ideal para separar programa, trámite, recursos gratuitos o escalamiento responsable.</p>
                  </div>
                </GlassCard>
              </a>

              {/* Telefono y Oficina */}
              <GlassCard className="p-6 flex items-start gap-4" glowColor="rgba(59, 130, 246, 0.05)">
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                  <Phone size={24} />
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">Teléfono y oficina</h4>
                    <a href={`tel:${siteSettings.phone}`} className="text-xl font-bold text-white block mt-1 hover:text-blue-300 transition-colors">
                      {siteSettings.phone}
                    </a>
                  </div>
                  <div className="flex gap-2 text-slate-400 text-xs">
                    <MapPin size={16} className="text-slate-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">{siteSettings.address}</p>
                      <p className="mt-1">{siteSettings.hours}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Que incluir */}
              <GlassCard className="p-6" glowColor="rgba(255,255,255,0.02)">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">Qué conviene incluir</h4>
                <ul className="space-y-2 text-slate-400 text-xs">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <span>Si quiere emprender, ordenar un tramite o aprender gratis.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <span>Documentos que ya reunió o que le faltan, si aplica.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <span>Si hay corte, detención, deportación, antecedentes o urgencia.</span>
                  </li>
                </ul>
              </GlassCard>
            </div>

            {/* FORMULARIO DE CONTACTO */}
            <GlassCard className="p-8 md:p-10 relative overflow-hidden" glowColor="rgba(190,0,0,0.1)">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-3xl font-extrabold text-white">Cuéntenos qué necesita ordenar</h2>
                      <p className="text-slate-400 text-sm mt-2">
                        Este formulario funciona mejor cuando describe su intención, menciona el contexto básico y nos deja un canal claro para responderle.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <label className="grid gap-2 text-sm font-semibold text-slate-300">
                        Nombre completo
                        <input
                          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-normal text-white focus:outline-none focus:border-red-500 transition-colors"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ej. Juan Pérez"
                        />
                      </label>
                      <label className="grid gap-2 text-sm font-semibold text-slate-300">
                        Teléfono
                        <input
                          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-normal text-white focus:outline-none focus:border-red-500 transition-colors"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Ej. (305) 555-0199"
                        />
                      </label>
                    </div>

                    <label className="grid gap-2 text-sm font-semibold text-slate-300">
                      Ruta que necesita
                      <select
                        className="rounded-xl border border-white/10 bg-[#050B14] px-4 py-3 font-normal text-white focus:outline-none focus:border-red-500 transition-colors"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Seleccione una opción</option>
                        <option value="emprender">Quiero emprender preparando formularios</option>
                        <option value="tramite">Necesito apoyo administrativo con un trámite</option>
                        <option value="gratis">Quiero aprender gratis antes de decidir</option>
                        <option value="complejo">Necesito clasificar un caso que puede ser complejo</option>
                        <option value="otro">Otro</option>
                      </select>
                    </label>

                    <label className="grid gap-2 text-sm font-semibold text-slate-300">
                      Mensaje / Contexto inicial
                      <textarea
                        className="min-h-32 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-normal text-white focus:outline-none focus:border-red-500 transition-colors placeholder:text-slate-600"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntenos si busca formación, apoyo con documentos o una clasificación responsable. Si aplica, mencione fechas, documentos y señales de complejidad..."
                      ></textarea>
                    </label>

                    <div className="flex items-start gap-3 rounded-xl border border-green-500/20 bg-green-500/5 p-4 text-left">
                      <ShieldCheck className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-400 leading-relaxed">
                        America Tramites no brinda asesoría legal ni representación. Este contacto sirve para clasificar la necesidad y orientar el siguiente paso administrativo o de derivación responsable.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-b from-[#BE0000] to-[#800000] text-white font-bold rounded-xl shadow-[0_8px_20px_rgba(190,0,0,0.4)] hover:bg-[#a00000] transition-all text-base"
                    >
                      Solicitar clasificación inicial
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-extrabold text-white">¡Mensaje Enviado con Éxito!</h3>
                    <p className="text-slate-300 max-w-md mx-auto leading-relaxed">
                      Gracias {formData.name}. Hemos recibido tu solicitud sobre {serviceLabels[formData.service] ?? 'tu necesidad'}. Nos comunicaremos al {formData.phone} para darte una clasificación inicial.
                    </p>
                    <div className="pt-4 flex justify-center gap-4">
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all text-sm inline-flex items-center gap-2"
                      >
                        <MessageSquare size={16} /> Hablar por WhatsApp
                      </a>
                      <button
                        onClick={resetForm}
                        className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all text-sm"
                      >
                        Enviar otro mensaje
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
}
