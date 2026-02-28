import { useState } from 'react'
import { Link } from 'react-router-dom'

const ShieldLogo = () => (
  <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 1.5L2.5 7.5V18C2.5 26.8 9 34.5 17 36.5C25 34.5 31.5 26.8 31.5 18V7.5L17 1.5Z"
      stroke="black"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9 16.5Q13 12 17 16.5Q21 21 25 16.5"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M9 21.5Q13 17 17 21.5Q21 26 25 21.5"
      stroke="black"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)

const navLinks = [
  { label: 'About Us',      path: '/about-us' },
  { label: 'Reviews',       path: '/reviews' },
  { label: 'FAQ',           path: '/faq' },
  { label: 'Sponsorships',  path: '/sponsorships' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo — links home */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <ShieldLogo />
            <span
              className="text-black font-bold text-sm"
              style={{ letterSpacing: '0.18em' }}
            >
              SAFEWEB.AI
            </span>
          </Link>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="text-black flex flex-col gap-[5px] p-1 transition-all duration-150"
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block rounded-full bg-black transition-all duration-150"
                style={{ width: '26px', height: hovered ? '3.5px' : '2.5px' }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Dropdown menu */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />

          {/* Menu panel */}
          <div
            className="fixed top-[56px] right-0 z-50 w-56 shadow-2xl overflow-hidden"
            style={{
              backgroundColor: '#ffffff',
              borderLeft: '1px solid rgba(57,255,20,0.2)',
              borderBottom: '1px solid rgba(57,255,20,0.2)',
              borderBottomLeftRadius: '8px',
            }}
          >
            {navLinks.map((item, i) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 text-sm font-medium text-black transition-colors duration-150"
                style={{
                  borderBottom: i < navLinks.length - 1
                    ? '1px solid rgba(57,255,20,0.12)'
                    : 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(57,255,20,0.12)'
                  e.currentTarget.style.color = '#39ff14'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#000000'
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  )
}
