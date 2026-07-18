import { Heart, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0d0f12] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">Portfolio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Portafolio académico y profesional: Documentando mi
              evolución en el PNF en Informática a través del desarrollo
              de software, la automatización y la eficiencia de sistemas.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-4">Navegación</h3>
            <ul className="space-y-2">
              {[
                { label: "Inicio",     href: "#inicio" },
                { label: "Sobre mí",  href: "#sobre-mi" },
                { label: "Proyectos", href: "#proyectos" },
                { label: "Contacto",  href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#E8354A] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-4">Contacto Directo</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <Mail size={14} className="text-[#E8354A] flex-shrink-0" />
                admv2119@gmail.com
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <Phone size={14} className="text-[#E8354A] flex-shrink-0" />
                0426 571 2119
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <MapPin size={14} className="text-[#E8354A] flex-shrink-0" />
                Caracas, Venezuela
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-2">
            Desarrollado con{" "}
            <Heart size={14} className="text-[#E8354A]" /> por
            Martinez, Aarón © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
