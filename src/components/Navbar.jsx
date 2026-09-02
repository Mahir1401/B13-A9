"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { PawPrint, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/all-pets", label: "All Pets" },
  // { href: "/dashboard/my-requests", label: "My Requests", private: true },
  // { href: "/dashboard/add-pet", label: "Add Pet", private: true },
];
import React from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pine text-paper">
            <PawPrint size={18} strokeWidth={2.2} />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-pine">
            Paws & Homes
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks
            .filter((link) => !link.private || 1)
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-tag text-[0.72rem] uppercase tracking-widest transition-colors hover:text-teal ${
                  pathname === link.href ? "text-teal" : "text-ink/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {1 ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen((open) => !open)}
                className="flex items-center gap-2 rounded-full border border-line bg-white/60 px-2 py-1 pr-3"
              >
                log in
                {/* {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "Profile"}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                ) : (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mustard/40 font-tag text-xs">
                    {session.user.name?.[0]?.toUpperCase() || "U"}
                  </span>
                )} */}
                {/* <span className="text-sm font-medium">{session.user.name}</span>
                <ChevronDown size={14} /> */}
              </button> 

              {profileOpen && (
                <div
                  className="kennel-tag absolute right-0 mt-2 w-44 overflow-hidden py-1 shadow-lg"
                  onMouseLeave={() => setProfileOpen(false)}
                >
                  <Link
                    href="/dashboard/my-listings"
                    className="block px-4 py-2 text-sm hover:bg-paper-dark"
                    onClick={() => setProfileOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="block w-full px-4 py-2 text-left text-sm text-rust hover:bg-paper-dark"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-pine px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-teal-dark"
            >
              Login
            </Link>
          )}
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-line bg-paper px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks
              .filter((link) => !link.private || 1)
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-tag text-xs uppercase tracking-widest text-ink/80"
                >
                  {link.label}
                </Link>
              ))}
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard/my-listings"
                  onClick={() => setMobileOpen(false)}
                  className="font-tag text-xs uppercase tracking-widest text-ink/80"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-left font-tag text-xs uppercase tracking-widest text-rust"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="w-fit rounded-full bg-pine px-5 py-2 text-sm text-paper"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

