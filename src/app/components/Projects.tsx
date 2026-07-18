import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, Download, ChevronDown, FileText, Video, X, ExternalLink, Layout, BookOpen, Sparkles } from "lucide-react";
import comparativaImg from "../../imports/image-1.png";
import groverImg from "../../imports/image-2.png";
import bordeIaImg from "../../imports/image-3.png";
import tablaImg from "../../imports/image-4.png";
import comparativaPdf from "../../imports/comparativa_de_computadoras_modernas_y_cuanticas-2.pdf";
import comparativaVideo from "../../imports/comparativa_de_computadoras_modernas_y_cuanticas-2.mp4";
import groverPdf from "../../imports/Infograf_a_El_Algoritmo_de_Grover-2.pdf";
import bordeIaPdf from "../../imports/Hacia_d_nde_corremos_-_La_redefinici_n_de_la_arquitectura_del_computador_en_la_era_del_borde_y_la_IA.docx.pdf";
import tablaPdf from "../../imports/tabla_herramientas_arquitectura_computador_compressed.pdf";
import cpuImg from "../../imports/cpu_cover.png";
import cpuPdf from "../../imports/identificacion_cpu.pdf";

type MediaType = "pdf" | "video" | "canva";

interface ViewItem {
  label: string;
  url: string;
  type: MediaType;
}

interface DownloadItem {
  label: string;
  url: string;
  icon: "pdf" | "video";
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  viewItems: ViewItem[];
  downloadLinks: DownloadItem[];
  learnings: string[];
}

const projects: Project[] = [
  {
    title: "Comparativa de Computadoras Modernas y Cuánticas",
    description:
      "Organizador gráfico que contrasta las arquitecturas, capacidades de procesamiento y paradigmas de operación de las computadoras clásicas y cuánticas. Examina cómo los qubits y la superposición cuántica amplían exponencialmente las posibilidades de cómputo frente a los bits convencionales.",
    tags: ["Actividad I", "Sección Didáctica 1"],
    image: comparativaImg,
    viewItems: [
      { label: "Ver PDF", url: comparativaPdf, type: "pdf" },
      { label: "Ver Video", url: comparativaVideo, type: "video" },
    ],
    downloadLinks: [
      { label: "Descargar PDF", url: "https://mega.nz/file/lkYEHYzC#C2dDsBX9NBsqjVeh5Srd_JWjxtuaLY3AP1sLwtPxypk", icon: "pdf" },
      { label: "Descargar Video", url: "https://mega.nz/file/k4gX1DaB#gJLM8LSagePfo-yFLZngjvrZXJtfSmsLjuAY8CrViGw", icon: "video" },
    ],
    learnings: [
      "Dos formas distintas de procesar información: comprendí que mientras las computadoras modernas trabajan de forma secuencial con bits (0 y 1), la computación cuántica utiliza cúbits, evaluando múltiples soluciones al mismo tiempo gracias a las leyes de la física cuántica.",
      "Fortalezas y limitaciones reales: las computadoras actuales son estables y confiables para tareas cotidianas, pero se quedan cortas ante problemas matemáticos masivos. Las cuánticas pueden resolver en minutos dilemas que tardarían miles de años, aunque actualmente son muy frágiles y requieren temperaturas extremas para funcionar.",
      "El software detrás de cada tecnología: pasamos de los lenguajes tradicionales como Python a entornos basados en circuitos cuánticos mediante herramientas especializadas, un contraste fascinante en la programación.",
      "Aplicaciones de impacto: el verdadero potencial cuántico no reemplazará nuestra computadora del día a día, sino que revolucionará sectores específicos como la simulación molecular para medicina, el estudio del clima y la seguridad informática avanzada.",
    ],
  },
  {
    title: "Infografía: El Algoritmo de Grover",
    description:
      "Infografía educativa sobre el Algoritmo de Grover, que logra búsqueda en bases de datos no estructuradas con complejidad O(√N) frente al O(N) clásico. Explica el uso de amplificación de amplitud, oráculos cuánticos y su impacto potencial en criptografía y optimización computacional.",
    tags: ["Actividad I", "Sección Didáctica 1"],
    image: groverImg,
    viewItems: [
      { label: "Ver PDF", url: groverPdf, type: "pdf" },
    ],
    downloadLinks: [
      { label: "Descargar PDF", url: "https://mega.nz/file/4sQiTQzY#3Tr_Bs-1dGCH4EQonXcKdVSLs81XYYxURCZMyWQ__nc", icon: "pdf" },
    ],
    learnings: [
      "Búsqueda simultánea: a diferencia del método clásico que revisa elemento por elemento, este algoritmo evalúa todos los datos a la vez, reduciendo drásticamente el número de intentos necesarios.",
      "El efecto embudo: el sistema cuántico descarta las opciones incorrectas entre sí para hacer que la respuesta correcta destaque y aparezca de inmediato, como una tómbola que filtra sola los resultados incorrectos.",
      "Manipulación matemática: funciona cargando todos los datos, «marcando» la respuesta buscada y maximizando su probabilidad antes de medir el resultado final.",
      "Aplicación práctica: tiene un enorme impacto para agilizar la seguridad informática (criptografía), optimizar rutas logísticas complejas y analizar grandes volúmenes de datos.",
    ],
  },
  {
    title: "¿Hacia dónde corremos? La redefinición de la arquitectura del computador en la era del borde y la IA",
    description:
      "Ensayo crítico que reflexiona sobre el futuro de la ingeniería en informática frente a la irrupción del edge computing y la inteligencia artificial. Analiza cómo estas tecnologías están redefiniendo los fundamentos de la arquitectura del computador.",
    tags: ["Actividad II", "Sección Didáctica 1"],
    image: bordeIaImg,
    viewItems: [
      { label: "Ver PDF", url: bordeIaPdf, type: "pdf" },
    ],
    downloadLinks: [
      { label: "Descargar PDF", url: "https://mega.nz/file/40xxwbbB#Zno_qgWMweZaK9QEbtrFPr5WXKa92imrzBHnHEjYLpY", icon: "pdf" },
    ],
    learnings: [
      "La migración hacia el «borde»: estamos pasando de procesar todo en una nube lejana a hacerlo en los mismos dispositivos finales (teléfonos, autos, equipos médicos) para evitar retrasos en el tiempo de respuesta.",
      "Chips especializados en IA: la necesidad de ejecutar inteligencia artificial en tiempo real está obligando a rediseñar las computadoras, integrando componentes nuevos como las Unidades de Procesamiento Neuronal (NPUs) en los dispositivos cotidianos.",
      "El dilema de la seguridad: al llevar el procesamiento a miles de dispositivos pequeños, también se crean miles de nuevos puntos débiles ante ciberataques. El reto del futuro no será solo hacer sistemas veloces, sino protegerlos desde su diseño.",
      "Escribir código con conciencia del entorno: las aplicaciones del futuro ya no correrán en entornos tradicionales, lo que me obliga como desarrollador a crear software altamente optimizado que se adapte a las limitaciones de energía y memoria de los dispositivos en el borde.",
    ],
  },
  {
    title: "Tabla de Herramientas para Arquitectura del Computador",
    description:
      "Tabla estructurada que clasifica y describe las principales herramientas, tecnologías y recursos empleados en el estudio de la arquitectura del computador. Consolida el conocimiento sobre componentes del sistema, niveles de memoria, unidades de procesamiento y su interacción a nivel de hardware y software.",
    tags: ["Actividad II", "Sección Didáctica 1"],
    image: tablaImg,
    viewItems: [
      { label: "Ver PDF", url: tablaPdf, type: "pdf" },
      /* { label: "Ver en Canva", url: "https://canva.link/8g22tkptanay3ub", type: "canva" },*/
    ],
    downloadLinks: [
      { label: "Descargar PDF", url: "https://mega.nz/file/g5BGgbKQ#jSMmqBf6tQicdDugdfdxLHnrAdiEytM3aJ9qbNh7tUc", icon: "pdf" },
    ],
    learnings: [
      "El equilibrio entre hardware y software: el mantenimiento y la ingeniería de equipos requieren dos mundos — herramientas físicas para ensamblar y medir, y programas especializados para simular y diagnosticar el comportamiento del procesador.",
      "Seguridad y precisión física: aprendí la importancia de usar implementos como la pulsera antiestática para cuidar los circuitos de descargas eléctricas, además de dominar herramientas como el multímetro para revisar el flujo eléctrico en las piezas clave.",
      "Simulación del procesador: conocí herramientas que permiten diseñar circuitos digitales desde cero y simular cómo trabaja un procesador por dentro, ejecutando código a muy bajo nivel.",
      "Diagnóstico y rendimiento: comprendí cómo los monitores de sistema, depuradores y pruebas de rendimiento ayudan a evaluar la salud del equipo bajo estrés, permitiendo rastrear errores directamente en la memoria y el procesador.",
    ],
  },
  {
    title: "Identificación de la CPU",
    description:
      "Identificación del procesador en cuatro computadores reales -uno personal y tres del entorno de trabajo- usando únicamente herramientas de software del sistema operativo, sin abrir ningún equipo. Incluye una tabla comparativa de marca, modelo, generación, zócalo y características técnicas de cada CPU, además de recomendaciones de uso y cuidado.",
    tags: ["Actividad III", "Arquitectura del Computador"],
    image: cpuImg,
    viewItems: [
      { label: "Ver PDF", url: cpuPdf, type: "pdf" },
    ],
    downloadLinks: [
      { label: "Descargar PDF", url: cpuPdf, icon: "pdf" },
    ],
    learnings: [
      /* TODO: revisar y ajustar este borrador antes de publicar */
      "Identificar hardware sin abrir el equipo: descubrí que el sistema operativo por sí solo -con lscpu en Linux o el panel de Información del sistema en Windows- ya reporta el modelo exacto del procesador, sin necesidad de desarmar nada.",
      "Tres generaciones, una misma marca: comparar un Intel de 2011 (Sandy Bridge), uno de 2015 (Skylake) y uno de 2022 (Alder Lake-H) en la misma tabla me dejó ver de forma muy concreta cómo evolucionan los núcleos, la caché y el consumo de una generación a otra.",
      "El zócalo importa tanto como la velocidad: entender que los procesadores de escritorio (LGA 1155 / LGA 1151) se pueden reemplazar, mientras que el de la laptop (BGA 1744) queda soldado de por vida, cambió por completo cómo pienso el mantenimiento y la vida útil de cada tipo de equipo.",
      "El cuidado depende del equipo, no solo del procesador: en un equipo de escritorio con años de uso, la pasta térmica y la limpieza del disipador son claves; en una laptop con procesador soldado, la única forma real de cuidar la CPU es cuidar el equipo completo.",
    ],
  },
];

/* ─── Modal ─────────────────────────────────────────────────────────────── */

function ViewerModal({
  item,
  project,
  onClose,
}: {
  item: ViewItem;
  project: Project;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<"viewer" | "learnings">("viewer");
  const HEADER_H = 52;
  const TAB_H = 44;
  const contentH = `calc(90vh - ${HEADER_H + TAB_H}px)`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.93, opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="relative w-full max-w-5xl bg-[#1a1d23] rounded-2xl border border-gray-700 overflow-hidden shadow-2xl flex flex-col"
        style={{ height: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 border-b border-gray-700 flex-shrink-0"
          style={{ height: HEADER_H }}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            {item.type === "video" && <Video size={15} className="text-[#E8354A] flex-shrink-0" />}
            {item.type === "pdf"   && <FileText size={15} className="text-[#E8354A] flex-shrink-0" />}
            {item.type === "canva" && <Layout size={15} className="text-[#E8354A] flex-shrink-0" />}
            <span className="text-white text-sm font-medium truncate">{project.title}</span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 ml-3">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white text-xs transition-colors"
            >
              <ExternalLink size={12} />
              Abrir en pestaña
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div
          className="flex border-b border-gray-700 flex-shrink-0 bg-[#111418]"
          style={{ height: TAB_H }}
        >
          <button
            onClick={() => setTab("viewer")}
            className={`flex items-center gap-2 px-5 text-sm font-medium transition-colors border-b-2 ${
              tab === "viewer"
                ? "border-[#E8354A] text-[#E8354A]"
                : "border-transparent text-gray-400 hover:text-gray-200"
            }`}
          >
            <Eye size={14} />
            Visualizar
          </button>
          <button
            onClick={() => setTab("learnings")}
            className={`flex items-center gap-2 px-5 text-sm font-medium transition-colors border-b-2 ${
              tab === "learnings"
                ? "border-[#E8354A] text-[#E8354A]"
                : "border-transparent text-gray-400 hover:text-gray-200"
            }`}
          >
            <BookOpen size={14} />
            Lo que aprendí
          </button>
        </div>

        {/* Content */}
        <div style={{ height: contentH }} className="flex-1 overflow-hidden">
          {tab === "viewer" ? (
            <div style={{ width: "100%", height: "100%", background: "#000" }}>
              {item.type === "video" && (
                <video
                  src={item.url}
                  controls
                  autoPlay
                  style={{ width: "100%", height: "100%", display: "block" }}
                />
              )}
              {item.type === "pdf" && (
                <object
                  data={item.url}
                  type="application/pdf"
                  style={{ width: "100%", height: "100%", display: "block" }}
                >
                  <div className="flex flex-col items-center justify-center h-full gap-4 text-gray-400 bg-[#111418]">
                    <FileText size={48} className="text-gray-600" />
                    <p className="text-sm text-center px-4">
                      Tu navegador no puede mostrar el PDF directamente.
                    </p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#E8354A] hover:bg-[#D02A3F] text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={14} />
                      Abrir en nueva pestaña
                    </a>
                  </div>
                </object>
              )}
              {item.type === "canva" && (
                <iframe
                  src={item.url}
                  title={project.title}
                  allow="fullscreen"
                  style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                />
              )}
            </div>
          ) : (
            <div className="h-full overflow-y-auto bg-[#111418] p-6 sm:p-8">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-xl bg-[#E8354A]/15 flex items-center justify-center flex-shrink-0">
                    <Sparkles size={18} className="text-[#E8354A]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base leading-none mb-1">
                      Lo que aprendí
                    </h3>
                    <p className="text-gray-500 text-xs">Puntos clave de esta actividad</p>
                  </div>
                </div>

                <ol className="space-y-5">
                  {project.learnings.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      className="flex gap-4"
                    >
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#E8354A]/15 border border-[#E8354A]/25 flex items-center justify-center text-[#E8354A] text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-gray-300 text-sm leading-relaxed pt-1">{item}</p>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Card buttons ───────────────────────────────────────────────────────── */

function ProjectCard({ project }: { project: Project }) {
  const [viewOpen, setViewOpen] = useState(false);
  const [dlOpen, setDlOpen] = useState(false);
  const [activeView, setActiveView] = useState<ViewItem | null>(null);

  function openViewer(vi: ViewItem) {
    setViewOpen(false);
    setActiveView(vi);
  }

  const btnBase = "flex items-center justify-center gap-1.5 h-9 w-full rounded-lg text-xs font-medium transition-colors";

  return (
    <>
      <div className="bg-[#1a1d23] rounded-2xl border border-gray-800 overflow-visible hover:border-gray-600 transition-colors duration-300 flex flex-col">
        <div className="relative h-44 overflow-hidden rounded-t-2xl group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d23] via-transparent to-transparent" />
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-sm font-semibold text-white mb-2 leading-snug">
            {project.title}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 bg-[#E8354A]/10 text-[#F07080] border border-[#E8354A]/30 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Button row — always grid-cols-2 for perfect alignment */}
          <div className="grid grid-cols-2 gap-2">

            {/* Visualizar */}
            {project.viewItems.length === 1 ? (
              <button
                onClick={() => openViewer(project.viewItems[0])}
                className={`${btnBase} bg-[#E8354A] hover:bg-[#D02A3F] text-white`}
              >
                <Eye size={13} />
                Visualizar
              </button>
            ) : (
              <div className="relative">
                <button
                  onClick={() => { setViewOpen((v) => !v); setDlOpen(false); }}
                  className={`${btnBase} bg-[#E8354A] hover:bg-[#D02A3F] text-white`}
                >
                  <Eye size={13} />
                  Visualizar
                  <ChevronDown size={11} className={`transition-transform duration-200 ${viewOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {viewOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setViewOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.97 }}
                        transition={{ duration: 0.14 }}
                        className="absolute bottom-full mb-2 left-0 right-0 bg-[#0d1117] border border-gray-700 rounded-xl overflow-hidden shadow-2xl z-20"
                      >
                        {project.viewItems.map((vi) => (
                          <button
                            key={vi.label}
                            onClick={() => openViewer(vi)}
                            className="w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-gray-800 text-gray-300 hover:text-white text-xs transition-colors"
                          >
                            {vi.type === "video" && <Video size={13} className="text-[#E8354A]" />}
                            {vi.type === "pdf"   && <FileText size={13} className="text-[#E8354A]" />}
                            {vi.type === "canva" && <Layout size={13} className="text-[#E8354A]" />}
                            {vi.label}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Descargar */}
            {project.downloadLinks.length === 1 ? (
              <a
                href={project.downloadLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnBase} bg-gray-700 hover:bg-gray-600 text-gray-200`}
              >
                <Download size={13} />
                Descargar
              </a>
            ) : (
              <div className="relative">
                <button
                  onClick={() => { setDlOpen((v) => !v); setViewOpen(false); }}
                  className={`${btnBase} bg-gray-700 hover:bg-gray-600 text-gray-200`}
                >
                  <Download size={13} />
                  Descargar
                  <ChevronDown size={11} className={`transition-transform duration-200 ${dlOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {dlOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setDlOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.97 }}
                        transition={{ duration: 0.14 }}
                        className="absolute bottom-full mb-2 left-0 right-0 bg-[#0d1117] border border-gray-700 rounded-xl overflow-hidden shadow-2xl z-20"
                      >
                        {project.downloadLinks.map((dl) => (
                          <a
                            key={dl.label}
                            href={dl.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setDlOpen(false)}
                            className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-gray-800 text-gray-300 hover:text-white text-xs transition-colors"
                          >
                            {dl.icon === "video"
                              ? <Video size={13} className="text-[#E8354A]" />
                              : <FileText size={13} className="text-[#E8354A]" />}
                            {dl.label}
                          </a>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeView && (
          <ViewerModal
            item={activeView}
            project={project}
            onClose={() => setActiveView(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */

export function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111418]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#E8354A]/10 border border-[#E8354A]/30 text-[#E8354A] text-sm font-medium mb-4 tracking-wide">
            Proyectos
          </span>
          <h2 className="text-4xl sm:text-5xl mb-4 text-white">Proyectos Destacados</h2>
          <div className="w-12 h-0.5 bg-[#E8354A] mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Actividades académicas desarrolladas a lo largo de la unidad curricular.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
