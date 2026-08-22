import Image from "next/image";
import { ArrowUpRight, Heart, MapPinned } from "lucide-react";

const destinations = [
  {
    title: "Mirador de Taraccasa",
    category: "Mirador natural",
    description: "Un balcón privilegiado sobre la ciudad y el valle de Abancay.",
    image: "/images/abancay/mirador-taraccasa.png",
  },
  {
    title: "Santuario Nacional de Ampay",
    category: "Biodiversidad",
    description: "Bosques nativos, lagunas y rutas entre neblina, altura y silencio.",
    image: "/images/abancay/santuario-ampay.png",
  },
  {
    title: "Puente Pachachaca",
    category: "Patrimonio histórico",
    description: "Piedra, río e historia colonial en una postal inolvidable del camino.",
    image: "/images/abancay/puente-pachachaca.png",
  },
];

export default function GallerySection() {
  return (
    <section id="destinos" className="px-5 py-10 sm:px-8 lg:px-10" data-reveal>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-eyebrow">Destinos destacados</span>
            <h2 className="section-title mt-4">Lugares que debes conocer</h2>
          </div>
          <a
            href="#planifica"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-clay)] transition hover:text-[#b85b2d]"
          >
            Ver ruta recomendada
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {destinations.map((destination) => (
            <article
              key={destination.title}
              className={`group overflow-hidden rounded-[2rem] border border-[rgba(23,50,77,0.08)] bg-white shadow-[0_24px_60px_rgba(23,50,77,0.09)] ${
                destination.title === "Santuario Nacional de Ampay"
                  ? "lg:col-span-5"
                  : "lg:col-span-7"
              }`}
              data-reveal
            >
              <div className="relative h-[26rem] overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_36%),linear-gradient(180deg,_transparent,_rgba(7,14,21,0.92))]" />
                <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur">
                  <Heart className="h-4 w-4" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
                    {destination.category}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight">
                    {destination.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/74">
                    {destination.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/78 backdrop-blur">
                    <MapPinned className="h-3.5 w-3.5 text-[var(--color-gold-soft)]" />
                    Abancay · Apurímac
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article
            className="overflow-hidden rounded-[2rem] border border-[rgba(23,50,77,0.08)] bg-white shadow-[0_20px_50px_rgba(23,50,77,0.08)]"
            data-reveal
          >
            <div className="relative h-72">
              <Image
                src="/images/abancay/laguna-pacucha.png"
                alt="Laguna de Pacucha"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_transparent,_rgba(9,21,32,0.84))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
                  Excursión recomendada
                </p>
                <h3 className="mt-3 font-display text-3xl">Laguna de Pacucha</h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-white/76">
                  Una de las lagunas más bellas de Apurímac, ideal para ampliar
                  la experiencia más allá de la ciudad.
                </p>
              </div>
            </div>
          </article>

          <article
            className="paper-panel rounded-[2rem] border border-[rgba(23,50,77,0.06)] p-7"
            data-reveal
          >
            <span className="section-eyebrow">Curaduría visual</span>
            <h3 className="mt-4 font-display text-4xl leading-none text-[var(--color-ink)]">
              Postales reales para una portada con más carácter
            </h3>
            <p className="mt-4 text-[15px] leading-8 text-[var(--color-muted)]">
              Reforzamos esta primera experiencia con imágenes inspiradas en
              lugares concretos del circuito turístico de Abancay para acercar
              la web a la sensación editorial del mockup inicial.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>Mirador de Taraccasa para vistas panorámicas de la ciudad.</li>
              <li>Santuario Nacional de Ampay como joya natural principal.</li>
              <li>Puente Pachachaca por su fuerza patrimonial e histórica.</li>
              <li>Laguna de Pacucha como escapada paisajística complementaria.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
