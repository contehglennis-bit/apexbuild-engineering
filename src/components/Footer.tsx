import { Link } from 'react-router-dom'

const exploreLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

const linkClasses =
  'text-sm text-white/70 decoration-brand-orange decoration-2 underline-offset-4 transition-colors duration-200 motion-reduce:transition-none hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'

const columnHeadingClasses =
  'text-xs font-bold tracking-[0.2em] text-brand-orange uppercase'

function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:gap-x-12">
          {/* Brand block */}
          <div className="col-span-2 lg:col-span-1">
            <p className="flex flex-col leading-none">
              <span className="text-lg font-extrabold tracking-wide">
                APEXBUILD
              </span>
              <span className="mt-1 text-[0.625rem] font-semibold tracking-[0.3em] text-white/60">
                ENGINEERING
              </span>
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Construction, civil engineering and project management
              solutions built around quality, precision and reliability.
            </p>
            <p className="mt-5 text-sm text-white/50">
              Freetown, Sierra Leone
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Explore">
            <h2 className={columnHeadingClasses}>Explore</h2>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={linkClasses}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Start a Project */}
          <nav aria-label="Start a project">
            <h2 className={columnHeadingClasses}>Start a Project</h2>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Planning a construction, engineering or renovation project?
            </p>
            <Link
              to="/start-a-project"
              className={`${linkClasses} mt-4 inline-flex items-center gap-2 font-bold text-white`}
            >
              Start a project <span aria-hidden="true">→</span>
            </Link>
          </nav>

          {/* Contact */}
          <nav aria-label="Contact">
            <h2 className={columnHeadingClasses}>Contact</h2>
            <p className="mt-5 text-sm text-white/50">
              Freetown, Sierra Leone
            </p>
            <Link
              to="/contact"
              className={`${linkClasses} mt-4 inline-flex items-center gap-2`}
            >
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20">
          <p className="text-xs text-white/40">
            © 2026 ApexBuild Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer