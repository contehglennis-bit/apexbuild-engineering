import { Link } from 'react-router-dom'
import teamPortraitPlaceholder from '../assets/team-portrait-placeholder.svg'

// Swap each src for real photography during the dedicated image pass.
const portraitImage = { src: teamPortraitPlaceholder, alt: '' }

const teamMembers = [
  { name: 'David Kamara', role: 'Managing Director' },
  { name: 'Mariama Koroma', role: 'Project Engineer' },
  { name: 'Abdul Sesay', role: 'Site Supervisor' },
]

function TeamPreview() {
  return (
    <section
      aria-labelledby="team-preview-heading"
      className="bg-brand-offwhite py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase sm:text-sm">
          The People Behind the Work
        </p>
        <h2
          id="team-preview-heading"
          className="mt-5 max-w-2xl text-3xl leading-[1.15] font-extrabold tracking-tight text-brand-charcoal sm:text-4xl"
        >
          Built by people who care about the details.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 lg:mt-16 lg:gap-10">
          {teamMembers.map((member) => (
            <div key={member.name}>
              <img
                src={portraitImage.src}
                alt={portraitImage.alt}
                className="aspect-[4/5] w-full object-cover"
              />
              <p className="mt-5 text-lg font-extrabold tracking-tight text-brand-charcoal">
                {member.name}
              </p>
              <p className="mt-1 text-sm font-semibold tracking-wide text-brand-gray uppercase">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-brand-charcoal/10 pt-8 sm:mt-16">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-brand-navy uppercase decoration-brand-orange decoration-2 underline-offset-8 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
          >
            Meet the team <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TeamPreview