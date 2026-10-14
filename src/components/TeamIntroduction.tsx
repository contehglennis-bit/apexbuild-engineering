function TeamIntroduction() {
  return (
    <section
      aria-labelledby="team-intro-heading"
      className="bg-brand-offwhite py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-[40%_1px_60%] lg:items-start lg:gap-10 lg:px-10">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase sm:text-sm">
            How We Work Together
          </p>
          <h2
            id="team-intro-heading"
            className="mt-5 max-w-sm text-3xl leading-[1.15] font-extrabold tracking-tight text-brand-charcoal sm:text-4xl"
          >
            Different roles. One direction.
          </h2>
        </div>

        {/* Vertical divider: desktop only */}
        <div
          aria-hidden="true"
          className="hidden bg-brand-orange/40 lg:block lg:h-full"
        />

        <div className="mt-8 max-w-prose space-y-5 text-base leading-relaxed text-brand-gray sm:text-lg lg:mt-3">
          <p>
            ApexBuild brings together leadership, engineering and site
            coordination to keep projects moving from planning through
            delivery.
          </p>
          <p>
            Each role carries a different responsibility, but the work
            depends on clear communication and a shared focus on the
            project's requirements, quality and intended outcome.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TeamIntroduction