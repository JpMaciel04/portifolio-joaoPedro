import { useState } from 'react'
import './SobreMim.css'

type Lang = 'pt' | 'en'

const CONTENT: Record<
  Lang,
  {
    eyebrow: string
    title: string
    paragraphs: string[]
    highlights: { label: string; value: string }[]
  }
> = {
  pt: {
    eyebrow: 'Quem sou eu',
    title: 'Sobre Mim',
    paragraphs: [
      'Sou estudante de Engenharia de Software na PUC Minas, com experiência prática em desenvolvimento Full Stack (React.js, Java Spring Boot, REST API), automação com Python e Shell, e suporte técnico em ambientes Linux e Windows. Já colaborei em times ágeis usando Git/GitHub, entregando interfaces responsivas e APIs de ponta a ponta.',
      'Falo inglês fluente (TOEFL B+) e busco uma posição de estágio em Desenvolvimento de Software — Front-end, Back-end ou Full Stack — para aplicar e expandir minhas habilidades técnicas em um ambiente colaborativo de engenharia.',
    ],
    highlights: [
      { label: 'PUC Minas (Eng. de Software)', value: '2024–2028' },
      { label: 'Experiências profissionais', value: '4' },
      { label: 'Inglês (TOEFL B+)', value: 'Fluente' },
    ],
  },
  en: {
    eyebrow: 'Who I am',
    title: 'About Me',
    paragraphs: [
      "I'm a Software Engineering student at PUC Minas, with hands-on experience in Full Stack development (React.js, Java Spring Boot, REST API), automation with Python and Shell, and technical support in Linux and Windows environments. I've collaborated on agile teams using Git/GitHub, delivering responsive interfaces and end-to-end APIs.",
      "I'm fluent in English (TOEFL B+) and I'm looking for an internship position in Software Development — Front-end, Back-end, or Full Stack — to apply and grow my technical skills in a collaborative engineering environment.",
    ],
    highlights: [
      { label: 'PUC Minas (Software Eng.)', value: '2024–2028' },
      { label: 'Professional experiences', value: '4' },
      { label: 'English (TOEFL B+)', value: 'Fluent' },
    ],
  },
}

function SobreMim() {
  const [lang, setLang] = useState<Lang>('pt')
  const t = CONTENT[lang]

  return (
    <section id="sobre-mim" className="sobre-mim">
      <div className="container sobre-mim__inner">
        <div className="sobre-mim__photo" aria-hidden="true">
          <span>JP</span>
        </div>

        <div className="sobre-mim__text">
          <div className="sobre-mim__lang" role="group" aria-label="Idioma / Language">
            <button
              type="button"
              className={lang === 'pt' ? 'is-active' : ''}
              aria-pressed={lang === 'pt'}
              onClick={() => setLang('pt')}
            >
              PT
            </button>
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : ''}
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>

          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 className="section-title">{t.title}</h2>
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <ul className="sobre-mim__highlights">
            {t.highlights.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SobreMim
