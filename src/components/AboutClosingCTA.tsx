import { Link } from 'react-router-dom'

function AboutClosingCTA() {
  return (
    <section
      aria-labelledby="about-closing-cta-heading"
      className="bg-brand-navy py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase sm:text-sm">
          Working on something?
        </p>
        <h2
          id="about-closing-cta-heading"
          className="mt-5 max-w-xl text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-4xl"
        >
          Let's talk about your project.
        </h2>

        <Link
          to="/start-a-project"
          className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-brand-orange px-8 py-3.5 text-sm font-bold tracking-wider text-brand-navy uppercase hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Start a project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}

export default AboutClosingCTA