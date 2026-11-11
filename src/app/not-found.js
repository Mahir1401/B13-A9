"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[var(--color-card)] text-[var(--color-ink)] text-center p-8">
      <h1 className="text-4xl md:text-5xl font-bold font-[Fraunces]">
        404 – Page Not Found
      </h1>
      <p className="max-w-md mx-auto">
        Oops! The page you're looking for doesn't exist. It may have been moved or removed.
      </p>
      <Link href="/" passHref>
        <Button color="primary" size="md" className="bg-[var(--color-moss)] text-white">
          Go Home
        </Button>
      </Link>
    </section>
  );
}

