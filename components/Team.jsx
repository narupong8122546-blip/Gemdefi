import { Img } from './UI'

export default function Team() {
  return (
    <section
      id="team"
      className="bg-white"
    >

      {/* =========================
          SECTION #1 : LEADERSHIP
      ========================== */}

      <div className="section-pad pb-14">

        {/* =========================
            LEADERSHIP HEADER
        ========================== */}

        <div className="text-center">

          {/* Sub Heading */}
          <p
            className="
              text-[#E23D44]
              text-2xl
              text-center
            "
          >
            Leadership
          </p>


          {/* Main Heading */}
          <h2
            className="
              text-[#E23D44]
              text-4xl
              md:text-[50px]
              leading-tight
              text-center
            "
          >
            Meet the Founders Behind GemDeFi
          </h2>


          {/* Description */}
          <p
            className="
              text-lg
              mt-4
              max-w-3xl
              mx-auto
              text-center
            "
          >
            Building the bridge between verified real-world assets and
            on-chain markets.
          </p>

        </div>


        {/* =========================
            TEAM MEMBERS
        ========================== */}

        <div
          className="
            grid
            md:grid-cols-3
            gap-8
            mt-10
          "
        >
          {[1, 2, 3].map((n) => (
            <article
              key={n}
              className="
                rounded-2xl
                overflow-hidden
                bg-white
                shadow-[0_4px_15px_rgba(194,2,5,.3)]
              "
            >

              {/* Member Image */}
              <Img
                src={`/team-0${n}.jpg`}
                alt={`Member #${n}`}
                className="
                  w-full
                  h-[300px]
                  object-cover
                  bg-[#c20205]/[.06]
                "
              />


              {/* Member Information */}
              <div className="p-5 h-[110px]">

                {/* Name + LinkedIn */}
                <div className="flex justify-between">

                  <b>
                    Member #{n}
                  </b>

                  <a
                    href="#"
                    aria-label={`LinkedIn Member ${n}`}
                    className="text-[#B00010]"
                  >
                    in
                  </a>

                </div>


                {/* Position */}
                <p className="text-sm text-black/55 mt-2">
                  Position &amp; experience — content to be provided.
                </p>

              </div>

            </article>
          ))}
        </div>

      </div>


      {/* =========================
          SECTION #2 : PARTNERSHIP
      ========================== */}

      <div
        className="
          px-6
          md:px-10
          lg:px-[max(40px,calc((100vw-1240px)/2))]
          pt-12
          md:pt-16
          pb-20
          md:pb-24
        "
      >

        {/* =========================
            PARTNERSHIP HEADER
        ========================== */}

        <div className="text-center">

          {/* Sub Heading */}
          <p
            className="
              text-[#E23D44]
              text-lg
              md:text-xl
              font-medium
              mb-3
              text-center
            "
          >
            Partnership
          </p>


          {/* Main Heading */}
          <h3
            className="
              text-[#E23D44]
              text-4xl
              md:text-[50px]
              lg:text-[60px]
              leading-[1.1]
              text-center
            "
          >
            Trusted by Leading Institutions
          </h3>

        </div>


        {/* =========================
            PARTNER LOGOS
        ========================== */}

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
            gap-4
            md:gap-5
            mt-10
            md:mt-12
            max-w-[1200px]
            mx-auto
          "
        >
          {Array.from(
            { length: 6 },
            (_, i) => (
              <div
                key={i}
                className="
                  placeholder
                  h-[90px]
                  md:h-[100px]
                  rounded-xl
                "
              >
                Partner Logo {i + 1}
              </div>
            )
          )}
        </div>

      </div>

    </section>
  )
}