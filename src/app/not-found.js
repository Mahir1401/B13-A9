import Link from "next/link";
import { PawPrint } from "lucide-react";


const NotFound = () => {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-4 px-5 py-28 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mustard/30 text-pine">
        <PawPrint size={30} />
      </span>
      <h1 className="font-display text-4xl font-semibold text-pine">
        This trail went cold
      </h1>
      <p className="text-ink/70">
        We sniffed around, but there's no page at this address. It may
        have been adopted out already.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-pine px-6 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-teal-dark"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;


