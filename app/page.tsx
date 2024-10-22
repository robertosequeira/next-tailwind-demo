import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PageContent from '@/components/PageContent';

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <>
      <PageHeader>Home</PageHeader>
      <PageContent>
        <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Welcome to the home page!
        </p>
      </PageContent>
    </>
  );
}
