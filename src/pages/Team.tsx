import Navbar from '../components/Navbar'
import TeamHero from '../components/TeamHero'
import TeamIntroduction from '../components/TeamIntroduction'
import TeamProfiles from '../components/TeamProfiles'

function Team() {
  return (
    <>
      <Navbar startSolid />
      <main>
        <TeamHero />
        <TeamIntroduction />
        <TeamProfiles />
      </main>
    </>
  )
}

export default Team