'use client'

import { useState } from 'react'
import { Img } from './UI'
import GemAssetModal from './GemAssetModal'


/* =========================
   RUBY ASSETS
========================= */

const rubyAssets = [
  {
    name: 'Ruby 01',
    carat: '12 carat',
    img: '/rubix-01.png',
    imageScale: 'scale-100',
  },
  {
    name: 'Ruby 02',
    carat: '14 carat',
    img: '/rubix-02.png',

    // ปรับ Ruby 02 ให้ขนาดที่มองเห็น
    // ใกล้เคียงกับ Ruby 01 และ Ruby 03
    imageScale: 'scale-[1.15]',
  },
  {
    name: 'Ruby 03',
    carat: '15 carat',
    img: '/rubix-03.png',
    imageScale: 'scale-100',
  },
]


export default function GemDeFi() {
  const [asset, setAsset] = useState(null)


  return (
    <section
      id="gemdefi"
      className="section-pad bg-white"
    >

      {/* =========================
          GEMDEFI INTRO
      ========================== */}

      <div className="text-center">

        {/* Sub Heading */}

        <p
          className="
            text-[#E23D44]
            text-xl
            md:text-2xl
            font-semibold
            text-center
          "
        >
          GEMDEFI ASSET ECOSYSTEM
        </p>


        {/* Main Heading */}

        <h2
          className="
            text-[#E23D44]
            text-4xl
            md:text-[50px]
            leading-tight
            mt-3
            text-center
          "
        >
          A New Market for Precious Assets
        </h2>


        {/* Description */}

        <p
          className="
            max-w-4xl
            mx-auto
            text-lg
            md:text-[22px]
            leading-8
            mt-5
            text-black/80
            text-center
          "
        >
          GemDeFi unlocks the digital potential of exceptional precious stones
          through a carefully curated asset ecosystem. Each asset must meet
          rigorous standards for authenticity, valuation, documented ownership,
          and secure custody before being approved for tokenization.
        </p>

      </div>


      {/* =========================
          RESERVE SUMMARY
      ========================== */}

      <p
        className="
          red-linear
          font-semibold
          text-lg
          md:text-[22px]
          mt-5
          text-center
        "
      >
        RESERVE ASSETS · 1 ACTIVE VAULT 3 GEMSTONES · 41 TOTAL CARATS
      </p>


      {/* =========================
          GEMSTONE CARDS
      ========================== */}

      <div
        className="
          grid
          md:grid-cols-3
          gap-7
          mt-10
        "
      >

        {rubyAssets.map((a) => (

          <article
            key={a.name}
            className="
              glow-card
              rounded-2xl
              overflow-hidden
              bg-white
            "
          >

            {/* =========================
                GEMSTONE IMAGE
            ========================== */}

            <div
              className="
                w-full
                h-[240px]
                sm:h-[260px]
                md:h-[280px]
                lg:h-[300px]
                bg-[#c20205]/[.04]
                flex
                items-center
                justify-center
                overflow-hidden
              "
            >

              <Img
                src={a.img}
                alt={a.name}
                className={`
                  w-[170px]
                  h-[170px]

                  sm:w-[180px]
                  sm:h-[180px]

                  md:w-[190px]
                  md:h-[190px]

                  lg:w-[210px]
                  lg:h-[210px]

                  object-contain

                  ${a.imageScale}
                `}
              />

            </div>


            {/* =========================
                GEMSTONE INFORMATION
            ========================== */}

            <div className="p-5">

              {/* Asset Name */}

              <h3
                className="
                  diamond-text
                  text-4xl
                  mt-3
                "
              >
                {a.name}
              </h3>


              {/* Carat */}

              <p className="mt-2">
                {a.carat}
              </p>


              {/* Gemstone Type */}

              <p>
                Pigeon Blood Ruby
              </p>


              {/* Certificate */}

              <p>
                Certificate ID: Available Upon Verification
              </p>


              {/* =========================
                  VIEW ASSET DETAILS
              ========================== */}

              <button
                type="button"
                onClick={() => setAsset(a)}
                className="
                  btn-outline
                  w-full
                  mt-5
                "
              >
                View Asset Details
              </button>

            </div>

          </article>

        ))}

      </div>


      {/* =========================
          GEM ASSET DETAIL MODAL
      ========================== */}

      <GemAssetModal
        asset={asset}
        onClose={() => setAsset(null)}
      />

    </section>
  )
}