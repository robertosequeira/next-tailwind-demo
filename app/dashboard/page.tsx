
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function Page() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello! Dashboard page
    </h1>
  )
}
