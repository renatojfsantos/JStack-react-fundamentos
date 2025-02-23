# JStack React Fundamentos

## Visão Geral

O projeto **JStack React Fundamentos** é uma aplicação desenvolvida para demonstrar os conceitos fundamentais do React. Ele inclui a criação de componentes, uso de contextos, estilização global e organização de arquivos.

## Funcionalidades

- **Componentização**: Criação e uso de componentes reutilizáveis.
- **Context API**: Gerenciamento de estado global usando Context API.
- **Estilização Global**: Aplicação de estilos globais usando styled-components.
- **Layout**: Estruturação de layout com componentes.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **styled-components**: Biblioteca para estilização de componentes.
- **Context API**: API do React para gerenciamento de estado global.

## Estrutura do Projeto

```
├── src
│   ├── components             # Componentes da aplicação (ex.: Header, Footer, Layout, PostsList)
│   ├── contexts               # Contextos React (ex.: ThemeContext.js)
│   ├── hooks                  # Hooks customizados (ex.: useToggleTheme.js)
│   ├── styles                 # Arquivos de estilos (ex.: themes.js, global.js)
│   ├── App.js                 # Componente raiz da aplicação (usa o contexto e renderiza os componentes)
│   └── index.js               # Ponto de entrada da aplicação (renderiza o App)
├── .babelrc                   # Configuração do Babel para transpilação do código
├── .gitignore                 # Arquivo para ignorar arquivos/pastas no Git (ex.: node_modules, build)
├── package.json               # Informações do projeto e dependências
├── README.md                  # Documentação do projeto
└── webpack.config.js          # Configuração do Webpack para empacotamento da aplicação

```

## Como Executar

### Passo a Passo para Execução

1. **Instale as dependências**:
  ```sh
  yarn install
  ```
  ou
  ```sh
  npm install
  ```

2. **Inicie a aplicação**:
  ```sh
  yarn start
  ```
  ou
  ```sh
  npm start
  ```

3. **Acesse a Aplicação**:
   disponível em `http://localhost:3000`.
