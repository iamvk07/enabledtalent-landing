import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Solutions from '@/components/Solutions'
import HowItWorks from '@/components/HowItWorks'
import Trust from '@/components/Trust'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Solutions />
        <HowItWorks />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
