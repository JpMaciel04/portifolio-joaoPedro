# Portifólio - João Pedro

Portifólio pessoal desenvolvido para apresentar minha trajetória como desenvolvedor: projetos, experiências profissionais e formas de contato, em uma única página (single-page) com navegação por âncoras.

O design foi prototipado no Figma antes da implementação. Protótipos interativos disponíveis em [`wireframe/links_uteis.MD`](wireframe/links_uteis.MD).

## Protótipos

### Landing Page / Hero
![Landing Page](wireframe/imgs/landingPage.png)

### Projetos
![Projetos](wireframe/imgs/projetos.png)

### Sobre Mim
![Sobre Mim](wireframe/imgs/sobreMim.png)

### Experiências
![Experiências](wireframe/imgs/experiencias.png)

### Contatos
![Contatos](wireframe/imgs/contatos.png)

## Tecnologias previstas

- **React 19** + **TypeScript**
- **Vite** — build e dev server
- **Three.js**, **@react-three/fiber** e **@react-three/drei** — cena 3D planejada para o background (ver referência em [`wireframe/links_uteis.MD`](wireframe/links_uteis.MD))
- **ESLint** (`typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`) — lint do projeto
- CSS puro, sem framework de estilos

## Estrutura inicial do site

Aplicação em `portifolio/`, composta por seções renderizadas em sequência a partir de `App.tsx`:

```
Background → Nav → Hero → Projetos → SobreMim → Experiencias → Contatos
```

```
portifolio/
├── src/
│   ├── App.tsx              # composição das seções da página
│   ├── components/          # componentes compartilhados (Background, Nav)
│   ├── sections/             # uma pasta por seção (Hero, Projetos, SobreMim, Experiencias, Contatos)
│   │   └── <Secao>/
│   │       ├── <Secao>.tsx
│   │       └── <Secao>.css
│   └── data/                 # conteúdo tipado usado pelas seções (projects.ts, experience.ts)
└── public/
```

Cada seção corresponde a uma âncora de navegação (`#projetos`, `#sobre-mim`, `#experiencias`, `#contatos`), usada pelos links do `Nav`.

## Rodando o projeto

```bash
cd portifolio
npm install
npm run dev
```

Outros scripts disponíveis: `npm run build`, `npm run lint`, `npm run preview`.
