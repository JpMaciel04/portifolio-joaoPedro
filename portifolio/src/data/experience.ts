export type Experience = {
  id: string
  role: string
  company: string
  period: string
  description: string
}

export const experiences: Experience[] = [
  {
    id: 'techvanguard',
    role: 'Desenvolvedor Front-end Senior',
    company: 'TechVanguard Global',
    period: '2022 - Presente',
    description:
      'Liderança técnica na arquitetura de micro-frontends de alta escala. Responsável por implementar padrões de código de alta qualidade, mentoria técnica e otimização de performance Web, reduzindo o tempo de carregamento da plataforma principal em 40%.',
  },
  {
    id: 'creativeflow',
    role: 'Front-end Developer',
    company: 'CreativeFlow Studio',
    period: '2020 - 2022',
    description:
      'Desenvolvimento de landing pages interativas, animações complexas em CSS/GSAP e integração fluida de APIs headless. Colaboração direta com designers para criar o Design System escalável adotado por toda a companhia.',
  },
  {
    id: 'pixelcraft',
    role: 'UI/UX Designer & Dev',
    company: 'PixelCraft Tech',
    period: '2018 - 2020',
    description:
      'Atuação híbrida entre design conceitual de interfaces web/mobile e desenvolvimento front-end com React. Criação de protótipos de alta fidelidade e validação de usabilidade com usuários finais.',
  },
]
