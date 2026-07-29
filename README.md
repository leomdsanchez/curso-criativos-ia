# IA aplicada al marketing

Portal e apresentação interativa em React + Vite para o curso.

## Uso local

```bash
npm install
npm run dev
```

Para validar a versão de produção:

```bash
npm run build
```

## Estrutura

```text
src/
├── components/
│   └── LessonDeck.tsx        # Renderização reutilizável das aulas
├── data/
│   ├── course.ts             # Metadados do curso e cards
│   └── lesson-1.ts           # Conteúdo da Aula 1
├── navigation/
│   ├── useFullscreen.ts      # Tela cheia e atalho F
│   └── useSlideNavigation.ts # URL, teclado, scroll e swipe
├── types/
│   └── slide.ts              # Tipos compartilhados
├── CoursePortal.tsx          # Home, panorama e seleção da aula
├── routes.ts                 # Convenção das URLs
└── main.tsx                  # Inicialização da aplicação
```

## URLs

Cada slide possui uma URL própria:

```text
#aula-1/portada
#aula-1/presentacion
#aula-1/mercado
#aula-1/cierre
```

Ao atualizar a página, a apresentação permanece no slide atual.

## Controles

- `→`, `Espaço`, `Enter` ou scroll para baixo: avançar
- `←`, `Backspace` ou scroll para cima: voltar
- swipe horizontal no celular: navegar
- `Home` / `End`: primeiro ou último slide
- `F`: tela cheia

## Regra para novas aulas

1. Criar somente o arquivo de conteúdo em `src/data/`.
2. Reutilizar `LessonDeck` e `useSlideNavigation`.
3. Não alterar textos por JavaScript global, `MutationObserver` ou CSS com `content`.
4. Manter conteúdo, navegação e apresentação visual em responsabilidades separadas.

## Publicação

O workflow do GitHub Actions constrói o projeto e publica `dist` no GitHub Pages:

`https://leomdsanchez.github.io/curso-criativos-ia/`
