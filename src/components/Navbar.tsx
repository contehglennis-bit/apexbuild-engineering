import { useEffect, useRef, useState } from 'react'
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

// Shared by the desktop and mobile "Start a Project" buttons.
const ctaClasses =
  'inline-flex items-center justify-center gap-2 rounded-sm bg-brand-orange text-sm font-bold tracking-wider text-brand-navy uppercase hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'

function Navbar() {
  // true once the visitor has scrolled a little past the top of the page
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 10)
  // true while the mobile menu panel is open
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // lets us return keyboard focus to the menu button
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the menu with the Escape key (only listen while it is open)
  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  // Close the menu if the window grows to the desktop layout (1024px+)
  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)')

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false)
    }

    desktopQuery.addEventListener('change', handleChange)
    return () => desktopQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        isScrolled || isMenuOpen
          ? 'border-white/10 bg-brand-navy shadow-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
        {/* Logo: links back to the homepage */}
        <Link
          to="/"
          onClick={closeMenu}
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
              <Link to={inquiryRoute} className={`${ctaClasses} px-5 py-2.5`}>
                Start a Project <span aria-hidden="true">→</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button: hidden from 1024px up */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            aria-hidden="true"
            focusable="false"
          >
            {isMenuOpen ? (
              <path d="M5 5l14 14M19 5L5 19" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation panel: hidden unless the menu is open */}
      <div
        id="mobile-menu"
        className={`max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 lg:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <nav aria-label="Mobile" className="px-5 pt-2 pb-6 sm:px-8">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to} className="border-b border-white/10">
                <Link
                  to={link.to}
                  onClick={closeMenu}
                  className="block py-4 text-base font-semibold tracking-wider text-white uppercase focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to={inquiryRoute}
            onClick={closeMenu}
            className={`${ctaClasses} mt-6 w-full px-5 py-3.5`}
          >
            Start a Project <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar