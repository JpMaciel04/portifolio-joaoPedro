import { projects } from '../../data/projects'
import './Projetos.css'

function Projetos() {
  return (
    <section id="projetos" className="projetos">
      <div className="container projetos__inner">
        <div className="projetos__intro">
          <span className="section-eyebrow">Portfólio</span>
          <h2 className="section-title">Trabalhos em Destaque</h2>
          <p>
            Uma seleção de projetos em que cuidei de ponta a ponta: da
            arquitetura da interface à integração com APIs, sempre com foco
            em performance e experiência do usuário.
          </p>
          <p>
            Cada projeto abaixo reúne um pouco do que domino — desde
            dashboards analíticos até plataformas de e-commerce completas.
          </p>
        </div>

        <div className="projetos__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className={`project-card__media project-card__media--${project.accent}`}>
                <span className="project-card__media-dot" />
                <span className="project-card__media-dot" />
                <span className="project-card__media-dot" />
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projetos
