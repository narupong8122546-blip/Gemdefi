'use client'

import { useEffect } from 'react'
import { Img, Close } from './UI'


export default function GemAssetModal({ asset, onClose }) {

  useEffect(() => {

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    addEventListener('keydown', handleEscape)

    return () => {
      removeEventListener('keydown', handleEscape)
    }

  }, [onClose])


  if (!asset) return null


  return (

    <div
      className="modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >

      {/* =========================
          MODAL
      ========================== */}

      <div
        className="
          modal
          relative
          w-full
          max-w-[1160px]
          bg-white
          rounded-[20px]
          shadow-2xl
          p-6
          md:p-8
        "
      >

        {/* Close Button */}

        <Close onClick={onClose} />


        {/* =========================
            MAIN GRID
        ========================== */}

        <div
          className="
            grid
            lg:grid-cols-[55%_45%]
            gap-6
            mt-6
          "
        >


          {/* =========================
              LEFT SIDE
          ========================== */}

          <div>


            {/* =========================
                GEMSTONE IMAGE CARD
            ========================== */}

            <div
              className="
                rounded-2xl
                border
                border-red-100
                overflow-hidden
              "
            >

              {/* Gemstone Image */}

              <Img
                src={asset.img}
                alt={asset.name || 'Pigeon-Blood Ruby'}
                className="
                  w-full
                  h-[330px]
                  object-contain
                  bg-white
                "
              />


              {/* =========================
                  GEMSTONE INFORMATION
              ========================== */}

              <div
                className="
                  p-5
                  text-white
                  bg-[#8B0C18]
                "
              >

                {/* Ruby / Carat */}

                <div
                  className="
                    text-xs
                    tracking-widest
                  "
                >
                  RUBY · {asset.carat || '5.20 CT'}
                </div>


                {/* Gemstone Name */}

                <h3
                  className="
                    text-2xl
                    mt-2
                  "
                >
                  {asset.name || 'Pigeon-Blood Ruby'}
                </h3>


                {/* Gemstone Detail */}

                <p
                  className="
                    text-white/80
                    mt-1
                  "
                >
                  Pigeon Blood · VVS · Cushion
                </p>

              </div>

            </div>


            {/* =========================
                SPECIFICATION
            ========================== */}

            <div
              className="
                mt-5
                border
                border-red-100
                rounded-2xl
                p-5
              "
            >

              <h4
                className="
                  diamond-text
                  text-2xl
                  mb-4
                "
              >
                Specification
              </h4>


              {[
                [
                  'Type',
                  'Natural Ruby',
                ],
                [
                  'Carat',
                  asset.carat || '5.20 carats',
                ],
                [
                  'Color',
                  'Pigeon Red',
                ],
                [
                  'Clarity',
                  'VVS',
                ],
                [
                  'Quality',
                  'Premium-Quality, Investment-Grade',
                ],
                [
                  'Treatment',
                  'Unheated',
                ],
                [
                  'Cut',
                  'Cushion',
                ],
                [
                  'Certification',
                  'Independently Certified',
                ],
                [
                  'Certifying Authority',
                  'Internationally Recognized Gemological Laboratory',
                ],
                [
                  'Report Details',
                  'Available for Verification',
                ],
              ].map((item) => (

                <div
                  key={item[0]}
                  className="
                    flex
                    justify-between
                    gap-4
                    py-2.5
                    border-b
                    border-red-50
                  "
                >

                  {/* Specification Label */}

                  <span className="text-black/55">
                    {item[0]}
                  </span>


                  {/* Specification Value */}

                  <b className="text-right">
                    {item[1]}
                  </b>

                </div>

              ))}

            </div>

          </div>


          {/* =========================
              RIGHT SIDE
              ORDER BOOK
          ========================== */}

          <div
            className="
              rounded-2xl
              bg-[#8B0C18]
              text-white
              p-6
              h-fit
            "
          >

            {/* Order Book Heading */}

            <h4 className="text-2xl">
              ORDER BOOK
            </h4>


            {/* =========================
                ORDER BOOK HEADER
            ========================== */}

            <div
              className="
                grid
                grid-cols-3
                text-xs
                text-white/60
                mt-5
                mb-2
              "
            >

              <span>
                PRICE
              </span>

              <span>
                QTY
              </span>

              <span className="text-right">
                DEPTH
              </span>

            </div>


            {/* =========================
                SELL ORDERS
            ========================== */}

            {[1068.2, 1066.8, 1065.1, 1064.4].map(
              (price, index) => (

                <div
                  key={price}
                  className="
                    relative
                    grid
                    grid-cols-3
                    py-3
                    hover:bg-white/10
                    rounded
                    px-2
                    overflow-hidden
                  "
                >

                  {/* Depth Bar */}

                  <div
                    className="
                      absolute
                      right-0
                      inset-y-1
                      bg-red-300/15
                    "
                    style={{
                      width: `${25 + index * 16}%`,
                    }}
                  />


                  {/* Price */}

                  <span className="relative">
                    ${price}
                  </span>


                  {/* Quantity */}

                  <span className="relative">
                    {(2.1 + index * 0.8).toFixed(1)}
                  </span>


                  {/* Type */}

                  <span
                    className="
                      relative
                      text-right
                    "
                  >
                    SELL
                  </span>

                </div>

              )
            )}


            {/* =========================
                MARKET PRICE
            ========================== */}

            <div
              className="
                my-5
                py-4
                border-y
                border-white/20
              "
            >

              <div className="text-3xl">
                $1,063.72
              </div>

              <div
                className="
                  text-xs
                  text-white/60
                "
              >
                MID MARKET PRICE
              </div>

            </div>


            {/* =========================
                BUY ORDERS
            ========================== */}

            {[1062.9, 1061.5, 1059.8, 1058.2].map(
              (price, index) => (

                <div
                  key={price}
                  className="
                    relative
                    grid
                    grid-cols-3
                    py-3
                    hover:bg-white/10
                    rounded
                    px-2
                    overflow-hidden
                  "
                >

                  {/* Depth Bar */}

                  <div
                    className="
                      absolute
                      left-0
                      inset-y-1
                      bg-white/10
                    "
                    style={{
                      width: `${30 + index * 14}%`,
                    }}
                  />


                  {/* Price */}

                  <span className="relative">
                    ${price}
                  </span>


                  {/* Quantity */}

                  <span className="relative">
                    {(1.7 + index * 0.9).toFixed(1)}
                  </span>


                  {/* Type */}

                  <span
                    className="
                      relative
                      text-right
                    "
                  >
                    BUY
                  </span>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </div>

  )
}