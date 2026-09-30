import CompanyIntro from '../components/CompanyIntro'
import FeaturedProjects from '../components/FeaturedProjects'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
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
      </main>
    </>
  )
}

export default Home