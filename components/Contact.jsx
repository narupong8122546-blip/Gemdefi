'use client'

const social = [
  'X',
  'LinkedIn',
  'Instagram',
  'Discord',
  'Telegram',
  'YouTube',
]

export default function Contact({ onContact }) {
  return (
    <section
      id="contact"
      className="
        section-pad
        bg-[#F0F0F0]
        min-h-[530px]
        flex
        flex-col
        items-center
        justify-center
        text-center
      "
    >
      {/* Sub Heading */}
      <p className="text-[#E23D44] text-2xl font-normal">
        CONNECT WITH GEMDEFI
      </p>

      {/* Main Heading */}
      <h2
        className="
          text-[#E23D44]
          text-4xl
          md:text-[50px]
          leading-tight
          mt-2
          max-w-[1200px]
        "
      >
        Shape the Future of Real-World Assets
      </h2>

      {/* Description */}
      <p className="mt-4 text-lg text-black">
        Explore partnerships and opportunities across the GemDeFi ecosystem
      </p>

      {/* Contact Button */}
      <button
        type="button"
        onClick={onContact}
        className="btn-primary mt-8"
      >
        Contact our team
      </button>

      {/* Social Media */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {social.map((s) => (
          <a
            key={s}
            href="#"
            aria-label={s}
            className="
              grid
              h-12
              w-12
              place-items-center
              rounded-full
              border
              border-red-100
              bg-white
              text-xs
              text-[#B00010]
            "
          >
            {s.slice(0, 2)}
          </a>
        ))}
      </div>
    </section>
  )
}