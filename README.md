# Portifólio - João Pedro

Meu portifólio pessoal, me chamo João Pedro Maciel de Oliveira, sou estudante de Engenharia de Software na PUC Minas, para apresentar minha trajetória: projetos, experiências profissionais e formas de contato, em uma única página.

Prototipei o design no Figma antes da implementação. Protótipos interativos disponíveis em [`wireframe/links_uteis.MD`](wireframe/links_uteis.MD).

## Site Publicado

🔗 <link após deploy>

## Demonstração

### Portfólio em execução
![Portfólio em execução](demo/portifolio.png)

### WebScraping + Data Analytics — CS2 Match Data
![WebScraping CS2 em execução](demo/cs2-webscraping.png)

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

## Funcionalidades

- **Sobre Mim** com toggle PT/EN (texto e destaques traduzidos, sem libs de i18n).
- **Projetos** e **Experiências** em timelines dinâmicas, ordenadas automaticamente por data a partir dos dados em `src/data/`.
- **Contato** com formulário funcional (envio real de e-mail via EmailJS) e validação básica (nome, e-mail, mensagem) com mensagens de erro inline.
- **Background 3D em tela cheia**, fixo atrás de todo o conteúdo — uma adaptação do exemplo ["Monitors"](https://pmndrs.github.io/examples/examples/monitors) do pmndrs (pilha de monitores CRT com reflexo no chão e bloom), construída com `@react-three/fiber`, `@react-three/drei` e `@react-three/postprocessing`.
- **Painéis de vidro fosco** (`content-panel`, `backdrop-filter: blur()`) atrás de cada bloco de texto, garantindo contraste de leitura sobre o fundo 3D sem precisar escurecer a cena.
- Todo o conteúdo (bio, projetos, experiências) reflete meu currículo real.

## Tecnologias

- **React 19** + **TypeScript**
- **Vite** — build e dev server
- **Three.js**, **@react-three/fiber**, **@react-three/drei** e **@react-three/postprocessing** — cena 3D do background (ver referência em [`wireframe/links_uteis.MD`](wireframe/links_uteis.MD))
- **@emailjs/browser** — envio do formulário de contato direto do navegador, sem backend
- **ESLint** (`typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`) — lint do projeto
- CSS puro, sem framework de estilos

## Estrutura do site

Aplicação em `portifolio/`, composta por seções renderizadas em sequência a partir de `App.tsx`:

```
Background → Nav → Hero → Projetos → SobreMim → Experiencias → Contatos
```

```
portifolio/
├── src/
│   ├── App.tsx              # composição das seções da página
│   ├── components/
│   │   ├── Background/       # cena 3D de fundo (Canvas, Scene, monitores, assets .glb/.woff)
│   │   └── Nav/
│   ├── sections/              # uma pasta por seção (Hero, Projetos, SobreMim, Experiencias, Contatos)
│   │   └── <Secao>/
│   │       ├── <Secao>.tsx
│   │       └── <Secao>.css
│   └── data/                  # conteúdo tipado usado pelas seções (projects.ts, experience.ts)
└── public/
```

Cada seção corresponde a uma âncora de navegação (`#projetos`, `#sobre-mim`, `#experiencias`, `#contatos`), usada pelos links do `Nav`.

## Uso

O site é uma página única — navegue entre as seções pelo menu no topo (`Projetos`, `Sobre Mim`, `Experiências`, `Contatos`), que faz scroll até a âncora correspondente. Em telas estreitas, o menu vira um botão hambúrguer. Para só visitar o site publicado, nenhuma configuração é necessária; a seção "Rodando o projeto" abaixo é só para quem quer rodar/editar localmente.

## Rodando o projeto

```bash
cd portifolio
npm install
```

Para o formulário de contato enviar e-mail de verdade, copie `portifolio/.env.example` para `portifolio/.env` e preencha com as credenciais de uma conta gratuita no [EmailJS](https://www.emailjs.com/) (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`). Sem isso, o site funciona normalmente, só o envio do formulário falha.

```bash
npm run dev
```

Outros scripts disponíveis: `npm run build`, `npm run lint`, `npm run preview`.

## Deploy

O projeto está publicado na Vercel (build estático via Vite, sem backend):

1. Crie uma conta na [Vercel](https://vercel.com/) e importe este repositório do GitHub.
2. A Vercel detecta o Vite automaticamente — confirme *Root Directory* como `portifolio/`, build command `npm run build` e output directory `dist`.
3. Antes do primeiro deploy, cadastre as variáveis de ambiente em **Project Settings → Environment Variables**: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` (mesmos valores usados no `.env` local — ver seção acima). Sem elas o site publica normalmente, mas o formulário de contato falha silenciosamente.
4. Cada push na branch principal gera um novo deploy automático.
