export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  accent: 'teal' | 'amber'
}

export const projects: Project[] = [
  {
    id: 'cryptopulse',
    title: 'CryptoPulse SaaS',
    description:
      'Um painel analítico completo para monitoramento e gestão de criptoativos em tempo real, com gráficos interativos e alertas customizáveis.',
    tags: ['Next.js', 'TypeScript', 'D3.js', 'Tailwind'],
    accent: 'teal',
  },
  {
    id: 'aura-store',
    title: 'Aura Minimalist Store',
    description:
      'Plataforma de e-commerce de alta performance focada em móveis de design minimalista, com checkout otimizado e catálogo dinâmico.',
    tags: ['React', 'GraphQL', 'Stripe', 'NextJS'],
    accent: 'amber',
  },
]
