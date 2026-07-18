import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen relative flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-[#111418] overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Red glow blobs */}
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #E8354A 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #E8354A 0%, transparent 70%)" }}
        />

        {/* Dot grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#E8354A" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Red wave mesh — right side, inspired by reference */}
        <svg
          viewBox="0 0 420 600"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[320px] sm:w-[420px] opacity-[0.13]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          {Array.from({ length: 14 }).map((_, row) =>
            Array.from({ length: 9 }).map((_, col) => {
              const cx = col * 50 + 10;
              const cy = row * 44 + 10 + (col % 2 === 0 ? 0 : 22);
              const r = 18 + Math.sin(row * 0.7 + col * 0.9) * 10;
              return (
                <circle
                  key={`${row}-${col}`}
                  cx={cx}
                  cy={cy}
                  r={r}
                  stroke="#E8354A"
                  strokeWidth="0.8"
                />
              );
            })
          )}
        </svg>

        {/* Horizontal accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8354A]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#E8354A]/10 border border-[#E8354A]/30 text-[#F07080] rounded-full px-5 py-1.5 mb-8 text-xs font-semibold tracking-wide uppercase"
        >
          Ingeniería en Informática · UNETI
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-white">
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-[#E8354A] to-[#F07080] bg-clip-text text-transparent">
              Martinez, Aarón
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-300 mb-8"
        >
          Estudiante de PNF Informática | Automatización y Desarrollo Backend
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Este portafolio presenta mi trabajo académico y profesional en desarrollo,
          demostrando competencias técnicas y capacidades de implementación.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col items-center"
        >
          <button
            onClick={() => {
              document.querySelector("#sobre-mi")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-[#E8354A] transition-colors"
          >
            <span className="text-sm tracking-wide">Descubre más</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
