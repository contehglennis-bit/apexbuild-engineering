import { Link } from 'react-router-dom'
import projectsPlaceholder from '../assets/projects-placeholder.svg'

// Swap this for real project photography during the dedicated image pass.
const projectImage = { src: projectsPlaceholder, alt: '' }

const projects = [
  {
    id: 'hill-station-office-complex',
    number: '01',
    name: 'Hill Station Office Complex',
    category: 'Commercial Construction',
    location: 'Freetown, Sierra Leone',
  },
  {
    id: 'regent-road-drainage-upgrade',
    number: '02',
    name: 'Regent Road Drainage Upgrade',
    category: 'Civil Engineering',
    location: 'Freetown, Sierra Leone',
  },
  {
    id: 'wilkinson-road-residence',
    number: '03',
    name: 'Wilkinson Road Residence',
    category: 'Renovation & Refurbishment',
    location: 'Freetown, Sierra Leone',
  },
] as const

// Small local helper, used 3 times below, to avoid repeating this markup
// three times in this one file. Not a shared/exported component.
function ProjectTile({
  project,
  aspectClassName,
}: {
  project: (typeof projects)[number]
  aspectClassName: string
}) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className={`group relative block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy ${aspectClassName}`}
    >
      <img
        src={projectImage.src}
        alt={projectImage.alt}
        className="h-full w-full object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-105"
      />

      {/* Gradient keeps the text readable over any image, and darkens slightly on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/20 to-transparent transition-opacity duration-300 motion-reduce:transition-none group-hover:from-brand-navy/95" />

      <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
        <p className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase">
          {project.number}
        </p>
        <h3 className="mt-2 text-xl font-extrabold tracking-tight sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-2 text-sm font-semibold tracking-wider text-white/80 uppercase">
          {project.category}
        </p>
        <p className="text-sm text-white/70">{project.location}</p>
        <p className="mt-4 text-sm font-bold tracking-wider text-white/70 uppercase decoration-brand-orange decoration-2 underline-offset-4 transition-colors duration-300 motion-reduce:transition-none group-hover:text-white group-hover:underline">
          View project <span aria-hidden="true">→</span>
        </p>
      </div>
    </Link>
  )
}

function FeaturedProjects() {
  const [primary, secondary, tertiary] = projects

  return (
    <section
      aria-labelledby="projects-heading"
      className="bg-brand-offwhite py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase sm:text-sm">
          Featured Projects
        </p>
        <h2
          id="projects-heading"
          className="mt-5 max-w-2xl text-3xl leading-[1.15] font-extrabold tracking-tight text-brand-charcoal sm:text-4xl"
        >
          Selected work
        </h2>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-brand-gray sm:text-lg">
          A look at projects we've planned, managed and delivered.
        </p>

        <div className="mt-12 flex flex-col gap-6 lg:grid lg:grid-cols-[63%_37%] lg:gap-6">
          <ProjectTile
            project={primary}
            aspectClassName="aspect-[4/3] lg:aspect-[4/5]"
          />
          <div className="flex flex-col gap-6">
            <ProjectTile
              project={secondary}
              aspectClassName="aspect-[4/3] lg:aspect-[16/10]"
            />
            <ProjectTile
              project={tertiary}
              aspectClassName="aspect-[4/3] lg:aspect-[16/10]"
            />
          </div>
        </div>

        <div className="mt-12 border-t border-brand-charcoal/10 pt-8 sm:mt-16">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-brand-navy uppercase decoration-brand-orange decoration-2 underline-offset-8 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
          >
            View all projects <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects