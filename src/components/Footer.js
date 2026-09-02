import Link from "next/link";
import { PawPrint, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = ["Facebook", "Instagram", "Twitter"];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-paper-dark">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pine text-paper">
              <PawPrint size={16} />
            </span>
            <span className="font-display text-lg font-semibold text-pine">
              Paws & Homes
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink/70">
            A place for pets who are waiting on a couch of their own — browse
            listings, meet a good boy or girl, and bring them home.
          </p>
        </div>

        <div>
          <h3 className="font-tag text-xs uppercase tracking-widest text-ink/60">
            Contact
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-ink/80">
            <li className="flex items-center gap-2">
              <Mail size={15} /> 
              paws&homes@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} /> +880 1XX-XXXXXXX
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} /> Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-tag text-xs uppercase tracking-widest text-ink/60">
            Follow along
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {socialLinks.map((label) => (
              <Link
                key={label}
                href="#"
                className="rounded-full border border-line px-3 py-1.5 text-xs font-medium hover:bg-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="paper-divider mx-5 py-4 text-center font-tag text-[0.7rem] uppercase tracking-widest text-ink/50">
        © {new Date().getFullYear()} Paws & Homes. All rights reserved.
      </div>
    </footer>
  );
}
