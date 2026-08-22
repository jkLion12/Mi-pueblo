import Image from "next/image";
import { Camera, Landmark, Mountain, Soup, Trees } from "lucide-react";

const features = [
  {
    title: "Naturaleza",
    description: "Santuario de Ampay, miradores y paisajes que se quedan contigo.",
    icon: Trees,
    image: "/images/abancay/santuario-ampay.png",
  },
  {
    title: "Cultura",
    description: "Tradición, arte local y memorias que siguen presentes en cada rincón.",
    icon: Landmark,
    image: "/images/abancay/mirador-taraccasa.png",
  },
  {
    title: "Gastronomía",
    description: "Sabores caseros, productos andinos y cocina con identidad propia.",
    icon: Soup,
    image: "/images/abancay/gastronomia-abancay.png",
  },
  {
    title: "Festividades",
    description: "Fe, color y encuentros que revelan la identidad de la región.",
    icon: Camera,
    image: "/images/abancay/festividades-abancay.png",
  },
  {
    title: "Rutas",
    description: "Caminos para descubrir paisajes serenos y aventuras memorables.",
    icon: Mountain,
    image: "/images/abancay/rutas-abancay.png",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="experiencias"
      className="relative z-20 -mt-18 px-5 pb-10 sm:px-8 lg:-mt-24 lg:px-10"
      data-reveal
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-7" data-reveal>
          <span className="section-eyebrow text-[var(--color-gold-soft)]">
            Explora a tu manera
          </span>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {features.map(({ title, description, icon: Icon, image }, index) => (
            <article
              key={title}
              className="group hover-lift relative min-h-[15rem] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_22px_60px_rgba(12,24,36,0.24)]"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${index * 90}ms` }}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(8,16,26,0.08),_rgba(8,16,26,0.92))]" />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
              <div className="relative flex h-full flex-col justify-between p-5">
                <div className="tonal-chip inline-flex w-fit rounded-2xl p-3 text-[var(--color-sand)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/74">{description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
