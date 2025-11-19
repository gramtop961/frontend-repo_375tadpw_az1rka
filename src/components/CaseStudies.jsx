import { motion } from 'framer-motion'

const cases = [
  { title: 'Retail: Automated Returns', desc: 'Reduced handling time by 72% with AI triage and RPA.' },
  { title: 'Finance: KYC Automation', desc: 'Improved onboarding speed 3x while increasing compliance.' },
  { title: 'Logistics: Dispatch Optimisation', desc: 'Dynamic routing cut fuel costs by 18% across fleet.' },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
            >
              Proven outcomes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-slate-400 max-w-xl"
            >
              Highlights from recent engagements across key industries.
            </motion.p>
          </div>

          <a href="#contact" className="inline-flex items-center rounded-full border border-white/30 text-white px-4 py-2 text-sm font-medium hover:bg-white/10 transition-colors">
            View all
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900" />
              <div className="p-6">
                <h3 className="text-white font-semibold">{c.title}</h3>
                <p className="text-sm text-slate-400 mt-2">{c.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
