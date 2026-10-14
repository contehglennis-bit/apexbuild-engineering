import Navbar from '../components/Navbar'
import TeamHero from '../components/TeamHero'
import TeamIntroduction from '../components/TeamIntroduction'

function Team() {
  return (
    <>
      <Navbar startSolid />
      <main>
        <TeamHero />
        <TeamIntroduction />
      </main>
    </>
  )
}

export default Team