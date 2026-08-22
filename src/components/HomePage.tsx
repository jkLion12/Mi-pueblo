import Image from "next/image";
import {
  ArrowRight,
  Camera,
  Compass,
  Heart,
  Leaf,
  MapPinned,
  Mountain,
  ShieldCheck,
  Sparkles,
  Trees,
  UtensilsCrossed,
} from "lucide-react";
import ScrollEffects from "@/components/ScrollEffects";

const routeHighlights = [
  {
    title: "Naturaleza",
    text: "Ampay y miradores cubiertos por neblina, bosque y aire limpio.",
    image: "/images/abancay/santuario-ampay.png",
    icon: Trees,
  },
  {
    title: "Cultura",
    text: "Tradición viva entre plazas, templos y memorias andinas.",
    image: "/images/abancay/mirador-taraccasa.png",
    icon: Sparkles,
  },
  {
    title: "Gastronomía",
    text: "Sabores caseros con raíz serrana y producto local.",
    image: "/images/abancay/gastronomia-abancay.png",
    icon: UtensilsCrossed,
  },
  {
    title: "Festividades",
    text: "Color, fe y comunidad en celebraciones que laten fuerte.",
    image: "/images/abancay/festividades-abancay.png",
    icon: Camera,
  },
  {
    title: "Rutas",
    text: "Circuitos escénicos para explorar lagunas y valles.",
    image: "/images/abancay/rutas-abancay.png",
    icon: Mountain,
  },
];

const experienceCards = [
  {
    title: "Cañón del Apurímac",
    text: "Paisaje de escala monumental para rutas memorables y fotografía.",
    image: "/images/abancay/puente-pachachaca.png",
    icon: Compass,
  },
  {
    title: "Cultura viva",
    text: "Historias, templos y escenas cotidianas que construyen identidad.",
    image: "/images/abancay/festividades-abancay.png",
    icon: Heart,
  },
  {
    title: "Laguna de Pacucha",
    text: "Agua serena, cielo limpio y una escapada que baja el ritmo.",
    image: "/images/abancay/laguna-pacucha.png",
    icon: Leaf,
  },
];

const valuePillars = [
  {
    title: "Naturaleza inmersiva",
    text: "Bosques, lagunas y montañas con una atmósfera más viva y editorial.",
    icon: Sparkles,
  },
  {
    title: "Cultura auténtica",
    text: "Un lenguaje visual inspirado en la memoria, la comunidad y el paisaje.",
    icon: ShieldCheck,
  },
  {
    title: "Sabores con identidad",
    text: "Detalles cromáticos que conectan con hierbas, tierra húmeda y cocina local.",
    icon: UtensilsCrossed,
  },
];

const quickStats = [
  { value: "12+", label: "Destinos esenciales" },
  { value: "7", label: "Rutas escénicas" },
  { value: "180+", label: "Historias reales" },
  { value: "4", label: "Ejes de experiencia" },
];

const footerValues = [
  "Paisaje y aventura",
  "Cultura viva",
  "Gastronomía andina",
  "Recuerdos compartidos",
];

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-transparent text-[var(--color-ink)]">
      <ScrollEffects />

      <section className="relative min-h-screen px-5 pb-12 pt-28 sm:px-8 lg:px-10">
        <div className="absolute inset-0">
          <Image
            src="/images/abancay/hero-abancay.png"
            alt="Paisaje de Abancay con montañas y valle"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,22,16,0.28),rgba(4,22,16,0.54)),radial-gradient(circle_at_18%_22%,rgba(170,214,118,0.16),transparent_20%),radial-gradient(circle_at_78%_18%,rgba(86,174,144,0.16),transparent_16%)]" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,rgba(10,35,28,1),transparent)]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="max-w-3xl pt-10" data-reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[rgba(210,244,224,0.1)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-soft)] shadow-[inset_0_1px_0_rgba(240,247,221,0.14)] backdrop-blur-xl">
                <Compass className="h-3.5 w-3.5" />
                Abancay · Apurímac
              </span>

              <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[0.9] text-white sm:text-6xl lg:text-[5.25rem]">
                Donde el paisaje
                <br />
                respira cultura
                <br />
                <span className="text-[#b6d87b]">y aventura</span>
              </h1>

              <div className="mt-7 h-px w-44 bg-[linear-gradient(90deg,rgba(240,247,221,0.85),rgba(240,247,221,0.12))]" />

              <p className="mt-7 max-w-xl text-base leading-8 text-white/82 sm:text-lg">
                Una portada turística con carácter natural: rutas, gastronomía,
                comunidad y paisajes de Abancay interpretados con un lenguaje
                visual más limpio, inmersivo y contemporáneo.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#destinos"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#8eb964,#6b9d67)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(18,58,39,0.28)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105"
                >
                  Explorar destinos
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#experiencias"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[rgba(210,244,224,0.08)] px-7 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(240,247,221,0.12)] backdrop-blur-xl transition duration-300 hover:bg-[rgba(210,244,224,0.14)]"
                >
                  Ver experiencias
                </a>
              </div>
            </div>

<div
  className="relative x-auto w-full max-w-[40rem] lg:mx-0 lg:justify-self-end"
  data-reveal
>
  <div className="glass-ios overflow-hidden rounded-[2.6rem] p-4 md:mr-16 lg:mr-24">
    <div className="relative overflow-hidden rounded-[2.1rem] border border-[rgba(244,255,247,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="relative h-[32rem] md:h-[34rem]">
        <Image
          src="/images/abancay/santuario-ampay.png"
          alt="Santuario Nacional de Ampay"
          fill
          className="object-cover"
        />

        {/* Gradiente inferior */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,35,28,0.02),rgba(10,35,28,0.78))]" />

        {/* Badges flotantes: pegados a la izquierda */}
        <div className="glass-ios absolute left-4 top-6 z-20 hidden w-36 rounded-[2rem] p-3 md:block lg:top-8">
          <GlassBadge icon={Leaf} label="Naturaleza" />
          <GlassBadge icon={Camera} label="Cultura viva" />
          <GlassBadge icon={UtensilsCrossed} label="Sabores" />
        </div>

        {/* Texto inferior */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold-soft)]">
            Escena principal
          </p>
          <p className="mt-3 max-w-xs font-display text-3xl leading-tight text-white">
            Santuario de Ampay
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/78">
            Bosque nublado, cumbres y una energía visual que da tono
            a toda la experiencia.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>

          <div
            id="destinos"
            className="glass-ios mt-10 rounded-[2.4rem] px-5 py-6 sm:px-7"
            data-reveal
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-center text-xl font-semibold uppercase tracking-[0.16em] text-white/94 sm:text-2xl">
                Circuitos inspirados en la naturaleza
              </p>
            </div>

            <div className="mt-5 grid gap-3 lg:grid-cols-5">
              {routeHighlights.map(({ title, text, image, icon: Icon }, index) => (
                <article
                  key={title}
                  className="group rounded-[1.8rem] border border-[rgba(244,255,247,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3 shadow-[0_16px_32px_rgba(3,18,12,0.12),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-[rgba(210,244,224,0.08)]"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}
                >
                  <div className="relative h-32 overflow-hidden rounded-[1.35rem]">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,35,28,0.05),rgba(10,35,28,0.55))]" />
                  </div>
                  <div className="mt-3 flex items-start gap-3">
                    <div className="rounded-2xl border border-[rgba(244,255,247,0.08)] bg-[rgba(210,244,224,0.08)] p-2.5 text-[var(--color-gold-soft)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/72">{text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experiencias" className="px-5 pb-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {experienceCards.map(({ title, text, image, icon: Icon }, index) => (
              <article
                key={title}
                className="glass-ios rounded-[2.3rem] p-4"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}
              >
                <div className="relative h-72 overflow-hidden rounded-[1.8rem]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,35,28,0.04),rgba(10,35,28,0.84))]" />
                  <div className="absolute left-5 top-5 rounded-2xl border border-[rgba(244,255,247,0.08)] bg-[rgba(210,244,224,0.12)] p-3 text-[var(--color-sand)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-3xl leading-tight text-white">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/78">
                      {text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8 lg:px-10">
        <div className="glass-ios mx-auto max-w-7xl rounded-[2.6rem] p-5 sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div data-reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
                Esencia visual
              </p>
              <h2 className="mt-4 max-w-md font-display text-4xl leading-[0.95] text-white sm:text-5xl">
                Naturaleza, cultura y sabor en una sola dirección estética
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-white/76">
                Reordenamos la portada para que se sienta más cinematográfica:
                vidrio, profundidad, aire visual y una narrativa que conecta con
                el paisaje de Abancay sin verse genérica ni pesada.
              </p>
              <a
                href="#comunidad"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[rgba(210,244,224,0.08)] px-6 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(240,247,221,0.12)] backdrop-blur-xl transition duration-300 hover:bg-[rgba(210,244,224,0.14)]"
              >
                Descubrir historias
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-5 md:grid-cols-3" data-reveal>
              {valuePillars.map(({ title, text, icon: Icon }, index) => (
                <article
                  key={title}
                  className="rounded-[2rem] border border-[rgba(244,255,247,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(210,244,224,0.08))] p-5 shadow-[0_16px_30px_rgba(3,18,12,0.12),inset_0_1px_0_rgba(255,255,255,0.08)]"
                  style={{ ["--reveal-delay" as string]: `${index * 90}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-line-soft)] bg-[rgba(182,216,123,0.14)] text-[var(--color-gold-soft)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/74">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="comunidad" className="px-5 pb-10 sm:px-8 lg:px-10">
        <div className="glass-ios mx-auto max-w-7xl rounded-[2.6rem] p-6">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div data-reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
                Comunidad de viajeros
              </p>
              <h2 className="mt-4 max-w-md font-display text-4xl leading-[0.95] text-white sm:text-5xl">
                Recuerdos que también construyen la portada
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-white/76">
                Este espacio prepara el terreno para que visitantes compartan
                fotos, escenas y evidencia real de sus recorridos por Abancay.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
              <VisualTile image="/images/abancay/mirador-taraccasa.png" title="Miradores" />
              <VisualTile image="/images/abancay/festividades-abancay.png" title="Fiestas" />
              <VisualTile image="/images/abancay/gastronomia-abancay.png" title="Sabores" />
              <VisualTile image="/images/abancay/laguna-pacucha.png" title="Lagunas" />
            </div>
          </div>

          <div className="mt-8 grid gap-4 border-t border-[var(--color-line-soft)] pt-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
            {quickStats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-[1.8rem] border border-[rgba(244,255,247,0.08)] bg-[rgba(210,244,224,0.06)] px-5 py-6 text-center shadow-[0_16px_30px_rgba(3,18,12,0.12),inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                <p className="font-display text-5xl text-white">{value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-white/68">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-[var(--color-line-soft)] pt-6 text-sm uppercase tracking-[0.18em] text-white/62">
          {footerValues.map((value) => (
            <div key={value} className="inline-flex items-center gap-3">
              <span className="h-3 w-3 rounded-full border border-[var(--color-line)] bg-[rgba(182,216,123,0.18)]" />
              {value}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function GlassBadge({
  icon: Icon,
  label,
}: {
  icon: typeof Leaf;
  label: string;
}) {
  return (
    <div className="mb-3 flex min-h-24 flex-col items-center justify-center rounded-[1.45rem] border border-[rgba(244,255,247,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] px-3 text-center text-white shadow-[0_12px_24px_rgba(3,18,12,0.1),inset_0_1px_0_rgba(255,255,255,0.08)]">
      <Icon className="h-5 w-5 text-[var(--color-gold-soft)]" />
      <span className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/82">
        {label}
      </span>
    </div>
  );
}

function VisualTile({ image, title }: { image: string; title: string }) {
  return (
    <article className="overflow-hidden rounded-[1.8rem] border border-[rgba(244,255,247,0.08)] bg-[rgba(255,255,255,0.04)] shadow-[0_16px_30px_rgba(3,18,12,0.1),inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="relative h-44">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,35,28,0.04),rgba(10,35,28,0.72))]" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-lg font-semibold text-white">{title}</p>
        </div>
      </div>
    </article>
  );
}
