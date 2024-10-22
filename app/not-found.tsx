import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">
      <p className="text-base font-semibold leading-8 text-indigo-600">404</p>
      <h1 className="mt-4 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
        Page not found
      </h1>
      <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10">
        <Link href="/" className="text-sm font-semibold leading-7 text-indigo-600">
          <span aria-hidden="true">&larr;</span> Back to home
        </Link>
      </div>
    </main>
  );
}
