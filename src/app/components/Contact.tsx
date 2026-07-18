import { motion } from "motion/react";
import { Mail, MapPin, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (text: string, item: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopiedItem(item);
        setTimeout(() => setCopiedItem(null), 2000);
      } catch { /* silent */ }
      document.body.removeChild(textarea);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "admv2119@gmail.com",
      link: "mailto:admv2119@gmail.com",
      copyable: true,
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "0426 571 2119",
      link: "tel:04265712119",
      copyable: true,
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Caracas, Venezuela",
      link: "#",
      copyable: false,
    },
  ];

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111418]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#E8354A]/10 border border-[#E8354A]/30 text-[#E8354A] text-sm font-medium mb-4 tracking-wide">
            Contacto
          </span>
          <h2 className="text-4xl sm:text-5xl mb-4 text-white">Datos de contacto</h2>
          <div className="w-12 h-0.5 bg-[#E8354A] mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No dudes en comunicarte por cualquier duda, detalle o nota que tengas.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-between gap-4 p-6 bg-[#1a1d23] rounded-xl border border-gray-800 hover:border-[#E8354A]/30 transition-colors"
              >
                <a href={info.link} className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8354A] to-[#A01830] rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-0.5 text-white">{info.title}</h4>
                    <p className="text-gray-400 text-sm">{info.value}</p>
                  </div>
                </a>
                {info.copyable && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      copyToClipboard(info.value, info.title);
                    }}
                    className="p-2.5 bg-gray-800 rounded-lg hover:bg-[#E8354A]/20 hover:border-[#E8354A]/30 border border-transparent transition-colors text-gray-400 hover:text-[#E8354A]"
                    title="Copiar al portapapeles"
                  >
                    {copiedItem === info.title ? (
                      <Check size={18} className="text-[#E8354A]" />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
