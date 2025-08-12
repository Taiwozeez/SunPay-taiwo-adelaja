// import Header from '@/components/Header'
import QuoteHero from "../components/Quote/QuoteHero"
import QuoteAbout from "../components/Quote/QuoteAbout"
import Gallery from "../components/Quote/Gallery"
import TestimonialSection from "../components/Home/TestimonialSection.tsx"
import QuoteProject from "../components/Quote/QuoteProject"
import RequestQuota from "../components/Services/RequestQuota"



export default function Quote() {
  return (
    <div className="min-h-screen bg-white">
        <QuoteHero />
        <QuoteAbout />
        <Gallery />
        <TestimonialSection />
        <QuoteProject />
        <RequestQuota />
        
        
    </div>
  )
}
