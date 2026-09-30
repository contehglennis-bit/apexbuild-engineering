import { Link } from 'react-router-dom'

function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-brand-navy py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase sm:text-sm">
          Ready to discuss your project?
        </p>

        <h2
          id="final-cta-heading"
          className="mt-5 text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
        >
          Let's build something that works.
        </h2>

        <p className="mx-auto mt-6 max-w-prose text-base leading-relaxed text-white/80 sm:text-lg">
          Tell us what you're planning, where you're starting from, and what
          you need to achieve.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            to="/start-a-project"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-brand-orange px-8 py-3.5 text-sm font-bold tracking-wider text-brand-navy uppercase hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Start a project <span aria-hidden="true">→</span>
          </Link>
        </div>

        <p className="mt-8">
          <Link
            to="/contact"
            className="text-sm font-semibold tracking-wide text-white/70 decoration-brand-orange decoration-2 underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Have a general question? Contact us{' '}
            <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  )
}

export default FinalCTA