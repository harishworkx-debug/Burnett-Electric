import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`rounded-2xl border border-border bg-card shadow-card overflow-hidden ${isOpen ? "ring-2 ring-primary/30" : ""}`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between text-left px-6 py-5 gap-4"
            >
              <span className="font-display font-semibold text-secondary">{it.q}</span>
              <ChevronDown className={`h-5 w-5 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{it.a}</div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
