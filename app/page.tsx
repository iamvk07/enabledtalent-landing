import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import MediaMentions from '@/components/MediaMentions'
import Solutions from '@/components/Solutions'
import WINSection from '@/components/WINSection'
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
        <MediaMentions />
        <Solutions />
        <WINSection />
        <HowItWorks />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
