import teamHeroPlaceholder from '../assets/team-hero-placeholder.svg'

// Swap this for real photography during the dedicated image pass.
const teamHeroImage = { src: teamHeroPlaceholder, alt: '' }

function TeamHero() {
  return (
    <section className="bg-brand-offwhite pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-[55%_45%] lg:items-center lg:gap-16 lg:px-10">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase sm:text-sm">
            The Team
          </p>
          <h1 className="mt-5 max-w-xl text-4xl leading-[1.15] font-extrabold tracking-tight text-brand-charcoal sm:text-5xl">
            People behind the work.
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-brand-gray sm:text-lg">
            A multidisciplinary team bringing together leadership,
            engineering and site experience to move projects from planning
            to completion.
          </p>
        </div>

        <img
          src={teamHeroImage.src}
          alt={teamHeroImage.alt}
          className="mt-10 aspect-[4/3] w-full object-cover lg:mt-0 lg:aspect-[4/5]"
        />
      </div>
    </section>
  )
}

export default TeamHero