import { experiences } from '../../data/experience'
import './Experiencias.css'

const sortedExperiences = [...experiences].sort((a, b) =>
  b.startDate.localeCompare(a.startDate),
)

function Experiencias() {
  return (
    <section id="experiencias" className="experiencias">
      <div className="container">
        <span className="section-eyebrow">Trajetória</span>
        <h2 className="section-title">Experiências</h2>

        <ol className="timeline">
          {sortedExperiences.map((exp) => (
            <li key={exp.id} className="timeline__item">
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__content">
                <div className="timeline__heading">
                  <h3>
                    {exp.role} <span className="timeline__sep">•</span>{' '}
                    <span className="timeline__company">{exp.company}</span>
                  </h3>
                  <span className="timeline__period">{exp.period}</span>
                </div>
                <p>{exp.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experiencias
