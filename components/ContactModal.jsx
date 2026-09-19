'use client'

import { useState } from 'react'
import { Close } from './UI'

export default function ContactModal({
  open,
  onClose,
  title = 'Contact our team'
}) {
  const [sent, setSent] = useState(false)

  if (!open) return null

  return (
    <div
      className="modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div
        className="
          modal
          relative
          bg-white
          rounded-3xl
          p-8
          max-w-xl
          w-full
          shadow-2xl
        "
      >
        {/* Close Button */}
        <Close onClick={onClose} />

        {/* Title */}
        <h3 className="diamond-text text-4xl">
          {title}
        </h3>

        {sent ? (
          /* Success Message */
          <div className="py-16 text-center">
            <div className="text-5xl text-[#B00010]">
              ✓
            </div>

            <p className="mt-4">
              Form submitted in demo mode.
            </p>

            <p className="text-sm text-black/50">
              Connect this form to your production email/API before launch.
            </p>
          </div>
        ) : (
          /* Contact Form */
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            {/* Name */}
            <input
              required
              className="
                w-full
                border
                border-red-100
                rounded-xl
                p-3
              "
              placeholder="Name"
            />

            {/* Email */}
            <input
              required
              type="email"
              className="
                w-full
                border
                border-red-100
                rounded-xl
                p-3
              "
              placeholder="Email"
            />

            {/* Company / Institution */}
            <input
              className="
                w-full
                border
                border-red-100
                rounded-xl
                p-3
              "
              placeholder="Company / Institution"
            />

            {/* Message */}
            <textarea
              required
              className="
                w-full
                border
                border-red-100
                rounded-xl
                p-3
                min-h-32
              "
              placeholder="Message"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Send Enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  )
}