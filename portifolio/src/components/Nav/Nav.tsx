import { useState } from 'react'
import './Nav.css'

const LINKS = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre-mim', label: 'Sobre Mim' },
  { href: '#experiencias', label: 'Experiências' },
  { href: '#contatos', label: 'Contatos' },
]

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="nav">
      <nav className="nav__inner container">
        <a href="#topo" className="nav__brand" onClick={() => setIsOpen(false)}>
          JP
        </a>

        <button
          type="button"
          className={`nav__toggle${isOpen ? ' is-open' : ''}`}
          aria-expanded={isOpen}
          aria-controls="nav-links"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <ul id="nav-links" className={`nav__links${isOpen ? ' is-open' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
