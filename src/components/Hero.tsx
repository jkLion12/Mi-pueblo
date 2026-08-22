import Image from "next/image";
import { ArrowRight, Compass, MapPinned, Mountain, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a231c] text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/abancay/hero-abancay.png"
          alt="Vista panorámica del valle de Abancay al atardecer"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,_rgba(164,209,120,0.2),_transparent_24%),radial-gradient(circle_at_76%_14%,_rgba(64,151,126,0.18),_transparent_22%),linear-gradient(90deg,_rgba(10,35,28,0.84)_0%,_rgba(10,35,28,0.52)_38%,_rgba(10,35,28,0.24)_58%,_rgba(10,35,28,0.68)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,_rgba(10,35,28,1),_transparent)]" />
      </div>

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl flex-col justify-center px-5 pb-24 pt-28 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl" data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[rgba(210,244,224,0.08)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-soft)] shadow-[inset_0_1px_0_rgba(240,247,221,0.12)] backdrop-blur">
              <Compass className="h-3.5 w-3.5" />
              Apurímac · Perú
            </span>
            <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              Abancay, donde los Andes respiran historia y aventura
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
              Tierra de paisajes que emocionan, rutas memorables y una cultura
              viva que transforma cada visita en un recuerdo que merece volver
              a contarse.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/78">
              <InfoPill icon={Mountain} label="Santuario Nacional de Ampay" />
              <InfoPill icon={Sparkles} label="Valle de la eterna primavera" />
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#destinos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#86b86a,#5d956b)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(21,63,45,0.28)] transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-clay)]"
              >
                Explorar destinos
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#comunidad"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-line)] bg-[rgba(210,244,224,0.08)] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-[rgba(210,244,224,0.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-line-strong)]"
              >
                Vive experiencias auténticas
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end" data-reveal>
            <div className="glass-panel relative overflow-hidden rounded-[2.15rem] border border-[var(--color-line)] p-5 backdrop-blur-2xl">
              <div className="rounded-[1.6rem] border border-[var(--color-line-soft)] bg-[linear-gradient(180deg,_rgba(210,244,224,0.14),_rgba(157,214,188,0.05))] p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.24em] text-white/58">
                    Temporada ideal
                  </span>
                  <span className="rounded-full bg-[rgba(216,229,159,0.14)] px-3 py-1 text-xs font-semibold text-[var(--color-gold-soft)]">
                    Mayo - Octubre
                  </span>
                </div>
                <div className="mt-8 grid gap-4">
                  <StatCard label="Destinos imperdibles" value="12+" />
                  <StatCard label="Rutas escénicas" value="7" />
                  <StatCard label="Historias de viajeros" value="180+" />
                </div>
                <div className="mt-8 rounded-[1.5rem] border border-[var(--color-line-soft)] bg-[linear-gradient(180deg,_rgba(210,244,224,0.1),_rgba(255,255,255,0.03))] p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl bg-[rgba(216,229,159,0.12)] p-3 text-[var(--color-gold-soft)]">
                      <MapPinned className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Planifica tu próxima aventura
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/66">
                        Encuentra lugares, inspiración y recomendaciones para
                        descubrir Abancay con una experiencia más cálida y
                        memorable.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-[var(--color-line-soft)]">
                  <div className="relative h-60">
                    <Image
                      src="/images/abancay/mirador-taraccasa.png"
                      alt="Vista desde el mirador de Taraccasa"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,_transparent,_rgba(10,35,28,0.82))]" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
                        Mirador de Taraccasa
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/78">
                        Una de las panorámicas más potentes para entender la
                        escala y el carácter de Abancay.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function InfoPill({
  icon: Icon,
  label,
}: {
  icon: typeof Mountain;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[rgba(210,244,224,0.08)] px-4 py-2 shadow-[inset_0_1px_0_rgba(240,247,221,0.1)] backdrop-blur">
      <Icon className="h-4 w-4 text-[var(--color-gold-soft)]" />
      {label}
    </span>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.55rem] border border-[var(--color-line-soft)] bg-[linear-gradient(180deg,rgba(210,244,224,0.09),rgba(255,255,255,0.03))] p-4 shadow-[inset_0_1px_0_rgba(240,247,221,0.08)]">
      <p className="text-xs uppercase tracking-[0.18em] text-white/48">{label}</p>
      <p className="mt-3 font-display text-3xl text-white">{value}</p>
    </div>
  );
}
