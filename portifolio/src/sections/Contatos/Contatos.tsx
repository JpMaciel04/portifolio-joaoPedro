import { useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import './Contatos.css'

const SOCIALS = [
  { icon: 'github-icon', label: 'GitHub', href: 'https://github.com/JpMaciel04' },
  {
    icon: 'linkedin-icon',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/joao-pedro-maciel-oliveira',
  },
]

type FormValues = {
  nome: string
  email: string
  mensagem: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

function validate(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {}

  if (!values.nome) errors.nome = 'Informe seu nome.'
  else if (values.nome.length < 2) errors.nome = 'Nome muito curto.'

  if (!values.email) errors.email = 'Informe seu e-mail.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'E-mail inválido.'
  }

  if (!values.mensagem) errors.mensagem = 'Escreva uma mensagem.'
  else if (values.mensagem.trim().length < 10) {
    errors.mensagem = 'Mensagem muito curta (mínimo 10 caracteres).'
  }

  return errors
}

function Contatos() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({})

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const values: FormValues = {
      nome: String(formData.get('nome') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      mensagem: String(formData.get('mensagem') ?? '').trim(),
    }

    const fieldErrors = validate(values)
    setErrors(fieldErrors)
    if (Object.keys(fieldErrors).length > 0) return

    setStatus('sending')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        values,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contatos" className="contatos">
      <div className="container contatos__inner content-panel">
        <h2 className="contatos__title">Entre em contato!</h2>

        <form className="contatos__form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span>Seu Nome</span>
            <input type="text" name="nome" placeholder="Como quer ser chamado?" required />
            {errors.nome && (
              <span className="field__error" role="alert">
                {errors.nome}
              </span>
            )}
          </label>

          <label className="field">
            <span>Endereço de E-mail</span>
            <input type="email" name="email" placeholder="exemplo@email.com" required />
            {errors.email && (
              <span className="field__error" role="alert">
                {errors.email}
              </span>
            )}
          </label>

          <label className="field">
            <span>Mensagem</span>
            <textarea
              name="mensagem"
              rows={5}
              placeholder="Escreva o escopo da sua ideia ou proposta..."
              required
            />
            {errors.mensagem && (
              <span className="field__error" role="alert">
                {errors.mensagem}
              </span>
            )}
          </label>

          <button type="submit" className="contatos__submit" disabled={status === 'sending'}>
            {status === 'sending'
              ? 'Enviando...'
              : status === 'success'
                ? 'Mensagem enviada!'
                : 'Enviar Mensagem'}
            <span aria-hidden="true">➤</span>
          </button>

          {status === 'error' && (
            <p className="contatos__status contatos__status--error" role="alert">
              Não foi possível enviar sua mensagem. Tente novamente em instantes.
            </p>
          )}
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
