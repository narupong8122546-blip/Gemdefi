'use client'

import { useState } from 'react'
import { Close } from './UI'


/* =========================
   RUBIX FEATURE DATA
========================= */

const rubixFeatures = [
  {
    title: 'RESERVE-BACKED',
    description: 'Verified physical ruby reserve',
    image: '/rubix-reserve.png',
  },
  {
    title: 'PROFESSIONAL VERIFIED',
    description: 'Authentication and independent valuation',
    image: '/rubix-verified.png',
  },
  {
    title: 'TRANSPARENT RECORD',
    description: 'Certificates, reserve data and token supply',
    image: '/rubix-transparent.png',
  },
]


export default function RubixToken() {
  const [doc, setDoc] = useState(false)


  return (
    <section
      id="rubix"
      className="section-pad bg-[#F0F0F0]"
    >

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div
        className="
          grid
          lg:grid-cols-2
          gap-14
          items-center
        "
      >

        {/* =========================
            LEFT SIDE
            RUBIX INFORMATION
        ========================== */}

        <div>

          {/* Sub Heading */}

          <p
            className="
              text-[#E23D44]
              text-xl
              md:text-2xl
            "
          >
            GEMDEFI&apos;S FIRST RWA TOKEN
          </p>


          {/* Main Heading */}

          <h2
            className="
              text-[#E23D44]
              text-5xl
              md:text-[50px]
              leading-tight
              mt-3
            "
          >
            RUBIX Token
          </h2>


          {/* Description */}

          <p
            className="
              mt-6
              text-lg
              leading-8
            "
          >
            RUBIX is GemDeFi&apos;s flagship real-world asset token,
            supported by authenticated and professionally valued Pigeon
            Blood ruby reserves.
          </p>


          <p
            className="
              mt-3
              text-lg
              leading-8
            "
          >
            One unified RUBIX economy can be strengthened by multiple
            verified reserve vaults, connecting physical gemstone value
            with transparent digital ownership and utility.
          </p>


          {/* =========================
              RUBIX FEATURES
          ========================== */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-5
              mt-8
            "
          >

            {rubixFeatures.map((feature) => (

              <div
                key={feature.title}
                className="
                  border-l-4
                  border-[#D30715]
                  pl-4
                  min-w-0
                "
              >

                {/* =========================
                    FEATURE IMAGE
                ========================== */}

                <div
                  className="
                    w-[100px]
                    h-[100px]
                    md:w-[110px]
                    md:h-[110px]
                    flex
                    items-center
                    justify-start
                    overflow-visible
                  "
                >

                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="
                      w-full
                      h-full
                      object-contain
                    "
                  />

                </div>


                {/* =========================
                    FEATURE TITLE
                ========================== */}

                <div
                  className="
                    red-linear
                    text-sm
                    font-semibold
                    mt-3
                  "
                >
                  {feature.title}
                </div>


                {/* =========================
                    FEATURE DESCRIPTION
                ========================== */}

                <p
                  className="
                    text-sm
                    text-[#757575]/80
                    mt-2
                    leading-5
                  "
                >
                  {feature.description}
                </p>

              </div>

            ))}

          </div>

        </div>


        {/* =========================
            RIGHT SIDE
            RESERVE SNAPSHOT
        ========================== */}

        <div
          className="
            reserve-card
            bg-white
            rounded-3xl
            p-5
            md:p-7
          "
        >

          <div
            className="
              rounded-2xl
              border-2
              border-dashed
              border-[#D30715]
              p-5
              md:p-7
            "
          >

            {/* =========================
                RESERVE HEADING
            ========================== */}

            <h3
              className="
                text-[#E23D44]
                text-3xl
                md:text-4xl
                leading-tight
              "
            >
              RUBIX Reserve Snapshot
            </h3>


            {/* =========================
                RESERVE DESCRIPTION
            ========================== */}

            <p
              className="
                text-[#666]
                mt-3
                leading-6
              "
            >
              Review the verified gemstone assets supporting the RUBIX
              ecosystem.
            </p>


            {/* =========================
                RESERVE DATA
            ========================== */}

            <div
              className="
                grid
                sm:grid-cols-2
                gap-4
                mt-7
              "
            >

              {[
                [
                  'Active Reserve',
                  'Vault 01',
                ],
                [
                  'Reserve Assets',
                  '3 Pigeon Blood Rubies',
                ],
                [
                  'Combined Weight',
                  '41 carats',
                ],
                [
                  'Verification Status',
                  'Certificate publication pending',
                ],
              ].map((item) => (

                <div
                  key={item[0]}
                  className="
                    border
                    border-red-100
                    rounded-xl
                    p-4
                    bg-white
                  "
                >

                  {/* Data Label */}

                  <div
                    className="
                      text-sm
                      text-black/50
                    "
                  >
                    {item[0]}
                  </div>


                  {/* Data Value */}

                  <div
                    className="
                      font-semibold
                      mt-1
                    "
                  >
                    {item[1]}
                  </div>

                </div>

              ))}

            </div>


            {/* =========================
                RESERVE BUTTONS
            ========================== */}

            <div
              className="
                mt-7
                flex
                flex-col
                items-center
                gap-3
              "
            >

              {/* Explore Vault */}

              <a
                href="#gemdefi"
                className="
                  btn-primary
                  grid
                  place-items-center
                "
              >
                Explore Vault 01
              </a>


              {/* View Reserve Documents */}

              <button
                type="button"
                className="btn-outline"
                onClick={() => setDoc(true)}
              >
                View Reserve Documents
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          RESERVE DOCUMENTS MODAL
      ========================== */}

      {doc && (

        <div
          className="modal-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setDoc(false)
            }
          }}
        >

          <div
            className="
              modal
              relative
              bg-white
              rounded-2xl
              max-w-xl
              w-full
              p-6
              md:p-8
              shadow-2xl
            "
          >

            {/* =========================
                CLOSE BUTTON
            ========================== */}

            <Close
              onClick={() => setDoc(false)}
            />


            {/* =========================
                MODAL HEADING
            ========================== */}

            <h3
              className="
                diamond-text
                text-3xl
              "
            >
              Reserve Documents
            </h3>


            {/* =========================
                MODAL DESCRIPTION
            ========================== */}

            <p
              className="
                mt-4
                text-black/70
              "
            >
              Document slots specified by the requirement:
            </p>


            {/* =========================
                DOCUMENT LIST
            ========================== */}

            <div
              className="
                mt-4
                space-y-3
              "
            >

              {[
                'Gemstone Certificate',
                'Gemological Report',
                'Independent Verification Report',
                'Vault / Custody Confirmation',
                'Reserve Attestation',
                'Latest Verification Date',
              ].map((documentName) => (

                <div
                  key={documentName}
                  className="
                    p-3
                    rounded-lg
                    border
                    border-red-100
                  "
                >

                  {documentName}

                  <span
                    className="
                      float-right
                      text-[#E23D44]
                    "
                  >
                    Pending
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      )}

    </section>
  )
}