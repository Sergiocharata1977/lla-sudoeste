import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[600px] md:min-h-[800px] flex items-center justify-center bg-[#5B2C83] overflow-hidden">
      {/* Background Pattern/Image Overlay */}
      <div className="absolute inset-0 bg-[url('/campo-del-sudoeste-chaco-argentina-atardecer.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5B2C83]/90 to-[#5B2C83]/70"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-8 flex justify-center">
          {/* Placeholder for Main Logo - using one from the list */}
          <img src="/Logos-lla/Logo LLA Chaco-02.png" alt="LLA Logo" className="h-32 md:h-48 drop-shadow-2xl" />
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase leading-none">
          LA LIBERTAD AVANZA
          <span className="block text-2xl md:text-4xl mt-4 font-bold tracking-widest text-[#d8baff]">SUDOESTE CHACO</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 max-w-3xl mx-auto">
          Una Argentina distinta es imposible con los mismos de siempre.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-[#5B2C83] hover:bg-gray-100 text-lg px-8 py-6 font-bold uppercase tracking-wider">
            Sumate Ahora
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-[#5B2C83] hover:bg-white/10 text-lg px-8 py-6 font-bold uppercase tracking-wider bg-transparent">
            Fiscalizá
          </Button>
        </div>
      </div>
    </section>
  )
}
