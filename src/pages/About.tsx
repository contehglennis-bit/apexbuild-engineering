import AboutHero from '../components/AboutHero'
import CompanyStory from '../components/CompanyStory'
import HowWeWork from '../components/HowWeWork'
import Navbar from '../components/Navbar'
import TeamPreview from '../components/TeamPreview'
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
        <TeamPreview />
      </main>
    </>
  )
}

export default About