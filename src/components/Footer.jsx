export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-slate-950 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-300">
          <img src="/flame-icon.svg" alt="Logo" className="w-6 h-6" />
          <span>Netomate Clone</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#terms" className="hover:text-white">Terms</a>
          <span className="text-slate-500">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
