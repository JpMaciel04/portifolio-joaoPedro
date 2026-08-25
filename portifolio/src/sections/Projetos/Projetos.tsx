import { projects } from '../../data/projects'
import './Projetos.css'

const MONTHS = [
  'jan',
  'fev',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez',
]

function formatProjectDate(iso: string) {
  const [year, month] = iso.split('-')
  return `${MONTHS[Number(month) - 1]}. ${year}`
}

const sortedProjects = [...projects].sort((a, b) => b.date.localeCompare(a.date))

function Projetos() {
  return (
    <section id="projetos" className="projetos">
      <div className="container projetos__inner">
        <div className="projetos__intro">
          <span className="section-eyebrow">Portfólio</span>
          <h2 className="section-title">Trabalhos em Destaque</h2>
          <p>
            Uma seleção dos projetos em que atuei do levantamento de
            requisitos à implementação, em equipe ou individualmente, sempre
            com foco em código organizado e entrega de ponta a ponta.
          </p>
          <p>
            Cada projeto abaixo reúne um pouco do que domino — de plataformas
            web colaborativas a pipelines de automação e análise de dados.
          </p>
        </div>

        <ol className="projetos__timeline">
          {sortedProjects.map((project) => (
            <li key={project.id} className="projetos__timeline-item">
              <span
                className={`projetos__timeline-dot projetos__timeline-dot--${project.accent}`}
                aria-hidden="true"
              />
              <div className="projetos__timeline-content">
                <div className="projetos__timeline-heading">
                  <h3>{project.title}</h3>
                  <span className="projetos__timeline-date">
                    {formatProjectDate(project.date)}
                  </span>
                </div>
                <p>{project.description}</p>

                <ul className="project-card__tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className="pill">
                      {tag}
                    </li>
                  ))}
                </ul>

                <a href="#" className="project-card__link">
                  Ver Detalhes do Projeto <span aria-hidden="true">→</span>
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Projetos
