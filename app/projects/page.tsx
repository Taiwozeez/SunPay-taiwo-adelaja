// import Header from '@/components/Header'
import ProjectsHero from "../components/Projects/ProjectsHero"
import OurProjects from "../components/Projects/OurProjects"
import NewsletterProject from "../components/Projects/NewsletterProject"


export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
        <ProjectsHero />
        <OurProjects />
        <NewsletterProject />
        
    </div>
  )
}
