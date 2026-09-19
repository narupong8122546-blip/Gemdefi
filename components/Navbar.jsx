'use client'

import { useEffect, useState } from 'react'
import { Img } from './UI'


/* =========================
   NAVIGATION ITEMS
========================= */

const nav = [
  ['gemdefi', 'GemDeFi'],
  ['rubix', 'RUBIX Token'],
  ['roadmap', 'Roadmap'],
  ['demo', 'Interactive Demo'],
  ['team', 'Team'],
  ['contact', 'Contact'],
]


export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')


  /* =========================
     ACTIVE SECTION ON SCROLL
  ========================== */

  useEffect(() => {
    const sectionIds = nav.map(([id]) => id)

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)


    if (!sections.length) {
      return
    }


    const updateActiveSection = () => {
      const navbarOffset = 120

      let currentSection = ''


      /* =========================
         CONTACT / PAGE BOTTOM
      ========================== */

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10

      if (isAtBottom) {
        const contact = document.getElementById('contact')

        if (contact) {
          setActiveSection('contact')
          return
        }
      }


      /* =========================
         FIND CURRENT SECTION
      ========================== */

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()

        if (rect.top <= navbarOffset) {
          currentSection = section.id
        }
      })


      /* =========================
         SECTION ENTERING VIEW
      ========================== */

      if (!currentSection) {
        let closestSection = null
        let closestDistance = Infinity

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect()

          const distance = Math.abs(
            rect.top - navbarOffset
          )

          if (distance < closestDistance) {
            closestDistance = distance
            closestSection = section
          }
        })

        if (closestSection) {
          currentSection = closestSection.id
        }
      }


      setActiveSection(currentSection)
    }


    /* Run once when page loads */
    updateActiveSection()


    /* Watch scrolling */
    window.addEventListener(
      'scroll',
      updateActiveSection,
      {
        passive: true,
      }
    )


    /* Watch window resize */
    window.addEventListener(
      'resize',
      updateActiveSection
    )


    return () => {
      window.removeEventListener(
        'scroll',
        updateActiveSection
      )

      window.removeEventListener(
        'resize',
        updateActiveSection
      )
    }
  }, [])


  /* =========================
     SCROLL TO SECTION
  ========================== */

  const goToSection = (id) => {
    const section = document.getElementById(id)

    if (!section) {
      return
    }


    setActiveSection(id)
    setOpen(false)


    const navbarHeight = 78

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight


    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    })
  }


  /* =========================
     GO TO HERO
  ========================== */

  const goToHero = () => {
    const hero = document.getElementById('hero')

    if (!hero) {
      return
    }

    setActiveSection('')
    setOpen(false)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }


  return (
    <header
      className="
        sticky
        top-0
        z-50
        bg-white/95
        backdrop-blur
        border-b
        border-red-50
      "
    >

      {/* =========================
          NAVBAR CONTAINER
      ========================== */}

      <div
        className="
          max-w-[1320px]
          mx-auto
          h-[78px]
          px-5
          flex
          items-center
          justify-between
        "
      >

        {/* =========================
    LOGO
========================== */}

        <button
          type="button"
          onClick={goToHero}
          className="
    flex
    items-center
    justify-center
    shrink-0
  "
          aria-label="Go to homepage"
        >
          <Img
            src="/logo-gemdefi.png"
            alt="GemDeFi Logo"
            className="
      w-[150px]
      h-[46px]
      md:w-[170px]
      md:h-[50px]
      lg:w-[180px]
      lg:h-[54px]
      object-contain
    "
          />
        </button>


        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}

        <nav
          className="
            hidden
            lg:flex
            gap-7
            text-sm
            font-medium
          "
        >

          {nav.map(([id, label]) => {

            const isActive =
              activeSection === id

            return (
              <button
                key={id}
                type="button"
                onClick={() => goToSection(id)}
                className={`
                  relative
                  py-2
                  transition-all
                  duration-300

                  ${isActive
                    ? 'diamond-text nav-active'
                    : 'text-black hover:text-[#B00010]'
                  }
                `}
              >
                {label}
              </button>
            )
          })}

        </nav>


        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}

        <button
          type="button"
          aria-label="Open navigation menu"
          className="
            lg:hidden
            w-11
            h-11
            rounded-full
            border
            border-red-200
            text-[#B00010]
            transition
            hover:bg-red-50
          "
          onClick={() => setOpen(!open)}
        >
          {open ? '×' : '☰'}
        </button>

      </div>


      {/* =========================
          MOBILE NAVIGATION
      ========================== */}

      {open && (

        <div
          className="
            lg:hidden
            bg-white
            px-6
            pb-5
            shadow-lg
          "
        >

          {nav.map(([id, label]) => {

            const isActive =
              activeSection === id

            return (
              <button
                key={id}
                type="button"
                onClick={() => goToSection(id)}
                className={`
                  relative
                  block
                  w-full
                  text-left
                  py-3
                  border-b
                  border-red-50
                  transition-all
                  duration-300

                  ${isActive
                    ? 'text-[#B00010] font-semibold'
                    : 'text-black'
                  }
                `}
              >

                {label}


                {/* =========================
                    MOBILE ACTIVE LINE
                ========================== */}

                {isActive && (

                  <span
                    className="
                      absolute
                      left-0
                      bottom-0
                      w-full
                      h-[2px]
                      bg-gradient-to-r
                      from-[#B00010]
                      via-[#F60D1A]
                      to-[#EA7275]
                    "
                  />

                )}

              </button>
            )
          })}

        </div>

      )}

    </header>
  )
}