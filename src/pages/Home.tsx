import CompanyIntro from '../components/CompanyIntro'
import FeaturedProjects from '../components/FeaturedProjects'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import OurApproach from '../components/OurApproach'
import Services from '../components/Services'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CompanyIntro />
        <Services />
        <FeaturedProjects />
        <OurApproach />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default Home