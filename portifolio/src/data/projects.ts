export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  accent: 'teal' | 'amber'
  date: string
}

export const projects: Project[] = [
  {
    id: 'puc-caronas',
    title: 'PUC Caronas',
    description:
      'Plataforma web de carona universitária desenvolvida em equipe de seis integrantes, do levantamento de requisitos à implementação. Contribuí com React no front-end e C#/.NET no back-end, além de containerização com Docker e pipelines de CI/CD com GitHub Actions para deploy na AWS.',
    tags: ['React', 'C#/.NET', 'Docker', 'AWS', 'GitHub Actions'],
    accent: 'teal',
    date: '2025-06-01',
  },
  {
    id: 'cs2-webscraping',
    title: 'WebScraping + Data Analytics — CS2 Match Data',
    description:
      'Pipeline pessoal de extração automatizada de dados de partidas competitivas de Counter-Strike 2 a partir da plataforma GamerClubs, estruturando os dados coletados para análise posterior. Projeto de código aberto no GitHub.',
    tags: ['Python', 'Web Scraping', 'Análise de Dados'],
    accent: 'amber',
    date: '2025-02-01',
  },
]
