import AboutHero from '../components/AboutHero'
import CompanyStory from '../components/CompanyStory'
import Navbar from '../components/Navbar'
import WhatGuidesOurWork from '../components/WhatGuidesOurWork'

function About() {
  return (
    <>
      <Navbar startSolid />
      <main>
        <AboutHero />
        <CompanyStory />
        <WhatGuidesOurWork />
      </main>
    </>
  )
}

export default About