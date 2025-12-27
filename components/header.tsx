'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#5B2C83] border-b border-violet-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Replace with actual Logo Image when executing */}
            <div className="text-2xl font-extrabold text-white">
              LIBERTAD <span className="text-white">AVANZA</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#inicio" className="text-white/90 hover:text-white font-medium transition-colors">
              Inicio
            </a>
            <a href="#nosotros" className="text-white/90 hover:text-white font-medium transition-colors">
              Principios
            </a>
            <a href="#noticias" className="text-white/90 hover:text-white font-medium transition-colors">
              Fiscalizá en tu provincia
            </a>
            <a href="#galeria" className="text-white/90 hover:text-white font-medium transition-colors">
              Galeria
            </a>
            <Button className="bg-white text-[#5B2C83] hover:bg-gray-100 font-bold">
              Sumate
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#inicio" className="text-white/90 hover:text-white font-medium transition-colors">
              Inicio
            </a>
            <a href="#nosotros" className="text-white/90 hover:text-white font-medium transition-colors">
              Principios
            </a>
            <a href="#noticias" className="text-white/90 hover:text-white font-medium transition-colors">
              Fiscalizá
            </a>
            <a href="#galeria" className="text-white/90 hover:text-white font-medium transition-colors">
              Galeria
            </a>
            <Button className="bg-white text-[#5B2C83] hover:bg-gray-100 w-full font-bold">
              Sumate
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
