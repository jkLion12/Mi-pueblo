import { ArrowRight, BedDouble, Compass, Map, Utensils } from "lucide-react";
import Image from "next/image";

const planningItems = [
  { title: "Explorar destinos", icon: Compass },
  { title: "Buscar experiencias", icon: Map },
  { title: "Dónde hospedarse", icon: BedDouble },
  { title: "Sabores que probar", icon: Utensils },
];

export default function MapSection() {
  return (
    <section id="planifica" className="px-5 py-10 pb-20 sm:px-8 lg:px-10" data-reveal>
      <div className="section-shell mx-auto max-w-7xl overflow-hidden rounded-[2.6rem]">
        <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative p-8 lg:p-10">
            <div className="absolute left-10 top-10 h-28 w-28 rounded-full bg-[rgba(214,123,73,0.14)] blur-3xl" />
            <div className="absolute bottom-8 left-8 h-24 w-36 rounded-full bg-[rgba(105,139,99,0.12)] blur-3xl" />
            <span className="section-eyebrow">Planifica tu viaje</span>
            <h2 className="section-title mt-4">Tu próxima aventura comienza aquí</h2>
            <p className="mt-4 max-w-lg text-[15px] leading-8 text-[var(--color-muted)]">
              Encuentra una guía clara para organizar tu visita, descubrir
              lugares memorables y convertir tu recorrido por Abancay en una
              experiencia más rica, cómoda y auténtica.
            </p>
            <a
              href="#destinos"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-clay)] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#e08b5d]"
            >
              Ver guía de viaje
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="border-t border-[var(--color-line-soft)] bg-[linear-gradient(180deg,_rgba(255,248,236,0.03),_rgba(255,255,255,0.02))] p-6 lg:border-l lg:border-t-0 lg:p-8">
            <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
              <article className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-[var(--color-line-soft)]">
                <Image
                  src="/images/abancay/rutas-abancay.png"
                  alt="Ruta paisajística inspirada en Abancay"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(7,19,29,0.2),_rgba(7,19,29,0.88))]" />
                <div className="absolute left-0 top-0 h-28 w-full bg-[radial-gradient(circle_at_top_left,_rgba(214,123,73,0.22),_transparent_38%)]" />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
                      Vista de planificación
                    </p>
                    <p className="mt-3 font-display text-4xl text-white">Abancay</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Marker label="Centro" />
                    <Marker label="Ampay" />
                    <Marker label="Pacucha" />
                    <Marker label="Ruta escénica" />
                  </div>
                </div>
              </article>

              <div className="space-y-3">
                {planningItems.map(({ title, icon: Icon }) => (
                  <button
                    key={title}
                    className="hover-lift flex w-full items-center justify-between rounded-[1.6rem] border border-[var(--color-line-soft)] bg-[var(--color-glass)] px-4 py-4 text-left text-sm font-medium text-white/88"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl border border-[var(--color-line-soft)] bg-[rgba(255,248,236,0.06)] p-2 text-[var(--color-clay)]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span>{title}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-white/46" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marker({ label }: { label: string }) {
  return (
    <div className="tonal-chip rounded-[1.15rem] px-3 py-2 text-sm text-white/86">
      {label}
    </div>
  );
}
