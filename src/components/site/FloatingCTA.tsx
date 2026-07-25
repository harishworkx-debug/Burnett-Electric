import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/business";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3"
        >
          <motion.a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-elegant hover:shadow-glow"
            aria-label="WhatsApp us"
          >
            <MessageCircle className="h-5 w-5" fill="currentColor" />
            <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
          </motion.a>
          <motion.a
            href={BUSINESS.phoneHref}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="pulse-ring flex items-center gap-2 rounded-full gradient-primary text-secondary pl-4 pr-5 py-3 shadow-glow font-semibold"
            aria-label="Call now"
          >
            <Phone className="h-5 w-5" />
            <span className="hidden sm:inline text-sm">Call Now</span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
