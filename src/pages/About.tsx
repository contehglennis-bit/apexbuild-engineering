import AboutHero from '../components/AboutHero'
import CompanyStory from '../components/CompanyStory'
import Navbar from '../components/Navbar'

function About() {
  return (
    <>
      <Navbar startSolid />
      <main>
        <AboutHero />
        <CompanyStory />
      </main>
    </>
  )
}

export default About