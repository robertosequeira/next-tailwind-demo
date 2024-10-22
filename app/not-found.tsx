import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not Found',
}

export default function NotFound() {
  return (
    <h1 className="text-3xl font-bold underline">
      This page could not be found.
    </h1>
  )
}
