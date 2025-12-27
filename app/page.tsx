import { Hero } from '@/components/hero'
import { ThreeColumns } from '@/components/three-columns'
import { Commitment } from '@/components/commitment'
import { CallToAction } from '@/components/call-to-action'
import { About } from '@/components/about'
import { News } from '@/components/news'
import { Agenda } from '@/components/agenda'
import { Join } from '@/components/join'
import { Contact } from '@/components/contact'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ThreeColumns />
      <Commitment />
      <CallToAction />
      <About />
      <News />
      <Agenda />
      <Join />
      <Contact />
      <Footer />
    </div>
  )
}
