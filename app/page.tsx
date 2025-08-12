// import Header from '@/components/Header'
import Hero from './components/Home/Hero'
import AboutSection from './components/Home/AboutSection'
import ValuesSection from './components/Home/ValuesSection'
import ServicesSection from './components/Home/ServiceSection'
import TestimonialSection from './components/Home/TestimonialSection.tsx'
import FAQ from './components/Home/FAQ'
import Newsletter from './components/Home/Newslettter'
// import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
        <Hero />
        <AboutSection />
        <ValuesSection />
        <ServicesSection />
        <TestimonialSection />
        <FAQ />
        <Newsletter />
      {/* <Footer /> */}
    </div>
  )
}
