import teamPortraitPlaceholder from '../assets/team-portrait-placeholder.svg'

// Swap this for real photography during the dedicated image pass.
const portraitImage = { src: teamPortraitPlaceholder, alt: '' }

const profiles = [
  {
    name: 'David Kamara',
    role: 'Managing Director',
    description:
      "David leads ApexBuild's direction, working to understand each client's priorities and keeping project direction and coordination aligned from planning through delivery.",
  },
  {
    name: 'Mariama Koroma',
    role: 'Project Engineer',
    description:
      'Mariama focuses on engineering requirements and practical planning, paying close attention to technical details and coordinating between project stages.',
  },
  {
    name: 'Abdul Sesay',
    role: 'Site Supervisor',
    description:
      'Abdul coordinates site activities and monitors progress, keeping quality and safety in view as the work takes shape on site.',
  },
]

function TeamProfiles() {
  return (
    <section
      aria-labelledby="team-profiles-heading"
      className="bg-brand-navy py-16 text-white sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase sm:text-sm">
          Meet the Team
        </p>
        <h2
          id="team-profiles-heading"
          className="mt-5 max-w-2xl text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-4xl"
        >
          Roles that move projects forward.
        </h2>

        <div className="mt-14 border-t border-white/10 sm:mt-16">
          {profiles.map((profile) => (
            <div
              key={profile.name}
              className="grid gap-6 border-b border-white/10 py-10 sm:py-12 lg:grid-cols-[18rem_1fr] lg:items-center lg:gap-14"
            >
              <img
                src={portraitImage.src}
                alt={portraitImage.alt}
                className="aspect-[4/5] w-44 object-cover sm:w-56 lg:w-full"
              />
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {profile.name}
                </h3>
                <p className="mt-2 text-sm font-bold tracking-[0.15em] text-brand-orange uppercase">
                  {profile.role}
                </p>
                <p className="mt-5 max-w-prose text-base leading-relaxed text-white/70 sm:text-lg">
                  {profile.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamProfiles