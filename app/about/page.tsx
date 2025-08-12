// import Header from '@/components/Header'
import AboutCompanyHero from "../components/About/AboutCompanyHero"
import AboutSection from '../components/Home/AboutSection'
import AboutPetroleumSection from "../components/About/AboutCorevaultSection"
import Team from "../components/About/Team"
import Awards from "../components/About/Awards"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
        <AboutCompanyHero />
        <AboutSection />
        <AboutPetroleumSection />
        <Team />
        <Awards />
    </div>
  )
}
