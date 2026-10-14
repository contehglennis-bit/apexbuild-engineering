import Navbar from '../components/Navbar'
import TeamCollaboration from '../components/TeamCollaboration'
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
        <TeamCollaboration />
      </main>
    </>
  )
}

export default Team