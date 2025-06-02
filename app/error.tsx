// app/error.tsx
'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center p-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <p className="mb-6 text-gray-600">We encountered an unexpected error.</p>
      <button
        onClick={() => reset()}
        className="btn-primary px-6 py-2 rounded-lg"
      >
        Try again
      </button>
    </div>
  )
}
