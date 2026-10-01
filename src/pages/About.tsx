import AboutHero from '../components/AboutHero'
import CompanyStory from '../components/CompanyStory'
import HowWeWork from '../components/HowWeWork'
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
        <HowWeWork />
      </main>
    </>
  )
}

export default About