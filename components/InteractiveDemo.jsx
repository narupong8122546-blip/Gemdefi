'use client'

import { useState } from 'react'
import { Img } from './UI'
import MintRedeemSimulator from './MintRedeemSimulator'


export default function InteractiveDemo() {
  const [logged, setLogged] = useState(false)

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [show, setShow] = useState(false)

  const [status, setStatus] = useState('')
  const [connecting, setConnecting] = useState(false)


  /* =========================
     SOCIAL DEMO LOGIN
  ========================== */

  const socialLogin = (provider) => {
    if (connecting) return

    setConnecting(true)
    setStatus(`CONNECTING WITH ${provider.toUpperCase()}...`)

    setTimeout(() => {
      setStatus(`✓ CONNECTED WITH ${provider.toUpperCase()}`)

      setTimeout(() => {
        setLogged(true)
        setConnecting(false)
        setStatus('')
      }, 700)
    }, 900)
  }


  /* =========================
     EMAIL DEMO LOGIN
  ========================== */

  const emailLogin = () => {
    if (connecting) return

    if (!email || !pass) {
      setStatus('Please enter Email and Password.')
      return
    }

    setConnecting(true)
    setStatus('CONNECTING WITH EMAIL...')

    setTimeout(() => {
      setStatus('✓ CONNECTED WITH EMAIL')

      setEmail('')
      setPass('')

      setTimeout(() => {
        setLogged(true)
        setConnecting(false)
        setStatus('')
      }, 700)
    }, 900)
  }


  return (
    <section
      id="demo"
      className="
        section-pad
        bg-[#F0F0F0]
        min-h-[1000px]
      "
    >

      {/* =========================
          RUBIX LOGO
      ========================== */}

      <Img
        src="/rubix-logo.png"
        alt="RUBIX Logo + Wordmark"
        className="
          w-44
          h-16
          object-contain
        "
      />


      {/* =========================
          HERO CONTENT
      ========================== */}

      <div className="text-center mt-14">

        {/* Main Heading */}
        <h2
          className="
            text-[#E23D44]
            text-5xl
            md:text-[50px]
            leading-none
          "
        >
          INTERACTIVE DEMO
        </h2>


        {/* Second Heading */}
        <h3
          className="
            font-montserrat
            font-normal
            text-[#E23D44]
            mt-4
          "
          style={{
            fontSize: '24px',
          }}
        >
          MINT • REDEEM • TRANSFER
        </h3>


        {/* Description */}
        <p
          className="
            font-montserrat
            font-normal
            text-black
            mt-2
          "
          style={{
            fontSize: '18px',
          }}
        >
          Real Gemstone · Mint RUBIX · Wallet · Redeem Real Value
        </p>

      </div>


      {/* =========================
          LOGIN / SIMULATOR
      ========================== */}

      {!logged ? (

        /* =========================
            DEMO LOGIN CARD
        ========================== */

        <div
          className="
            max-w-md
            mx-auto
            mt-14
            bg-white
            border
            border-red-100
            rounded-3xl
            p-7
            md:p-8
            shadow-lg
          "
        >

          {/* RUBIX Wallet Icon */}
          <div
            className="
                mx-auto
                w-[120px]
                h-[120px]
                md:w-[140px]
                md:h-[140px]
                flex
                items-center
                justify-center
                mb-6
              "
          >
            <img
              src="/rubix-wallet.png"
              alt="RUBIX Wallet"
              className="
                  w-full
                  h-full
                  object-contain
                  scale-125
                "
            />
          </div>


          {/* Login Heading */}
          <h3
            className="
              text-center
              text-2xl
              font-semibold
            "
          >
            Connect to WALLET
          </h3>


          {/* Login Description */}
          <p
            className="
              text-center
              text-sm
              text-black/50
              mt-2
            "
          >
            Choose a demo connection method to access
            Mint, Redeem &amp; Transfer.
          </p>


          {/* =========================
              SOCIAL LOGIN
          ========================== */}

          <div className="space-y-3 mt-7">

            {/* Google */}
            <button
              type="button"
              disabled={connecting}
              onClick={() => socialLogin('Google')}
              className="
                w-full
                h-12
                rounded-xl
                border
                border-black/10
                bg-white
                flex
                items-center
                justify-center
                gap-3
                font-medium
                hover:border-[#E23D44]/50
                hover:bg-red-50/30
                active:scale-[.98]
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              <span
                className="
                  w-7
                  h-7
                  rounded-full
                  border
                  border-black/10
                  flex
                  items-center
                  justify-center
                  font-semibold
                "
              >
                G
              </span>

              Continue with Google
            </button>


            {/* Facebook */}
            <button
              type="button"
              disabled={connecting}
              onClick={() => socialLogin('Facebook')}
              className="
                w-full
                h-12
                rounded-xl
                border
                border-black/10
                bg-white
                flex
                items-center
                justify-center
                gap-3
                font-medium
                hover:border-[#E23D44]/50
                hover:bg-red-50/30
                active:scale-[.98]
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              <span
                className="
                  w-7
                  h-7
                  rounded-full
                  border
                  border-black/10
                  flex
                  items-center
                  justify-center
                  font-bold
                "
              >
                f
              </span>

              Continue with Facebook
            </button>


            {/* LINE */}
            <button
              type="button"
              disabled={connecting}
              onClick={() => socialLogin('LINE')}
              className="
                w-full
                h-12
                rounded-xl
                border
                border-black/10
                bg-white
                flex
                items-center
                justify-center
                gap-3
                font-medium
                hover:border-[#E23D44]/50
                hover:bg-red-50/30
                active:scale-[.98]
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              <span
                className="
                  w-7
                  h-7
                  rounded-full
                  border
                  border-black/10
                  flex
                  items-center
                  justify-center
                  text-[10px]
                  font-bold
                "
              >
                LINE
              </span>

              Continue with LINE
            </button>

          </div>


          {/* =========================
              DIVIDER
          ========================== */}

          <div
            className="
              flex
              items-center
              gap-4
              my-7
            "
          >
            <div className="h-px bg-black/10 flex-1" />

            <span className="text-xs text-black/40">
              OR CONTINUE WITH EMAIL
            </span>

            <div className="h-px bg-black/10 flex-1" />
          </div>


          {/* =========================
              EMAIL
          ========================== */}

          <input
            className="
              w-full
              h-12
              border
              border-red-100
              rounded-xl
              px-4
              outline-none
              focus:border-[#E23D44]
              transition
            "
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          {/* =========================
              PASSWORD
          ========================== */}

          <div className="relative mt-3">

            <input
              className="
                w-full
                h-12
                border
                border-red-100
                rounded-xl
                px-4
                pr-16
                outline-none
                focus:border-[#E23D44]
                transition
              "
              type={show ? 'text' : 'password'}
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-xs
                text-[#B00010]
              "
            >
              {show ? 'Hide' : 'Show'}
            </button>

          </div>


          {/* =========================
              EMAIL LOGIN BUTTON
          ========================== */}

          <button
            type="button"
            disabled={connecting}
            onClick={emailLogin}
            className="
              w-full
              h-12
              rounded-full
              mt-5
              text-white
              font-semibold
              bg-[radial-gradient(circle_at_55%_45%,#EA7275,#F60D1A_35%,#B00010_85%)]
              hover:scale-[1.02]
              active:scale-[.98]
              transition
              disabled:opacity-60
              disabled:cursor-not-allowed
            "
          >
            Continue with Email
          </button>


          {/* =========================
              CONNECTION STATUS
          ========================== */}

          {status && (
            <div
              className="
                mt-5
                min-h-[52px]
                rounded-xl
                bg-red-50
                border
                border-red-100
                flex
                items-center
                justify-center
                px-4
                text-center
              "
            >
              <p
                className="
                  text-sm
                  font-semibold
                  text-[#B00010]
                "
              >
                {status}
              </p>
            </div>
          )}


          {/* =========================
              DEMO NOTICE
          ========================== */}

          <p
            className="
              text-xs
              text-black/40
              mt-5
              text-center
              leading-relaxed
            "
          >
            Demo interface only. No real Google, Facebook,
            LINE or email authentication is performed.
            No credentials are stored.
          </p>

        </div>

      ) : (

        /* =========================
            MINT / REDEEM SIMULATOR
        ========================== */

        <MintRedeemSimulator />

      )}

    </section>
  )
}