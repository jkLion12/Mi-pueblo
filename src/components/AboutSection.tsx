import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="gastronomia"
      className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-10"
      data-reveal
    >
      <div className="section-shell mx-auto grid max-w-7xl gap-8 p-5 lg:grid-cols-[0.9fr_1.1fr] lg:p-6">
        <div className="grid gap-5" data-reveal>
          <article className="relative min-h-[18rem] overflow-hidden rounded-[1.8rem] soft-stroke">
            <Image
              src="/images/abancay/gastronomia-abancay.png"
              alt="Gastronomía inspirada en Abancay"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(8,16,26,0.04),_rgba(8,16,26,0.88))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
                Gastronomía local
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--color-sand)]">
                Cocinas de fuego lento, maíz, papas y hospitalidad.
              </p>
            </div>
          </article>
          <article className="relative min-h-[15rem] overflow-hidden rounded-[1.8rem] soft-stroke">
            <Image
              src="/images/abancay/festividades-abancay.png"
              alt="Festividades andinas inspiradas en Abancay"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(8,16,26,0.08),_rgba(8,16,26,0.9))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
                Cultura viva
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--color-sand)]">
                Color, ritual y memoria compartida en las calles.
              </p>
            </div>
          </article>
        </div>
        <div className="flex flex-col justify-center p-4 lg:p-8" data-reveal>
          <span className="section-eyebrow">La esencia de Abancay</span>
          <h2 className="section-title mt-4 max-w-2xl">
            Paisaje, sabor y tradición en una sola experiencia.
          </h2>
          <div className="mt-6 space-y-5 text-[15px] leading-8 text-[var(--color-muted)]">
            <p>
              Abancay no se entiende solo por sus vistas. También se siente en
              la mesa, en la música, en sus fiestas y en el ritmo cálido con el
              que la ciudad recibe a quien llega.
            </p>
            <p>
              Esta franja une gastronomía y cultura porque son parte del mismo
              relato: una ciudad andina rodeada de naturaleza, con identidad
              fuerte y momentos que merecen quedarse en la memoria del viaje.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="tonal-chip rounded-full px-4 py-2 text-sm text-white/78">
              Cocina andina
            </span>
            <span className="tonal-chip rounded-full px-4 py-2 text-sm text-white/78">
              Tradición viva
            </span>
            <span className="tonal-chip rounded-full px-4 py-2 text-sm text-white/78">
              Encuentro local
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
