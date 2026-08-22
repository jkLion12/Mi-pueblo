import { ArrowRight, BedDouble, Compass, Map, Utensils } from "lucide-react";

const planningItems = [
  { title: "Explorar destinos", icon: Compass },
  { title: "Buscar experiencias", icon: Map },
  { title: "Dónde hospedarse", icon: BedDouble },
  { title: "Sabores que probar", icon: Utensils },
];

export default function MapSection() {
  return (
    <section id="planifica" className="px-5 py-10 pb-20 sm:px-8 lg:px-10" data-reveal>
      <div className="paper-panel mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-[rgba(23,50,77,0.06)]">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="p-8 lg:p-10">
            <span className="section-eyebrow">Planifica tu viaje</span>
            <h2 className="section-title mt-4">Tu próxima aventura comienza aquí</h2>
            <p className="mt-4 max-w-lg text-[15px] leading-8 text-[var(--color-muted)]">
              Encuentra una guía clara para organizar tu visita, descubrir
              lugares memorables y convertir tu recorrido por Abancay en una
              experiencia más rica, cómoda y auténtica.
            </p>
            <a
              href="#destinos"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10273b]"
            >
              Ver guía de viaje
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="border-t border-[rgba(23,50,77,0.08)] bg-white/70 p-6 lg:border-l lg:border-t-0 lg:p-8">
            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="min-h-[280px] rounded-[1.8rem] border border-[rgba(23,50,77,0.08)] bg-[radial-gradient(circle_at_18%_22%,_rgba(95,125,78,0.22),_transparent_22%),radial-gradient(circle_at_85%_28%,_rgba(201,107,59,0.22),_transparent_18%),linear-gradient(180deg,_#f0eadf,_#e5dccf)] p-5">
                <div className="h-full rounded-[1.45rem] border border-dashed border-[rgba(23,50,77,0.18)] p-5">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                        Vista de planificación
                      </p>
                      <p className="mt-3 font-display text-3xl text-[var(--color-ink)]">
                        Abancay
                      </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Marker label="Centro" />
                      <Marker label="Ampay" />
                      <Marker label="Pacucha" />
                      <Marker label="Ruta escénica" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {planningItems.map(({ title, icon: Icon }) => (
                  <div
                    key={title}
                    className="flex items-center justify-between rounded-[1.4rem] border border-[rgba(23,50,77,0.08)] bg-white px-4 py-4 text-sm font-medium text-[var(--color-ink)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-[rgba(23,50,77,0.06)] p-2 text-[var(--color-clay)]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span>{title}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-[var(--color-muted)]" />
                  </div>
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
    <div className="rounded-2xl border border-[rgba(23,50,77,0.08)] bg-white/80 px-3 py-2 text-sm text-[var(--color-ink)] shadow-sm">
      {label}
    </div>
  );
}
