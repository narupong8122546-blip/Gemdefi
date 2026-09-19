'use client'

import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import GemDeFi from '../components/GemDeFi'
import RubixToken from '../components/RubixToken'
import Roadmap from '../components/Roadmap'
import InteractiveDemo from '../components/InteractiveDemo'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal'


const nav = [
  ['gemdefi', 'GemDeFi'],
  ['rubix', 'RUBIX Token'],
  ['roadmap', 'Roadmap'],
  ['demo', 'Interactive Demo'],
  ['team', 'Team'],
  ['contact', 'Contact'],
]


export default function Page() {
  const [active, setActive] = useState('gemdefi')
  const [contact, setContact] = useState(false)


  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0]

        if (visible) {
          setActive(visible.target.id)
        }
      },
      {
        threshold: [
          0.15,
          0.3,
          0.5,
        ],

        rootMargin: '-20% 0px -55%',
      }
    )


    nav.forEach(([id]) => {
      const element = document.getElementById(id)

      if (element) {
        obs.observe(element)
      }
    })


    return () => {
      obs.disconnect()
    }
  }, [])


  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}

      <Navbar active={active} />


      {/* =========================
          MAIN CONTENT
      ========================== */}

      <main>

        {/* HERO */}

        <Hero
          onPartner={() => setContact(true)}
        />


        {/* GEMDEFI */}

        <GemDeFi />


        {/* RUBIX TOKEN */}

        <RubixToken />


        {/* ROADMAP */}

        <Roadmap />


        {/* INTERACTIVE DEMO */}

        <InteractiveDemo />


        {/* TEAM */}

        <Team />


        {/* CONTACT */}

        <Contact
          onContact={() => setContact(true)}
        />

      </main>


      {/* =========================
          FOOTER
      ========================== */}

      <Footer />


      {/* =========================
          CONTACT MODAL
      ========================== */}

      <ContactModal
        open={contact}
        onClose={() => setContact(false)}
        title="Partner Enquiry"
      />
    </>
  )
}