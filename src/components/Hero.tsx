import { Link } from 'react-router-dom'
import heroPlaceholder from '../assets/hero-placeholder.svg'

// To use the final photo: put it in src/assets, import it above instead of
// the placeholder, and write a real description of it in `alt`.
const heroImage = {
  src: heroPlaceholder,
  alt: '', // empty on purpose while this is only a placeholder
}

// Styles shared by both hero buttons.
const buttonBase =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-bold tracking-wider uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-brand-navy text-white"
    >
      {/* Text column */}
      <div className="mx-auto max-w-7xl px-5 pt-28 pb-12 sm:px-8 md:pt-36 md:pb-16 lg:flex lg:min-h-[44rem] lg:items-center lg:px-10 lg:pt-40 lg:pb-24">
        <div className="lg:w-1/2 lg:max-w-xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase sm:text-sm">
            Construction &amp; Engineering
          </p>

          <h1
            id="hero-heading"
            className="mt-5 text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl xl:text-6xl"
          >
            <span className="block">Building infrastructure.</span>
            <span className="block">Shaping better spaces.</span>
          </h1>

          <p className="mt-6 max-w-prose text-base leading-relaxed text-white/80 sm:text-lg">
            ApexBuild Engineering delivers construction, civil engineering and
            project management solutions built around quality, precision and
            reliability.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/projects"
              className={`${buttonBase} bg-brand-orange text-brand-navy hover:brightness-110`}
            >
              View our projects
            </Link>
            <Link
              to="/start-a-project"
              className={`${buttonBase} border-2 border-white/70 text-white hover:border-white hover:bg-white/10`}
            >
              Start a project <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Image: offset to the right edge on mobile/tablet,
          pinned full-height to the right edge on desktop */}
      <div className="ml-auto w-[92%] md:w-[86%] lg:absolute lg:inset-y-0 lg:right-0 lg:w-[44%]">
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          fetchPriority="high"
          className="aspect-[4/3] w-full object-cover md:aspect-[16/9] lg:aspect-auto lg:h-full"
        />
      </div>
    </section>
  )
}

export default Hero