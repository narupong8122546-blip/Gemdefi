'use client'
import {useState} from 'react'
import {Img} from './UI'

export default function Hero({ onPartner }) {
  const slides = [
    '/hero-1.jpg',
    '/hero-2.jpg',
    '/hero-3.jpg',
  ]

  const [slide, setSlide] = useState(0)

  return (
    <section
      id="hero"
      className="
        hero-bg
        min-h-[760px]
        section-pad
        flex
        items-center
      "
    >
      <div
        className="
          grid
          lg:grid-cols-2
          gap-14
          items-center
          w-full
        "
      >
        {/* =========================
            LEFT SIDE
        ========================== */}
        <div>
          {/* Sub Heading */}
          <p
            className="
              text-[#E23D44]
              text-lg
              md:text-2xl
              mb-5
            "
          >
            The Future of Precious Stone RWAs
          </p>

          {/* Main Heading */}
          <h1
            className="
              diamond-text
              text-5xl
              md:text-[75px]
              leading-[.98]
              font-normal
              tracking-[-.04em]
            "
          >
            TOKENIZING THE WORLD’S RAREST ASSETS
          </h1>

          {/* Description */}
          <p
            className="
              mt-8
              text-base
              md:text-lg
              leading-8
              max-w-2xl
              text-black/75
            "
          >
            GemDeFi is an RWA tokenization platform that brings authenticated
            precious stones on-chain through professional valuation, secure
            custody, controlled token issuance, and transparent Proof of
            Reserve, providing access to portfolio diversification and
            potential value appreciation through gemstone auctions.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              gap-4
            "
          >
            {/* Investment Deck */}
            <a
              className="btn-primary grid place-items-center"
              href="/investment-deck.pdf"
              download
            >
              Investment Deck
            </a>

            {/* Partner Enquiry */}
            <button
              className="btn-outline"
              onClick={onPartner}
            >
              Partner Enquiry
            </button>
          </div>
        </div>

        {/* =========================
            RIGHT SIDE
            HERO CARD SLIDER
        ========================== */}
        <div
          className="
            relative
            h-[480px]
            flex
            items-center
            justify-center
          "
        >
          {slides.map((s, i) => (
            <button
              key={s}
              onClick={() => setSlide(i)}
              className="
                absolute
                w-[72%]
                h-[390px]
                rounded-[28px]
                overflow-hidden
                bg-white
                border
                border-red-100
                shadow-xl
                transition-all
                duration-500
              "
              style={{
                transform: `
                  translateX(${(i - slide) * 55}px)
                  translateY(${Math.abs(i - slide) * 18}px)
                  rotate(${(i - slide) * 5}deg)
                  scale(${i === slide ? 1 : 0.9})
                `,
                zIndex:
                  i === slide
                    ? 10
                    : 5 - Math.abs(i - slide),
                opacity:
                  Math.abs(i - slide) > 1
                    ? 0.45
                    : 1,
              }}
            >
              <Img
                src={s}
                alt={`Hero gemstone slide ${i + 1}`}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}