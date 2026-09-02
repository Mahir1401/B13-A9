import { PawPrint } from "lucide-react";

const Spinner = ({ label = "Fetching pets..." }) => {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3">
      <PawPrint className="animate-spin text-pine" size={34} strokeWidth={1.8} />
      <p className="font-tag text-xs uppercase tracking-widest text-ink/50">
        {label}
      </p>
    </div>
  );
};

export default Spinner;