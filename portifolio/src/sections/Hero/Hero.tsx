import './Hero.css'

const STACK = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Figma',
  'Node.js',
  'GraphQL',
  'Git & CI/CD',
]

function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="container hero__inner">
        <span className="hero__eyebrow">Olá, me chamo João</span>
        <h1 className="hero__title">Engenheiro de Software</h1>
        <p className="hero__lead">
          Construo interfaces rápidas e bem cuidadas, do design ao deploy.
          Gosto de transformar ideias complexas em produtos digitais simples
          de usar, com atenção a performance, acessibilidade e detalhes.
        </p>

        <div className="hero__stack">
          <span className="hero__stack-label">Tecnologias que domino:</span>
          <ul className="hero__pills">
            {STACK.map((tech) => (
              <li key={tech} className="pill">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
