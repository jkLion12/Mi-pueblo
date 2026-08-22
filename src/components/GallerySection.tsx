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
              className={`group hover-lift overflow-hidden rounded-[2rem] border border-[var(--color-line-soft)] bg-[rgba(255,255,255,0.02)] shadow-[0_24px_60px_rgba(0,0,0,0.22)] ${
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_34%),linear-gradient(180deg,_transparent,_rgba(7,14,21,0.94))]" />
                <div className="absolute right-5 top-5 rounded-full border border-[var(--color-line-soft)] bg-[var(--color-glass)] p-2 text-white backdrop-blur">
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
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-line-soft)] bg-[var(--color-glass)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/78 backdrop-blur">
                    <MapPinned className="h-3.5 w-3.5 text-[var(--color-gold-soft)]" />
                    Abancay · Apurímac
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article
            className="section-shell overflow-hidden rounded-[2.15rem]"
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
            <div className="grid gap-3 p-5 sm:grid-cols-3">
              <MiniStat label="Altura" value="3,100 msnm" />
              <MiniStat label="Mood" value="Sereno" />
              <MiniStat label="Ideal para" value="Fotos" />
            </div>
          </article>

          <article
            className="section-shell relative overflow-hidden rounded-[2.15rem] p-7"
            data-reveal
          >
            <div className="absolute -right-16 top-8 h-36 w-36 rounded-full bg-[rgba(214,123,73,0.18)] blur-3xl" />
            <div className="absolute bottom-0 left-0 h-24 w-40 bg-[linear-gradient(90deg,_rgba(105,139,99,0.22),_transparent)] blur-2xl" />
            <span className="section-eyebrow">Ruta sugerida</span>
            <h3 className="mt-4 font-display text-4xl leading-none text-[var(--color-ink)]">
              Una primera travesía entre valle, bosque y piedra histórica
            </h3>
            <p className="mt-4 text-[15px] leading-8 text-[var(--color-muted)]">
              Si alguien llega por primera vez, este bloque debe ayudarle a
              imaginar un recorrido posible y atractivo, no solo ver tarjetas
              aisladas. Por eso el foco aquí es narrativo y no decorativo.
            </p>
            <div className="mt-6 grid gap-3">
              <HighlightItem title="Mañana" text="Mirador de Taraccasa para leer el valle y ubicar la ciudad." />
              <HighlightItem title="Mediodía" text="Santuario de Ampay para respirar bosque, altura y agua." />
              <HighlightItem title="Tarde" text="Puente Pachachaca y Pacucha para cerrar con paisaje y memoria." />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.35rem] border border-[var(--color-line-soft)] bg-[var(--color-glass)] px-4 py-3">
      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-white/45">{label}</p>
      <p className="mt-2 text-sm font-semibold text-white/88">{value}</p>
    </div>
  );
}

function HighlightItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.35rem] border border-[var(--color-line-soft)] bg-[var(--color-glass)] px-4 py-4">
      <p className="text-sm font-semibold text-[var(--color-sand)]">{title}</p>
      <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{text}</p>
    </div>
  );
}
