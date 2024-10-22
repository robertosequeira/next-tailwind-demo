import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function page() {
  return (
    <h1 className="text-3xl font-bold underline">Hello! Home page</h1>
  );
}
