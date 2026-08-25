import './Hero.css'

const STACK = [
  'Java',
  'Python',
  'C#',
  'JavaScript',
  'SQL',
  'Shell Script',
  'React.js',
  'HTML',
  'CSS',
  '.NET',
  'Java Spring Boot',
  'REST API',
  'AWS',
  'Docker',
  'GitHub Actions',
  'Git',
  'GitHub',
  'Linux',
  'Windows',
]

function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="container hero__inner content-panel">
        <span className="hero__eyebrow">Olá, me chamo João Pedro</span>
        <h1 className="hero__title">Estudante de Engenharia de Software</h1>
        <p className="hero__lead">
          Curso Engenharia de Software na PUC Minas, com experiência prática
          em desenvolvimento Full Stack (React.js, Java Spring Boot, REST
          API), automação com Python e Shell, e suporte técnico em ambientes
          Linux e Windows. Busco uma posição de estágio em desenvolvimento de
          software para aplicar e expandir minhas habilidades técnicas em um
          ambiente colaborativo de engenharia.
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
