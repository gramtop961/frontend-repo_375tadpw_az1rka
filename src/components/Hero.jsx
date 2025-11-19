import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-[20%] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.25),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(2,6,23,0.4),rgba(2,6,23,0.8))]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            >
              Automation that scales with your business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-6 text-lg text-slate-300"
            >
              We design, build and run AI-powered systems that streamline operations, reduce costs and unlock growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#contact" className="inline-flex items-center rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors">Talk to us</a>
              <a href="#services" className="inline-flex items-center rounded-full border border-white/30 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors">Explore services</a>
            </motion.div>

            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              {[
                ['200+', 'Automations'],
                ['40%', 'Cost savings'],
                ['24/7', 'Reliability'],
              ].map(([stat, label]) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-2xl font-bold text-white">{stat}</div>
                  <div className="text-slate-400 text-xs mt-1">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.2),transparent_30%)]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="w-[85%] h-[85%] rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6">
                  <div className="h-full rounded-xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
