'use client'

import { useState } from 'react'

/* =========================
    IMAGE
========================== */
export function Img({
  src,
  alt,
  className = '',
}) {
  const [bad, setBad] = useState(false)

  return bad ? (
    /* Image Placeholder */
    <div
      className={`
        placeholder
        ${className}
      `}
    >
      {alt}

      <br />

      <span className="text-xs opacity-60">
        Replace image in /public
      </span>
    </div>
  ) : (
    /* Image */
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setBad(true)}
    />
  )
}

/* =========================
    CLOSE BUTTON
========================== */
export function Close({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Close"
      className="
        absolute
        right-5
        top-4
        text-2xl
        text-[#B00010]
      "
    >
      ×
    </button>
  )
}