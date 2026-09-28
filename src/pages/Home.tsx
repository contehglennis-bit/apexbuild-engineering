import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* TEMPORARY test block: replaced by the Hero in a later part */}
        <div className="h-[150vh] bg-brand-gray pt-32 text-white">
          <h1 className="px-6 text-4xl font-bold">ApexBuild Engineering</h1>
        </div>
      </main>
    </>
  )
}

export default Home