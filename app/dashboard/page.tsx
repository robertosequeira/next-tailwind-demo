
import type { Metadata } from 'next'
import PageContent from '@/components/PageContent'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function Page() {
  return (
    <>
      <PageHeader>Dashboard</PageHeader>
      <PageContent>
        <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Welcome to the dashboard!
        </p>
      </PageContent>
    </>
  )
}
