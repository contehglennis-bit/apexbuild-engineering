import approachPlaceholder from '../assets/approach-placeholder.svg'

// Swap this for real photography during the dedicated image pass.
const approachImage = { src: approachPlaceholder, alt: '' }

const stages = [
  {
    number: '01',
    title: 'Understand',
    description:
      "Understand the client's requirements, project goals, site conditions and constraints.",
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'Develop a practical approach covering scope, coordination, resources and execution.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Coordinate construction and site activities with attention to quality, safety and progress.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'Bring the work through completion toward inspection, handover and the intended outcome.',
  },
]

function OurApproach() {
  return (
    <section
      aria-labelledby="approach-heading"
      className="bg-brand-navy py-16 text-white sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-[45%_55%] lg:items-center lg:gap-16 lg:px-10">
        {/* Image */}
        <img
          src={approachImage.src}
          alt={approachImage.alt}
          className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
        />

        {/* Content */}
        <div className="mt-10 lg:mt-0">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase sm:text-sm">
            Our Approach
          </p>
          <h2
            id="approach-heading"
            className="mt-5 max-w-md text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-4xl"
          >
            From planning to completion.
          </h2>

          <ol className="mt-10 border-t border-white/10">
            {stages.map((stage) => (
              <li
                key={stage.number}
                tabIndex={0}
                className="group border-b border-white/10 py-6 outline-none"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-bold text-white/40 transition-colors duration-200 motion-reduce:transition-none group-hover:text-brand-orange group-focus-visible:text-brand-orange">
                    {stage.number}
                  </span>
                  <span className="text-lg font-bold tracking-tight text-white transition-colors duration-200 motion-reduce:transition-none sm:text-xl">
                    {stage.title}
                  </span>
                </div>
                <p className="mt-2 max-w-prose pl-9 text-sm leading-relaxed text-white/70 sm:text-base">
                  {stage.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default OurApproach