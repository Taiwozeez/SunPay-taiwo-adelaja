import Link from "next/link"
import Image from "next/image"

const AboutCompanyHero = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
      {/* Background image with opacity overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroimg3.jpg"
          alt="Company background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
        {/* Darker overlay for opacity */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
        <div className="flex items-center space-x-2 text-sm text-white mb-8 drop-shadow-md">
          <Link href="/" className="hover:text-orange-300 transition-colors">
            Home
          </Link>
          <span className="text-orange-400 mx-1">•</span>
          <span>Projects</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-md">
          Our Projects
        </h1>

        {/* Decorative elements */}
        {/* <div className="flex items-center space-x-4">
          <div className="w-20 h-1.5 bg-orange-500 drop-shadow-md"></div>
          <div className="w-12 h-1.5 bg-orange-500 drop-shadow-md"></div>
        </div> */}
      </div>
    </section>
  )
}

export default AboutCompanyHero
