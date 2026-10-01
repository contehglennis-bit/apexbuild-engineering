import aboutStoryPlaceholder from '../assets/about-story-placeholder.svg'

// Swap this for real photography during the dedicated image pass.
const storyImage = { src: aboutStoryPlaceholder, alt: '' }

function CompanyStory() {
  return (
    <section
      aria-labelledby="company-story-heading"
      className="bg-brand-offwhite py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-[45%_55%] lg:items-center lg:gap-16 lg:px-10">
        <img
          src={storyImage.src}
          alt={storyImage.alt}
          className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
        />

        <div className="mt-10 lg:mt-0">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase sm:text-sm">
            Who we are
          </p>
          <h2
            id="company-story-heading"
            className="mt-5 max-w-xl text-3xl leading-[1.15] font-extrabold tracking-tight text-brand-charcoal sm:text-4xl"
          >
            Built around the work.
          </h2>

          <div className="mt-6 max-w-prose space-y-5 text-base leading-relaxed text-brand-gray sm:text-lg">
            <p>
              ApexBuild Engineering works across construction, civil
              engineering and project coordination, taking on the kind of
              work that depends on careful planning as much as skilled
              execution. Every project starts with understanding what a
              client actually needs, from the practical constraints of a
              site to the goals behind the build.
            </p>
            <p>
              From there, the focus shifts to developing a solution that
              fits, not a generic template. That means working through the
              details of scope, coordination and sequencing before ground is
              broken, so that the work on site can proceed with clarity
              rather than guesswork.
            </p>
            <p>
              Execution is treated with the same care as planning. Quality
              workmanship, attention to structural and technical detail, and
              consistent follow-through are what turn a set of drawings into
              a space that is genuinely useful and built to last.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStory