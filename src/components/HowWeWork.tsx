const stages = [
  {
    number: '01',
    title: 'Understand',
    description:
      "We begin by understanding the client's requirements, project goals, site conditions and practical constraints before defining the direction of the work.",
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'We turn those requirements into a clear approach, considering scope, coordination, resources, timelines and how the work will be carried out.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We coordinate the work on site with attention to quality, safety, communication and progress, keeping the project moving according to the agreed direction.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'We bring the work through completion, inspection and handover, making sure the finished result meets the intended purpose.',
  },
]

function HowWeWork() {
  return (
    <section
      aria-labelledby="how-we-work-heading"
      className="bg-brand-offwhite py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase sm:text-sm">
          How We Work
        </p>
        <h2
          id="how-we-work-heading"
          className="mt-5 max-w-2xl text-3xl leading-[1.15] font-extrabold tracking-tight text-brand-charcoal sm:text-4xl"
        >
          From the first conversation to the finished project.
        </h2>

        <div className="relative mt-14 max-w-2xl sm:mt-16">
          {/* Continuous vertical line connecting the stages */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-4 w-px bg-brand-orange/40 sm:left-5"
          />

          <ol>
            {stages.map((stage, index) => (
              <li
                key={stage.number}
                className={`relative flex gap-6 pl-0 sm:gap-8 ${
                  index === stages.length - 1 ? 'pb-0' : 'pb-12 sm:pb-16'
                }`}
              >
                <span className="relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-brand-orange bg-brand-offwhite text-xs font-bold text-brand-navy sm:h-10 sm:w-10 sm:text-sm">
                  {stage.number}
                </span>
                <div className="pt-0.5">
                  <h3 className="text-xl font-extrabold tracking-tight text-brand-charcoal sm:text-2xl">
                    {stage.title}
                  </h3>
                  <p className="mt-3 max-w-prose text-base leading-relaxed text-brand-gray sm:text-lg">
                    {stage.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork