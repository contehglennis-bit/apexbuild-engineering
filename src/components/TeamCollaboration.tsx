const principles = [
  {
    number: '01',
    title: 'Set the direction',
    description:
      'Understand client priorities and agree on the intended project outcome.',
  },
  {
    number: '02',
    title: 'Coordinate the details',
    description:
      'Align planning, engineering requirements and site needs.',
  },
  {
    number: '03',
    title: 'Keep the work moving',
    description:
      'Communicate progress, address issues and maintain attention to quality and the intended outcome.',
  },
]

function TeamCollaboration() {
  return (
    <section
      aria-labelledby="team-collaboration-heading"
      className="bg-brand-offwhite py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase sm:text-sm">
          How We Work Together
        </p>
        <h2
          id="team-collaboration-heading"
          className="mt-5 max-w-2xl text-3xl leading-[1.15] font-extrabold tracking-tight text-brand-charcoal sm:text-4xl"
        >
          One project. Shared responsibility.
        </h2>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-brand-gray sm:text-lg">
          Effective delivery depends on clear communication, defined
          responsibilities and a shared understanding of project goals.
        </p>

        <ol className="mt-12 grid gap-10 sm:mt-14 md:grid-cols-3 md:gap-8 lg:gap-12">
          {principles.map((principle) => (
            <li
              key={principle.number}
              className="border-t border-brand-charcoal/15 pt-6"
            >
              <p className="text-sm font-bold tracking-wider text-brand-orange">
                {principle.number}
              </p>
              <h3 className="mt-3 text-lg font-extrabold tracking-wide text-brand-charcoal uppercase sm:text-xl">
                {principle.title}
              </h3>
              <p className="mt-3 max-w-prose text-base leading-relaxed text-brand-gray">
                {principle.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default TeamCollaboration