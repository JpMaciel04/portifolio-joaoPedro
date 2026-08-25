export type Experience = {
  id: string
  role: string
  company: string
  period: string
  startDate: string
  description: string
}

export const experiences: Experience[] = [
  {
    id: 'bwtech',
    role: 'Estagiário de Suporte de TI',
    company: 'Bwtech',
    period: 'mai/2025 - atual',
    startDate: '2025-05-01',
    description:
      'Executo e monitoro scripts em Python e Shell para coleta e atualização de dados em bancos SQL corporativos, garantindo integridade das informações. Identifico, analiso e resolvo incidentes técnicos em ambientes Linux dentro dos prazos de SLA. Participo do levantamento de requisitos e acompanhamento de novas demandas de desenvolvimento.',
  },
  {
    id: 'cuida-bem',
    role: 'Desenvolvedor Full Stack',
    company: 'Empresa Júnior Cuida Bem — PUC Minas',
    period: 'ago/2024 - dez/2024',
    startDate: '2024-08-01',
    description:
      'Desenvolvi e entreguei interfaces web responsivas com React.js. Implementei back-end com Java Spring Boot, criando APIs REST para comunicação entre aplicações e serviços. Identifiquei e corrigi falhas em front-end e back-end, e utilizei Git/GitHub para versionamento, pull requests e revisão colaborativa.',
  },
  {
    id: 'tecnosata',
    role: 'Técnico de Suporte em Informática',
    company: 'Tecnosata Informática',
    period: 'jul/2024 - abr/2025',
    startDate: '2024-07-01',
    description:
      'Manutenção preventiva e corretiva de desktops e notebooks, incluindo substituição de componentes e reinstalação de sistemas Windows. Atendimento e triagem técnica de clientes, e upgrades de hardware (RAM, SSD/HD) para melhoria de desempenho.',
  },
  {
    id: 'tia-sonia',
    role: 'Assistente de Gerência / TI Interno',
    company: 'Tia Sônia Alimentos',
    period: 'jan/2021 - dez/2023',
    startDate: '2021-01-01',
    description:
      'Administrei sistemas de banco de dados relacionados a clientes, estoque, contas a pagar e a receber. Prestei suporte técnico a equipamentos e sistemas usados na produção, como ponto de contato entre vendas e produção.',
  },
]
