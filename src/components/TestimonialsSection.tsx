import Image from "next/image";

const travelerStories = [
  {
    name: "María F.",
    place: "Lima",
    story:
      "Sentí una calidez especial en su gente y una tranquilidad que no se encuentra fácil.",
  },
  {
    name: "Carlos A.",
    place: "Cusco",
    story:
      "Ampay tiene una energía única. Cada vista parece hecha para quedarse en la memoria.",
  },
  {
    name: "Lucía R.",
    place: "Arequipa",
    story:
      "Lo más bonito fue sentir que el viaje no era solo paisaje, sino también encuentro y cultura.",
  },
];

const photoGrid = [
  {
    label: "Santuario Nacional de Ampay",
    image: "/images/abancay/santuario-ampay.png",
  },
  {
    label: "Mirador de Taraccasa",
    image: "/images/abancay/mirador-taraccasa.png",
  },
  {
    label: "Puente Pachachaca",
    image: "/images/abancay/puente-pachachaca.png",
  },
  {
    label: "Valle de Abancay",
    image: "/images/abancay/hero-abancay.png",
  },
  {
    label: "Laguna de Pacucha",
    image: "/images/abancay/laguna-pacucha.png",
  },
  {
    label: "Rutas entre montañas",
    image: "/images/abancay/santuario-ampay.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="comunidad" className="px-5 py-10 sm:px-8 lg:px-10" data-reveal>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Comunidad de viajeros</span>
            <h2 className="section-title mt-4">Recuerdos que también cuentan la historia del destino</h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--color-muted)]">
              Queremos que la web muestre no solo lugares, sino también las
              experiencias reales de quienes ya caminaron por Abancay y
              encontraron aquí algo memorable.
            </p>
          </div>
          <a
            href="#galeria"
            className="inline-flex h-fit items-center rounded-full border border-[rgba(23,50,77,0.14)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-clay)] hover:text-[var(--color-clay)]"
          >
            Compartir mi experiencia
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" id="galeria">
            {photoGrid.map((item, index) => (
              <div
                key={item.label}
                className={`relative min-h-[190px] overflow-hidden rounded-[1.75rem] border border-[rgba(23,50,77,0.08)] shadow-[0_18px_45px_rgba(23,50,77,0.08)] ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.03),_rgba(7,14,21,0.72))]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {travelerStories.map((traveler) => (
              <article
                key={traveler.name}
                className="rounded-[1.75rem] border border-[rgba(23,50,77,0.08)] bg-white p-6 shadow-[0_20px_50px_rgba(23,50,77,0.08)]"
                data-reveal
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,_#c96b3b,_#17324d)] text-sm font-semibold text-white">
                    {traveler.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">{traveler.name}</p>
                    <p className="text-sm text-[var(--color-muted)]">{traveler.place}, Perú</p>
                  </div>
                </div>
                <p className="mt-5 text-[15px] leading-8 text-[var(--color-muted)]">
                  “{traveler.story}”
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
