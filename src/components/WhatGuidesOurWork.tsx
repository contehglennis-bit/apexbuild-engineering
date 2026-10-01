const principles = [
  {
    number: '01',
    title: 'Understand First',
    description:
      'Every project starts with understanding the requirements, site, constraints and intended outcome.',
  },
  {
    number: '02',
    title: 'Keep It Practical',
    description:
      'Good engineering should translate into solutions that make sense in the real world.',
  },
  {
    number: '03',
    title: 'Deliver With Care',
    description:
      'Planning matters, but so does execution. We pay attention to the details that shape the finished result.',
  },
]

function WhatGuidesOurWork() {
  return (
    <section
      aria-labelledby="guides-heading"
      className="bg-brand-navy py-16 text-white sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase sm:text-sm">
          What Guides Our Work
        </p>
        <h2
          id="guides-heading"
          className="mt-5 max-w-2xl text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-4xl"
        >
          Good projects start with good thinking.
        </h2>

        <div className="mt-14 max-w-3xl border-t border-white/10 sm:mt-16">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="border-b border-white/10 py-10 sm:py-12"
            >
              <span className="block h-0.5 w-10 bg-brand-orange" />
              <p className="mt-5 text-sm font-bold text-white/40">
                {principle.number}
              </p>
              <h3 className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl">
                {principle.title}
              </h3>
              <p className="mt-3 max-w-prose text-base leading-relaxed text-white/70 sm:text-lg">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatGuidesOurWork