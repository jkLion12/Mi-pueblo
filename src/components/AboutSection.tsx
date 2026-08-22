import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="gastronomia"
      className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-10"
      data-reveal
    >
      <div className="paper-panel mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2.2rem] border border-[rgba(23,50,77,0.06)] p-5 lg:grid-cols-[1.05fr_0.95fr] lg:p-6">
        <div className="relative min-h-[24rem] overflow-hidden rounded-[1.8rem]" data-reveal>
          <Image
            src="/images/abancay/gastronomia-abancay.png"
            alt="Gastronomía inspirada en Abancay"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_transparent,_rgba(9,21,32,0.84))]" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
              Sabores con identidad
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/76">
              Una narrativa visual más cálida para que la página respire
              cultura viva, hospitalidad y viaje real.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center p-4 lg:p-8" data-reveal>
          <span className="section-eyebrow">La esencia de Abancay</span>
          <h2 className="section-title mt-4 max-w-2xl">
            Un destino que se descubre mejor con tiempo, curiosidad y ganas de
            dejarse sorprender.
          </h2>
          <div className="mt-6 space-y-5 text-[15px] leading-8 text-[var(--color-muted)]">
            <p>
            Diseñamos esta experiencia para que el visitante encuentre
            inspiración visual, información clara y una conexión emocional con
            la ciudad y su entorno natural.
            </p>
            <p>
            La propuesta mezcla paisaje, cultura, gastronomía y comunidad para
            que la web no solo informe, sino también invite a imaginar el viaje
            y vivirlo desde el primer vistazo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
