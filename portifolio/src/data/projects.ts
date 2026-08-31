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
      'Este próprio portfólio, feito em React e TypeScript com Vite. O destaque é o fundo: uma cena 3D interativa em React Three Fiber (Three.js), com bloom, profundidade de campo e uma câmera que acompanha o mouse discretamente. O resto do site é organizado em seções reaproveitáveis, com CSS puro e um formulário de contato que manda e-mail de verdade via EmailJS.',
    tags: ['React', 'TypeScript', 'Vite', 'Three.js', 'React Three Fiber'],
    accent: 'teal',
    date: '2026-08-01',
    repoUrl: 'https://github.com/JpMaciel04/portifolio-joaoPedro',
    image: '/projects/portifolio-pessoal.png',
  },
  {
    id: 'cs2-webscraping',
    title: 'WebScraping + Data Analytics — CS2 Match Data',
    description:
      'Um scraper que fiz para puxar dados de partidas competitivas de Counter-Strike 2 direto da plataforma GamerClubs e organizar tudo para análise depois. Código aberto, disponível no GitHub.',
    tags: ['Python', 'Web Scraping', 'Análise de Dados'],
    accent: 'amber',
    date: '2026-02-01',
    repoUrl: 'https://github.com/JpMaciel04/webscraper-gamerclubs-analytics',
    image: '/projects/cs2-webscraping.png',
  },
]
