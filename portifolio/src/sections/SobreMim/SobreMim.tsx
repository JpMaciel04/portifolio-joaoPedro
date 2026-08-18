import './SobreMim.css'

const HIGHLIGHTS = [
  { label: 'Experiência', value: '5+ anos' },
  { label: 'Projetos entregues', value: '20+' },
  { label: 'Foco', value: 'Front-end & Produto' },
]

function SobreMim() {
  return (
    <section id="sobre-mim" className="sobre-mim">
      <div className="container sobre-mim__inner">
        <div className="sobre-mim__photo" aria-hidden="true">
          <span>JP</span>
        </div>

        <div className="sobre-mim__text">
          <span className="section-eyebrow">Quem sou eu</span>
          <h2 className="section-title">Sobre Mim</h2>
          <p>
            Sou engenheiro de software com foco em front-end, apaixonado por
            construir produtos digitais que unem boa engenharia e boa
            experiência de uso. Trabalho do design à entrega, cuidando de
            performance, acessibilidade e da qualidade do código em cada
            etapa.
          </p>
          <p>
            Fora do trabalho, gosto de explorar novas ferramentas, contribuir
            com projetos open source e aprender sobre design de interfaces.
          </p>

          <ul className="sobre-mim__highlights">
            {HIGHLIGHTS.map((item) => (
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
