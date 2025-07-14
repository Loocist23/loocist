export default function Footer() {
  return (
    <footer className="w-full bg-zinc-900 text-zinc-400 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">&copy; 2025 Loocist. Tous droits réservés.</p>
        <div className="flex gap-4 text-sm">
          <a href="/mentions" className="hover:text-white transition-colors duration-150">Mentions légales</a>
          <a href="/contact" className="hover:text-white transition-colors duration-150">Contact</a>
        </div>
      </div>
    </footer>
  )
}
