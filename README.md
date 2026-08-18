# ⏱️ Ignite Timer - Pomodoro App

<div align="center">
  <strong>Uma aplicação moderna e intuitiva para gerenciar seu tempo usando a técnica Pomodoro</strong>
  <p>Construída com React, TypeScript e tecnologias modernas de frontend</p>
</div>

---

## 📋 Sobre o Projeto

O **Ignite Timer** é uma aplicação web desenvolvida durante o bootcamp Ignite da Rocketseat que implementa a técnica Pomodoro para gerenciamento de tempo. A aplicação permite que você crie tarefas, inicie temporizadores e acompanhe o histórico de todas as atividades realizadas.

### 🎯 Principais Funcionalidades

- ✅ **Gerenciamento de Tarefas**: Crie novas tarefas com tempo estimado em minutos
- ⏱️ **Temporizador Interativo**: Visualize o tempo decorrido em tempo real com atualização dinâmica
- 📊 **Histórico de Tarefas**: Acompanhe todas as tarefas concluídas com status e data/hora
- 🔄 **Continuar Tarefas**: Retome tarefas incompletas para dar continuidade ao trabalho
- 🎨 **Interface Responsiva**: Design moderno e amigável com tema consistente
- ⚡ **Validação em Tempo Real**: Validação de formulários com mensagens de erro claras
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em diferentes tamanhos de tela

---

## 🛠️ Tecnologias Utilizadas

### Core
- **React** 18+ - Biblioteca JavaScript para construir interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Bundler e servidor de desenvolvimento ultrarrápido
- **React Router DOM** - Roteamento de páginas

### Formulários e Validação
- **React Hook Form** - Gerenciamento de estado de formulários
- **Zod** - Validação de esquemas TypeScript-first
- **@hookform/resolvers** - Integração entre React Hook Form e Zod

### Estilos
- **Styled Components** - CSS-in-JS para componentização de estilos
- **Phosphor React** - Ícones modernos e customizáveis

### Utilidades
- **Immer** - Manipulação imutável de estado simplificada
- **date-fns** - Manipulação e formatação de datas

---

## 📸 Capturas de Tela

### Tela Inicial - Criar Nova Tarefa
![Captura de Tela (1)](https://user-images.githubusercontent.com/69223872/220248856-c3ce3dc1-82df-4d3b-8e1f-21605d092b23.png)

### Temporizador em Execução
![Captura de Tela (2)](https://user-images.githubusercontent.com/69223872/220248857-9a8734a3-525b-456a-8053-909a4b097552.png)

### Tarefas Completadas
![Captura de Tela (3)](https://user-images.githubusercontent.com/69223872/220248858-9db73cb2-9b5d-43e6-9f69-0a91a7c16e29.png)

### Histórico de Tarefas
![Captura de Tela (4)](https://user-images.githubusercontent.com/69223872/220248860-ee1ba488-481f-4e92-a94f-7e3f25795238.png)

### Detalhes do Histórico
![Captura de Tela (5)](https://user-images.githubusercontent.com/69223872/220248861-36c881f6-7037-4439-9061-d1e2ae291a49.png)

---

## 🚀 Como Começar

### Pré-requisitos

Antes de iniciar, você precisará ter instalado:
- **Node.js** versão 16.0.0 ou superior ([download](https://nodejs.org/))
- **npm** versão 7.0.0 ou superior (geralmente vem com Node.js)
- **Git** para clonar o repositório

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/projeto02IgniteTimer.git
cd projeto02IgniteTimer-main
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Abra no navegador**
   - Acesse `http://localhost:5173` (ou a URL mostrada no terminal)
   - A aplicação está pronta para uso!

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Compila o projeto para produção (pasta `dist/`) |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Executa análise estática do código (se configurado) |

---

## 📁 Estrutura do Projeto

```
projeto02IgniteTimer/
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Header/           # Cabeçalho com navegação
│   │   └── layouts/
│   │       └── DefaultLayout/ # Layout padrão da aplicação
│   ├── pages/                # Páginas da aplicação
│   │   ├── Home/            # Página principal - criar tarefas
│   │   └── History/         # Página de histórico
│   ├── @types/              # Definições de tipos TypeScript
│   ├── styles/              # Estilos globais e tema
│   │   ├── global.ts        # Estilos globais
│   │   └── themes/
│   │       └── default.ts   # Configuração do tema
│   ├── assets/              # Imagens e recursos estáticos
│   ├── App.tsx              # Componente raiz
│   ├── Router.tsx           # Configuração de rotas
│   └── main.tsx             # Ponto de entrada
├── public/                  # Arquivos públicos estáticos
├── index.html               # HTML base
├── package.json             # Dependências do projeto
├── tsconfig.json            # Configuração do TypeScript
├── vite.config.ts          # Configuração do Vite
└── README.md               # Este arquivo
```

---

## 💡 Como Usar

### 1. Criar uma Nova Tarefa

- Acesse a página inicial (Home)
- Digite o nome da tarefa no campo "Qual projeto você está trabalhando?"
- Defina o tempo estimado em minutos (máximo 60 minutos)
- Clique em "Começar" para iniciar o temporizador

### 2. Acompanhar o Temporizador

- Visualize o tempo decorrido em formato MM:SS
- O contador é atualizado em tempo real
- A página mostra a tarefa em execução

### 3. Consultar o Histórico

- Navegue até a aba "Histórico"
- Veja todas as tarefas realizadas com status:
  - 🟢 **Concluída**: Tarefa finalizada com sucesso
  - 🔴 **Interrompida**: Tarefa parada antes do tempo
  - 🟡 **Pausada/Pendente**: Tarefa salva para depois
- Clique em uma tarefa para continuar se ainda não foi concluída

---

## 🎓 Aprendizados Principais

Este projeto demonstra a aplicação prática de conceitos importantes:

- **React Hooks**: useState, useContext, useEffect para gerenciamento de estado
- **React Router**: Navegação entre páginas sem recarregar
- **TypeScript**: Tipagem forte e segurança de tipo
- **Styled Components**: Componentes estilizados e reutilizáveis
- **Formulários**: Validação com Zod e React Hook Form
- **Estado Global**: Uso de Context API para compartilhar dados
- **Vite**: Build rápido e desenvolvimento otimizado

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido durante o bootcamp **Ignite** da [Rocketseat](https://www.rocketseat.com.br/)

---

<div align="center">
  <p>⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório!</p>
</div>
