import CompanyIntro from '../components/CompanyIntro'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CompanyIntro />
      </main>
    </>
  )
}

export default Home