import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
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
