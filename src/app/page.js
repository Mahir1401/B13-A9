import Link from "next/link";


export const dynamic = "force-dynamic";
import {
  PawPrint,
  HeartHandshake,
  Stethoscope,
  Home as HomeIcon,
  ClipboardList,
  Sparkles,
} from "lucide-react";
const stories = [
            {
              name: "Mowgli",
              text: "Adopted after three weeks on the platform — now sleeps on the good pillow.",
            },
            {
              name: "Juniper",
              text: "Found through the species filter. Her family says it was love at first bark.",
            },
            {
              name: "Pepper",
              text: "A shy rabbit who took two visits to warm up, and never left after that.",
            },
          ]


export default async function HomePage() {
  
  return (
    <div>
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="ink-stamp text-teal">Est. for every good boy & girl</span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-ink md:text-6xl">
              Every pet here is
              <br />
              waiting for <span className="text-teal">their person.</span>
            </h1>
            <p className="mt-5 max-w-md text-ink/70">
              Browse real profiles of dogs, cats, birds and rabbits looking
              for a home, request an adoption, and track it every step of
              the way.
            </p>
            <Link
              href="/all-pets"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-pine px-7 py-3 font-medium text-paper transition-colors hover:bg-teal-dark"
            >
              <PawPrint size={18} /> Adopt Now
            </Link>
          </div>

          <div className="relative mx-auto h-72 w-72 md:h-96 md:w-96">
            <div className="kennel-tag absolute inset-0 flex items-center justify-center rotate-3 shadow-lg">
              <PawPrint size={120} strokeWidth={1} className="text-pine/20" />
            </div>
            <div className="kennel-tag absolute inset-0 -rotate-6 opacity-0 md:opacity-100" />
          </div>
        </div>
      </section>

      
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="font-tag text-xs uppercase tracking-widest text-teal">
              Featured
            </span>
            <h2 className="font-display text-3xl font-semibold text-ink">
              Pets ready to meet you
            </h2>
          </div>
          <Link href="/all-pets" className="hidden text-sm font-medium text-teal md:block">
            View all pets →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* {featuredPets.map((pet) => (
            <PetCard key={pet._id.toString()} pet={{ ...pet, _id: pet._id.toString() }} />
          ))} */}
        </div>
      </section>

      
      <section className="border-t border-line bg-paper-dark">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-semibold text-ink">Why adopt?</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <HeartHandshake className="text-teal" size={26} />
              <h3 className="mt-3 font-display text-lg font-semibold">You save a life</h3>
              <p className="mt-1 text-sm text-ink/70">
                Every adoption opens a spot at a shelter for another animal
                who needs one.
              </p>
            </div>
            <div>
              <Stethoscope className="text-teal" size={26} />
              <h3 className="mt-3 font-display text-lg font-semibold">Vetted & healthy</h3>
              <p className="mt-1 text-sm text-ink/70">
                Health and vaccination status is listed on every profile
                before you commit.
              </p>
            </div>
            <div>
              <HomeIcon className="text-teal" size={26} />
              <h3 className="mt-3 font-display text-lg font-semibold">A better fit</h3>
              <p className="mt-1 text-sm text-ink/70">
                Filter by species and age to find a pet that actually
                matches your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-3xl font-semibold text-ink">Success stories</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <div key={story.name} className="kennel-tag p-5 pt-7">
              <p className="font-display text-base italic text-ink/80">
                "{story.text}"
              </p>
              <p className="mt-3 font-tag text-xs uppercase tracking-widest text-teal">
                {story.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="border-t border-line bg-paper-dark">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-semibold text-ink">Pet care tips</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Schedule a vet check-up in the first week home.",
              "Give a quiet space so a new pet can settle before meeting everyone.",
              "Keep vaccination and deworming dates on a shared calendar.",
              "Introduce new foods gradually to avoid stomach upset.",
            ].map((tip, index) => (
              <div key={index} className="kennel-tag p-5 pt-7 text-sm text-ink/75">
                {tip}
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-3xl font-semibold text-ink">How adoption works</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {[
            {
              icon: PawPrint,
              title: "Browse profiles",
              text: "Search and filter by species until you find the one.",
            },
            {
              icon: ClipboardList,
              title: "Submit a request",
              text: "Pick a pickup date and send a short message to the owner.",
            },
            {
              icon: Sparkles,
              title: "Bring them home",
              text: "Once approved, coordinate pickup and start the next chapter.",
            },
          ].map((step) => (
            <div key={step.title}>
              <step.icon className="text-mustard" size={26} />
              <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm text-ink/70">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="border-t border-line bg-paper-dark">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <h2 className="font-display text-3xl font-semibold text-ink">
            Listed by independent owners & shelters
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink/70">
            Anyone can list a pet that needs a home — individual owners,
            foster carers, and local shelters all use the same simple form.
          </p>
        </div>
      </section>
    </div>
  );
}
