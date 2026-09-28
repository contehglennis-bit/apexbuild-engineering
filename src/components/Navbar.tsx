import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

// Route for the future project inquiry page (not built yet).
const inquiryRoute = '/start-a-project'

function Navbar() {
  // true once the visitor has scrolled a little past the top of the page
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 10)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)

    window.addEventListener('scroll', handleScroll, { passive: true })
    // cleanup: stop listening when the Navbar is removed
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        isScrolled
          ? 'border-white/10 bg-brand-navy shadow-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
        {/* Logo: links back to the homepage */}
        <Link
          to="/"
          className="flex items-center gap-3 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <svg
            viewBox="0 0 32 32"
            className="h-8 w-8"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M16 3 30 29h-8.5L16 17.5 10.5 29H2z" fill="currentColor" />
          </svg>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-wide">
              APEXBUILD
            </span>
            <span className="mt-1 text-[0.625rem] font-semibold tracking-[0.3em]">
              ENGINEERING
            </span>
          </span>
        </Link>

        {/* Desktop navigation: hidden below 1024px */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm font-semibold tracking-wider text-white/90 uppercase decoration-brand-orange decoration-2 underline-offset-8 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={inquiryRoute}
                className="inline-flex items-center gap-2 rounded-sm bg-brand-orange px-5 py-2.5 text-sm font-bold tracking-wider text-brand-navy uppercase hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Start a Project <span aria-hidden="true">→</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar