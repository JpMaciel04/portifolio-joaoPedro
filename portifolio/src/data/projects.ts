export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  accent: 'teal' | 'amber'
  date: string
  repoUrl: string
  image: string
}

export const projects: Project[] = [
  {
    id: 'portifolio-pessoal',
    title: 'Portfólio Pessoal',
    description:
      'Site pessoal desenvolvido em React e TypeScript com Vite, com fundo 3D interativo construído em React Three Fiber (Three.js), incluindo pós-processamento com bloom e depth of field e uma câmera com parallax que reage ao mouse. Estruturado em seções reutilizáveis com CSS puro e integração de formulário de contato via EmailJS.',
    tags: ['React', 'TypeScript', 'Vite', 'Three.js', 'React Three Fiber'],
    accent: 'teal',
    date: '2025-08-01',
    repoUrl: 'https://github.com/JpMaciel04/portifolio-joaoPedro',
    image: '/projects/portifolio-pessoal.png',
  },
  {
    id: 'cs2-webscraping',
    title: 'WebScraping + Data Analytics — CS2 Match Data',
    description:
      'Pipeline pessoal de extração automatizada de dados de partidas competitivas de Counter-Strike 2 a partir da plataforma GamerClubs, estruturando os dados coletados para análise posterior. Projeto de código aberto no GitHub.',
    tags: ['Python', 'Web Scraping', 'Análise de Dados'],
    accent: 'amber',
    date: '2025-02-01',
    repoUrl: 'https://github.com/JpMaciel04/webscraper-gamerclubs-analytics',
    image: '/projects/cs2-webscraping.png',
  },
]
