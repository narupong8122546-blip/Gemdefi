const phases = [
  {
    number: 1,
    date: 'October–November 2026',
    title: 'Foundation and Asset Onboarding',
  },
  {
    number: 2,
    date: 'December 2026–January 2027',
    title: 'Technology, Oracle and Security Infrastructure',
  },
  {
    number: 3,
    date: 'February–March 2027',
    title: 'RUBIX Genesis and Market Preparation',
  },
  {
    number: 4,
    date: 'April 2027',
    title: 'Reserve Audit and System Readiness',
  },
  {
    number: 5,
    date: 'May–September 2027',
    title: 'Market Activation and Physical Redemption',
  },
  {
    number: 6,
    date: 'October–December 2027',
    title: 'Compliance and Global Onboarding',
  },
]


export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="
        section-pad
        min-h-[1750px]
        md:min-h-[1900px]
        bg-white
        bg-cover
        bg-center
      "
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.9)), url('/roadmap-bg.jpg')",
      }}
    >

      {/* =========================
          ROADMAP HEADER
      ========================== */}

      <div className="text-center">

        <p
          className="
            text-[#E23D44]
            text-xl
            md:text-2xl
            font-medium
          "
        >
          2026 - 2027
        </p>


        <h2
          className="
            text-[#E23D44]
            text-5xl
            md:text-[50px]
            leading-tight
            mt-2
          "
        >
          Roadmap
        </h2>

      </div>


      {/* =========================
          ROADMAP TIMELINE
      ========================== */}

      <div
        className="
          relative
          max-w-5xl
          mx-auto
          mt-16
          md:mt-20
        "
      >

        {/* =========================
            VERTICAL TIMELINE LINE
        ========================== */}

        <div
          className="
            absolute

            left-[20px]

            md:left-1/2
            md:-translate-x-1/2

            top-6
            bottom-6

            w-[4px]

            rounded-full

            bg-gradient-to-b
            from-[#B00010]
            via-[#F60D1A]
            to-[#741521]
          "
        />


        {/* =========================
            ROADMAP PHASES
        ========================== */}

        <div className="relative">

          {phases.map((phase, index) => (

            <div
              key={phase.number}
              className="
                relative

                grid

                grid-cols-[40px_1fr]

                md:grid-cols-[1fr_80px_1fr]

                items-start

                mb-16
                md:mb-20

                last:mb-0
              "
            >

              {/* =========================
                  MOBILE TIMELINE POINT
              ========================== */}

              <div
                className="
                  md:hidden

                  relative

                  flex
                  justify-center

                  pt-6

                  z-20
                "
              >

                <span
                  className="
                    block

                    w-5
                    h-5

                    rounded-full

                    bg-[#B00010]

                    ring-8
                    ring-red-100
                  "
                />

              </div>


              {/* =========================
                  LEFT CARD - DESKTOP
              ========================== */}

              {index % 2 === 0 ? (

                <div
                  className="
                    hidden
                    md:block

                    pr-6
                  "
                >

                  <PhaseCard phase={phase} />

                </div>

              ) : (

                <div className="hidden md:block" />

              )}


              {/* =========================
                  DESKTOP TIMELINE POINT
              ========================== */}

              <div
                className="
                  hidden
                  md:flex

                  relative

                  justify-center

                  pt-6

                  z-20
                "
              >

                <span
                  className="
                    block

                    w-5
                    h-5

                    rounded-full

                    bg-[#B00010]

                    ring-8
                    ring-red-100
                  "
                />

              </div>


              {/* =========================
                  RIGHT CARD - DESKTOP
              ========================== */}

              {index % 2 !== 0 ? (

                <div
                  className="
                    hidden
                    md:block

                    pl-6
                  "
                >

                  <PhaseCard phase={phase} />

                </div>

              ) : (

                <div className="hidden md:block" />

              )}


              {/* =========================
                  MOBILE CARD
              ========================== */}

              <div
                className="
                  md:hidden
                  pl-5
                "
              >

                <PhaseCard phase={phase} />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}


/* =========================
   PHASE CARD
========================= */

function PhaseCard({ phase }) {
  return (

    <div
      className="
        bg-white

        border
        border-red-100

        shadow-lg

        rounded-2xl

        p-6
        md:p-7

        min-h-[190px]
        md:min-h-[210px]

        flex
        flex-col
        justify-center
      "
    >

      {/* =========================
          PHASE NUMBER
      ========================== */}

      <div
        className="
          text-[#E23D44]

          text-sm

          font-semibold

          tracking-[0.08em]
        "
      >
        PHASE {String(phase.number).padStart(2, '0')}
      </div>


      {/* =========================
          DATE
      ========================== */}

      <div
        className="
          text-[#E23D44]

          text-base
          md:text-lg

          font-medium

          mt-3
        "
      >
        {phase.date}
      </div>


      {/* =========================
          PHASE TITLE
      ========================== */}

      <h3
        className="
          text-[#E23D44]

          text-2xl
          md:text-[28px]

          leading-tight

          mt-2
        "
      >
        {phase.title}
      </h3>

    </div>

  )
}