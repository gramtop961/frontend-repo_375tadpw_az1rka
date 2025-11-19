import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="py-24 border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 sm:p-14">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Ready to automate?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-slate-300"
          >
            Let’s map the quickest path to value for your organisation.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 grid md:grid-cols-3 gap-4"
          >
            <input className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Name" />
            <input className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Work email" />
            <button className="rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-slate-100 transition-colors">Get in touch</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
