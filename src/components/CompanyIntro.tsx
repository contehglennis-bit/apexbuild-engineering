import { Link } from 'react-router-dom'
import introDetail from '../assets/intro-detail.svg'
import introMain from '../assets/intro-main.svg'

// Swap these two imports for final photography later; write real
// descriptions in the `alt` values below once they're real photos.
const mainImage = { src: introMain, alt: '' }
const detailImage = { src: introDetail, alt: '' }

function CompanyIntro() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="bg-brand-offwhite py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[42%_58%] lg:items-center lg:gap-16 lg:px-10">
        {/* Text column */}
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase sm:text-sm">
            Who we are
          </p>

          <h2
            id="intro-heading"
            className="mt-5 text-3xl leading-[1.15] font-extrabold tracking-tight text-brand-charcoal sm:text-4xl"
          >
            Building with purpose. Delivering with precision.
          </h2>

          <p className="mt-6 max-w-prose text-base leading-relaxed text-brand-gray sm:text-lg">
            ApexBuild Engineering provides construction, civil engineering
            and project management solutions for projects that demand
            careful planning, quality workmanship and dependable execution.
          </p>

          <p className="mt-4 max-w-prose text-base leading-relaxed text-brand-gray sm:text-lg">
            From early planning to final delivery, we work closely with
            clients to turn ideas into practical, lasting spaces.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold tracking-wider text-brand-navy uppercase decoration-brand-orange decoration-2 underline-offset-8 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
          >
            More about ApexBuild <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Image composition: main image with an overlapping detail image */}
        <div className="relative">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
          />
          <img
            src={detailImage.src}
            alt={detailImage.alt}
            className="mt-4 aspect-[4/3] w-full max-w-56 border-2 border-brand-orange object-cover sm:max-w-64 lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:w-[45%] lg:max-w-none lg:translate-x-6 lg:translate-y-6"
          />
        </div>
      </div>
    </section>
  )
}

export default CompanyIntro