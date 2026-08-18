import { useState } from 'react'
import type { FormEvent } from 'react'
import './Contatos.css'

const SOCIALS = [
  { icon: 'github-icon', label: 'GitHub', href: 'https://github.com' },
  { icon: 'x-icon', label: 'X', href: 'https://x.com' },
  { icon: 'bluesky-icon', label: 'Bluesky', href: 'https://bsky.app' },
  { icon: 'discord-icon', label: 'Discord', href: 'https://discord.com' },
]

function Contatos() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contatos" className="contatos">
      <div className="container contatos__inner">
        <h2 className="contatos__title">Entre em contato!</h2>

        <form className="contatos__form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Seu Nome</span>
            <input type="text" name="nome" placeholder="Como quer ser chamado?" required />
          </label>

          <label className="field">
            <span>Endereço de E-mail</span>
            <input type="email" name="email" placeholder="exemplo@email.com" required />
          </label>

          <label className="field">
            <span>Mensagem</span>
            <textarea
              name="mensagem"
              rows={5}
              placeholder="Escreva o escopo da sua ideia ou proposta..."
              required
            />
          </label>

          <button type="submit" className="contatos__submit">
            {sent ? 'Mensagem enviada!' : 'Enviar Mensagem'}
            <span aria-hidden="true">➤</span>
          </button>
        </form>

        <ul className="contatos__socials">
          {SOCIALS.map((social) => (
            <li key={social.icon}>
              <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                <svg role="presentation" aria-hidden="true">
                  <use href={`/icons.svg#${social.icon}`}></use>
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contatos
