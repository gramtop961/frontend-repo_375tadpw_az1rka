import { motion } from 'framer-motion'

const logos = ['aws', 'gcp', 'azure', 'slack', 'stripe', 'shopify']

export default function Logos() {
  return (
    <section className="py-12 border-t border-white/10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10 overflow-x-auto no-scrollbar py-2" aria-label="Trusted by">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="text-slate-400/80 text-sm uppercase tracking-widest"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
