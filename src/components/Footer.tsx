export default function Footer() {
  return (
    <footer className="px-5 pb-8 pt-14 text-white sm:px-8 lg:px-10">
      <div className="section-shell mx-auto grid max-w-7xl gap-10 rounded-[2.2rem] p-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr_1.1fr]">
        <div>
          <p className="font-display text-4xl">Abancay</p>
          <p className="mt-3 text-sm uppercase tracking-[0.22em] text-white/45">
            Apurímac · Perú
          </p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
            Un destino para descubrir montañas, cultura viva y recuerdos que
            merecen compartirse.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-gold-soft)]">
            Explora
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/68">
            <li><a href="#destinos">Destinos</a></li>
            <li><a href="#experiencias">Experiencias</a></li>
            <li><a href="#comunidad">Comunidad</a></li>
            <li><a href="#planifica">Planifica tu viaje</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-gold-soft)]">
            Información
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/68">
            <li>Guía de viaje</li>
            <li>Rutas recomendadas</li>
            <li>Consejos prácticos</li>
            <li>Historias de viajeros</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-gold-soft)]">
            Recibe inspiración
          </p>
          <p className="mt-4 text-sm leading-7 text-white/65">
            Muy pronto esta sección podrá recibir novedades, rutas y nuevas
            historias compartidas por visitantes.
          </p>
          <div className="mt-5 flex rounded-full border border-[var(--color-line-soft)] bg-[var(--color-glass)] p-1">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/34 focus:outline-none"
            />
            <button className="rounded-full bg-[linear-gradient(135deg,#86b86a,#5d956b)] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-105">
              Enviar
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-7xl pt-2 text-center text-xs text-white/38">
        © 2026 Abancay, Apurímac. Todos los derechos reservados.
      </div>
    </footer>
  );
}
