'use client'

import { useState } from 'react'
import { Close } from './UI'


export default function MintRedeemSimulator() {
  const [balance, setBalance] = useState(1000)
  const [type, setType] = useState('Mint')
  const [amount, setAmount] = useState('')
  const [extra, setExtra] = useState('')
  const [review, setReview] = useState(false)
  const [error, setError] = useState('')


  /* =========================
     TRANSACTION HISTORY
  ========================== */

  const [history, setHistory] = useState([
    {
      type: 'MINT',
      from: 'SYSTEM',
      to: 'Wallet A',
      amount: 1000,
      status: 'COMPLETED',
      hash: '0x4a92...897',
    },
  ])


  /* =========================
     RUBIX FLOW DATA
  ========================== */

  const rubixFlow = [
    {
      title: 'VERIFY',
      description: 'Gem Verification',
      image: '/rubix-verify.png',
    },
    {
      title: 'MINT',
      description: 'Mint RUBIX',
      image: '/rubix-mint.png',
    },
    {
      title: 'WALLET',
      description: 'Token Wallet',
      image: '/rubix-wallet.png',
    },
    {
      title: 'REDEEM',
      description: 'Redeem Real Value',
      image: '/rubix-redeem.png',
    },
  ]


  /* =========================
     VALIDATION
  ========================== */

  const validate = () => {
    const n = Number(amount)

    if (!n || n <= 0) {
      return 'Amount must be greater than 0.'
    }

    if (type === 'Mint' && !extra.trim()) {
      return 'Gemstone ID is required.'
    }

    if (type === 'Transfer' && !extra.trim()) {
      return 'Wallet Address is required.'
    }

    if (type !== 'Mint' && n > balance) {
      return 'Amount exceeds Wallet Balance.'
    }

    return ''
  }


  /* =========================
     REVIEW TRANSACTION
  ========================== */

  const doReview = () => {
    const validationError = validate()

    setError(validationError)

    if (!validationError) {
      setReview(true)
    }
  }


  /* =========================
     CONFIRM TRANSACTION
  ========================== */

  const confirm = () => {
    const n = Number(amount)

    setBalance((currentBalance) =>
      type === 'Mint'
        ? currentBalance + n
        : currentBalance - n
    )


    /* Generate Demo Transaction Hash */

    const hash =
      '0x' +
      Math.random().toString(16).slice(2, 6) +
      '...' +
      Math.random().toString(16).slice(2, 5)


    /* Add Transaction to History */

    setHistory((currentHistory) => [
      {
        type: type.toUpperCase(),

        from:
          type === 'Mint'
            ? 'SYSTEM'
            : 'Wallet A',

        to:
          type === 'Transfer'
            ? extra
            : type === 'Redeem'
              ? 'Gem Vault / Redemption Center'
              : 'Wallet A',

        amount: n,

        status: 'COMPLETED',

        hash,
      },

      ...currentHistory,
    ])


    /* Reset Form */

    setReview(false)
    setAmount('')
    setExtra('')
    setError('')
  }


  return (
    <div className="mt-16">


      {/* =========================
          WALLET BALANCE
      ========================== */}

      <div
        className="
          max-w-5xl
          mx-auto
          bg-white
          rounded-2xl
          border
          border-red-100
          p-6
          text-center
        "
      >

        <div className="text-sm tracking-widest">
          WALLET BALANCE
        </div>

        <div className="diamond-text text-5xl mt-2">
          {balance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}{' '}
          RUBIX
        </div>

      </div>


      {/* =========================
          WALLET + TRANSACTION
      ========================== */}

      <div
        className="
          grid
          lg:grid-cols-[55%_45%]
          gap-7
          mt-7
        "
      >


        {/* =========================
            LEFT SIDE
            WALLET
        ========================== */}

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-red-100
            p-6
          "
        >

          <h3 className="text-xl font-semibold">
            WALLET
          </h3>


          {/* =========================
              WALLET CARD
          ========================== */}

          <div
            className="
              mt-4
              rounded-2xl
              p-6
              text-white
              bg-gradient-to-r
              from-[#B00010]
              via-[#D30715]
              to-[#F60D1A]
            "
          >

            <div>
              WALLET A
            </div>

            <div className="text-white/70">
              0xAB...45C
            </div>

            <div className="text-3xl mt-5">
              {balance.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}{' '}
              RUBIX
            </div>

          </div>


          {/* =========================
              RUBIX FLOW
          ========================== */}

          <h4 className="mt-8 font-semibold">
            RUBIX FLOW
          </h4>


          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-3
              mt-4
            "
          >

            {rubixFlow.map((item) => (
              <div
                key={item.title}
                className="text-center"
              >


                {/* Flow Image */}

                <div
                  className="
                    h-24
                    rounded-xl
                    overflow-hidden
                    border
                    border-red-100
                    bg-white
                    flex
                    items-center
                    justify-center
                  "
                >

                  <img
                    src={item.image}
                    alt={item.description}
                    className="
                      w-full
                      h-full
                      object-contain
                      p-2
                    "
                  />

                </div>


                {/* Flow Title */}

                <b
                  className="
                    text-[#B00010]
                    text-sm
                    block
                    mt-3
                  "
                >
                  {item.title}
                </b>


                {/* Flow Description */}

                <span
                  className="
                    text-xs
                    text-black/50
                    block
                    mt-1
                  "
                >
                  {item.description}
                </span>

              </div>
            ))}

          </div>

        </div>


        {/* =========================
            RIGHT SIDE
            TRANSACTION
        ========================== */}

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-red-100
            p-6
          "
        >

          <h3 className="text-xl font-semibold">
            TRANSACTION
          </h3>


          {/* =========================
              TRANSACTION TYPE
          ========================== */}

          <label className="text-xs block mt-5 mb-2">
            TRANSACTION TYPE
          </label>

          <select
            className="
              w-full
              border
              border-red-100
              rounded-xl
              p-3
              outline-none
              focus:border-[#E23D44]
            "
            value={type}
            onChange={(e) => {
              setType(e.target.value)
              setExtra('')
              setError('')
            }}
          >

            <option>
              Mint
            </option>

            <option>
              Redeem
            </option>

            <option>
              Transfer
            </option>

          </select>


          {/* =========================
              MINT - GEMSTONE ID
          ========================== */}

          {type === 'Mint' && (
            <>

              <label className="text-xs block mt-5 mb-2">
                GEMSTONE ID
              </label>

              <input
                className="
                  w-full
                  border
                  border-red-100
                  rounded-xl
                  p-3
                  outline-none
                  focus:border-[#E23D44]
                "
                value={extra}
                onChange={(e) => setExtra(e.target.value)}
                placeholder="GEM-0001"
              />

            </>
          )}


          {/* =========================
              TRANSFER - WALLET ADDRESS
          ========================== */}

          {type === 'Transfer' && (
            <>

              <label className="text-xs block mt-5 mb-2">
                RECIPIENT WALLET ADDRESS
              </label>

              <input
                className="
                  w-full
                  border
                  border-red-100
                  rounded-xl
                  p-3
                  outline-none
                  focus:border-[#E23D44]
                "
                value={extra}
                onChange={(e) => setExtra(e.target.value)}
                placeholder="0x..."
              />

            </>
          )}


          {/* =========================
              AMOUNT
          ========================== */}

          <label className="text-xs block mt-5 mb-2">
            AMOUNT
          </label>

          <input
            type="number"
            className="
              w-full
              border
              border-red-100
              rounded-xl
              p-3
              outline-none
              focus:border-[#E23D44]
            "
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter RUBIX amount"
          />


          {/* =========================
              REDEEM DESTINATION
          ========================== */}

          {type === 'Redeem' && (
            <p className="text-xs text-black/50 mt-3">
              Redeem destination:
              {' '}
              Gem Vault / Redemption Center
            </p>
          )}


          {/* =========================
              ERROR MESSAGE
          ========================== */}

          {error && (
            <div
              className="
                mt-4
                p-3
                bg-red-50
                text-[#B00010]
                rounded-lg
                text-sm
              "
            >
              {error}
            </div>
          )}


          {/* =========================
              REVIEW BUTTON
          ========================== */}

          <button
            type="button"
            onClick={doReview}
            className="btn-primary w-full mt-6"
          >
            REVIEW {type.toUpperCase()}
          </button>

        </div>

      </div>


      {/* =========================
          BLOCKCHAIN TRANSACTION HISTORY
      ========================== */}

      <div
        className="
          mt-8
          bg-white
          border
          border-red-100
          rounded-2xl
          p-5
          overflow-x-auto
        "
      >

        <h3 className="font-semibold mb-4">
          BLOCKCHAIN TRANSACTION HISTORY
        </h3>


        <table
          className="
            w-full
            min-w-[760px]
            text-sm
          "
        >

          {/* =========================
              TABLE HEADER
          ========================== */}

          <thead>

            <tr className="text-left text-black/50">

              {[
                'TYPE',
                'FROM',
                'TO',
                'AMOUNT',
                'STATUS',
                'TRANSACTION HASH',
              ].map((heading) => (

                <th
                  key={heading}
                  className="py-3 pr-4"
                >
                  {heading}
                </th>

              ))}

            </tr>

          </thead>


          {/* =========================
              TABLE BODY
          ========================== */}

          <tbody>

            {history.map((transaction, index) => (

              <tr
                key={index}
                className="border-t border-red-50"
              >


                {/* Type */}

                <td
                  className="
                    py-4
                    pr-4
                    text-[#B00010]
                    font-semibold
                  "
                >
                  {transaction.type}
                </td>


                {/* From */}

                <td className="pr-4">
                  {transaction.from}
                </td>


                {/* To */}

                <td className="pr-4">
                  {transaction.to}
                </td>


                {/* Amount */}

                <td className="pr-4">
                  {transaction.amount} RUBIX
                </td>


                {/* =========================
                    COMPLETED STATUS
                ========================== */}

                <td className="pr-4">

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-green-50
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      text-green-600
                      border
                      border-green-200
                    "
                  >

                    <span
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-green-500
                      "
                    />

                    {transaction.status}

                  </span>

                </td>


                {/* Transaction Hash */}

                <td>
                  {transaction.hash}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      {/* =========================
          CONFIRMATION MODAL
      ========================== */}

      {review && (

        <div
          className="modal-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setReview(false)
            }
          }}
        >

          <div
            className="
              modal
              relative
              bg-white
              rounded-2xl
              p-8
              max-w-md
              w-full
              shadow-2xl
            "
          >


            {/* Close Button */}

            <Close
              onClick={() => setReview(false)}
            />


            {/* Modal Heading */}

            <h3 className="diamond-text text-3xl">
              Confirm {type}
            </h3>


            {/* =========================
                TRANSACTION DETAILS
            ========================== */}

            <div className="mt-5 space-y-2">

              <p>
                <b>
                  Transaction:
                </b>{' '}

                {type.toUpperCase()}
              </p>


              <p>
                <b>
                  From:
                </b>{' '}

                {type === 'Mint'
                  ? 'SYSTEM'
                  : 'Wallet A'}
              </p>


              <p>
                <b>
                  To:
                </b>{' '}

                {type === 'Transfer'
                  ? extra
                  : type === 'Redeem'
                    ? 'Gem Vault / Redemption Center'
                    : 'Wallet A'}
              </p>


              <p>
                <b>
                  Amount:
                </b>{' '}

                {amount} RUBIX
              </p>

            </div>


            {/* =========================
                MODAL BUTTONS
            ========================== */}

            <div
              className="
                flex
                gap-3
                mt-7
              "
            >

              <button
                type="button"
                className="btn-outline flex-1"
                onClick={() => setReview(false)}
              >
                CANCEL
              </button>


              <button
                type="button"
                className="btn-primary flex-1"
                onClick={confirm}
              >
                CONFIRM
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  )
}