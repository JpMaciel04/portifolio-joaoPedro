import './Nav.css'

const LINKS = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre-mim', label: 'Sobre Mim' },
  { href: '#experiencias', label: 'Experiências' },
  { href: '#contatos', label: 'Contatos' },
]

function Nav() {
  return (
    <header className="nav">
      <nav className="nav__inner container">
        <a href="#topo" className="nav__brand">
          JP
        </a>
        <ul className="nav__links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
