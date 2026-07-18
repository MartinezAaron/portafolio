import { motion } from "motion/react";
import { Code2, Settings, Rocket, Terminal, GraduationCap, Layers } from "lucide-react";
import profileImage from "../../imports/image.png";

const pillars = [
  {
    icon: Code2,
    title: "Lógica y Estructura",
    description:
      "Escritura de código ordenado, mantenible y eficiente en Python, priorizando la resolución óptima de problemas complejos.",
  },
  {
    icon: Settings,
    title: "Automatización de Procesos",
    description:
      "Optimización de flujos de trabajo mediante scripts en Python y herramientas avanzadas en VBA aplicadas en entornos laborales reales.",
  },
  {
    icon: Rocket,
    title: "Rendimiento y Eficiencia",
    description:
      "Enfoque en la velocidad del software a través del estudio del hardware a bajo nivel para desarrollar soluciones ligeras y optimizadas.",
  },
];

const highlights = [
  { icon: GraduationCap, label: "PNF en Informática", sub: "UNETI · Cursando" },
  { icon: Terminal,      label: "Backend & Automatización", sub: "Python · VBA · Shell" },
  { icon: Layers,        label: "Arquitectura del Computador", sub: "Hardware · Bajo nivel" },
];

export function About() {
  return (
    <section id="sobre-mi" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1d23]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#E8354A]/10 border border-[#E8354A]/30 text-[#E8354A] text-sm font-medium mb-4 tracking-wide">
            Sobre mí
          </span>
          <h2 className="text-4xl sm:text-5xl text-white mb-4">Quién soy</h2>
          <div className="w-12 h-0.5 bg-[#E8354A] mx-auto" />
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#E8354A]/25 to-[#A01830]/10 blur-2xl" />
              {/* Corner frame accent */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-[#E8354A]/25" />
              <div className="absolute -top-2 -left-2 w-full h-full rounded-3xl border border-[#E8354A]/10" />
              <img
                src={profileImage}
                alt="Aaron Martinez"
                className="relative w-80 h-[420px] object-cover object-top rounded-3xl shadow-2xl border border-gray-700/60"
              />
              {/* Bottom-right badge */}
              <div className="absolute -bottom-5 -right-5 bg-[#111418] border border-[#E8354A]/30 rounded-2xl px-5 py-3 shadow-xl">
                <p className="text-xs text-[#E8354A] leading-none mb-1 font-medium">Estudiante</p>
                <p className="text-sm font-semibold text-white leading-none">PNF Informática</p>
              </div>
              {/* Top-left dot accent */}
              <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-[#E8354A]" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Soy estudiante del PNF en Informática con bases sólidas en Ingeniería de Sistemas
              y un profundo interés por el desarrollo Backend y la arquitectura de computadores.
              Mi camino en la tecnología combina la formación académica con una fuerte disciplina
              autodidacta, la cual nació en el entorno laboral automatizando procesos mediante
              scripts en Python y macros en VBA.
            </p>
            <p className="text-gray-400 leading-relaxed">
              El uso diario de la terminal transformó mi perspectiva, enseñándome a interactuar
              con los sistemas de forma directa y eficiente. Hoy en día, enfoco mis estudios en
              comprender cómo interactúa el software con el hardware a bajo nivel para construir
              soluciones digitales optimizadas, veloces y alineadas con los estándares de la industria.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Considero que para escribir software eficiente es indispensable entender la máquina
              que lo ejecuta. Por ello, actualmente perfecciono mis habilidades técnicas y
              metodologías de ingeniería, con el objetivo de titularme y aportar soluciones
              optimizadas, veloces y de alto nivel a los retos de la industria actual.
            </p>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              {highlights.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-[#111418] border border-gray-700/80 rounded-xl px-4 py-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#E8354A]/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-[#E8354A]" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold leading-none mb-0.5">{label}</p>
                    <p className="text-gray-500 text-xs leading-none">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mi aprendizaje y proyectos se sostienen sobre tres pilares esenciales:
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-[#111418] p-8 rounded-2xl border border-gray-800 hover:border-[#E8354A]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#E8354A]/5"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#E8354A] to-[#A01830] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <p.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
