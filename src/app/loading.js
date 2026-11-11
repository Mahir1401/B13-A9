"use client";

import { Spinner } from "@heroui/react";

export default function GlobalLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-card)]">
      <Spinner size="lg" className="text-[var(--color-moss)] animate-spin" />
    </div>
  );
}