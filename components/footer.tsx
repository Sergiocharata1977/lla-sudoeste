export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-violet-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-extrabold mb-4">
              LIBERTAD <span className="text-[#bf9bf5]">AVANZA</span>
            </h3>
            <p className="text-gray-400">
              La libertad avanza desde el interior del Chaco.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#bf9bf5]">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">Principios</a></li>
              <li><a href="#noticias" className="hover:text-white transition-colors">Fiscalizá</a></li>
              <li><a href="#agenda" className="hover:text-white transition-colors">Galería</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#bf9bf5]">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Sudoeste del Chaco</li>
              <li>contacto@mileisudoeste.com</li>
              <li>@mileisudoeste</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} La Libertad Avanza Sudoeste Chaco. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
