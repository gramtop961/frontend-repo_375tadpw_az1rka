import { motion } from 'framer-motion'
import { Bot, Workflow, LineChart, Cog, Shield, Timer } from 'lucide-react'

const services = [
  { icon: Bot, title: 'AI Assistants', desc: 'Custom agents that handle support, sales and internal workflows.' },
  { icon: Workflow, title: 'Process Automation', desc: 'End-to-end automation with robust monitoring and alerts.' },
  { icon: LineChart, title: 'Data & Analytics', desc: 'Dashboards and pipelines that turn data into decisions.' },
  { icon: Cog, title: 'System Integration', desc: 'Connect your CRM, ERP, email, chat and custom tools.' },
  { icon: Shield, title: 'Governance & Security', desc: 'Role-based control, audit trails and compliance built-in.' },
  { icon: Timer, title: '24/7 Reliability', desc: 'SLA-backed operations with proactive incident response.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            What we do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-slate-400"
          >
            Expert-led automation programs built for real business outcomes.
          </motion.p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.02 * idx }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 hover:from-white/10 hover:to-white/5 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white grid place-items-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
