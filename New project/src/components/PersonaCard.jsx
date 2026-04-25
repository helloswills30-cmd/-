import { getPersona } from "../data/personaMap";

export default function PersonaCard({ personaCode, className = "" }) {
  const persona = getPersona(personaCode);

  if (!persona) {
    return null;
  }

  return (
    <article className={`persona-card ${className}`.trim()}>
      <img className="persona-card__image" src={persona.image} alt={persona.name} />
      <div className="persona-card__content">
        <p className="persona-card__code">{persona.code}</p>
        <h3 className="persona-card__name">{persona.name}</h3>
        <p className="persona-card__desc">{persona.desc}</p>
      </div>
    </article>
  );
}
