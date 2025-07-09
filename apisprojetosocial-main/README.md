# 📌 Impacto Social - Sistema Completo  

## 📖 Sobre o Projeto  
O **Impacto Social** é um sistema completo que combina uma API backend robusta com uma landing page moderna para gerenciar e apresentar projetos sociais. O sistema registra históricos de impacto na sociedade e fornece uma interface visual atraente para comunicar os resultados. A ideia surgiu para suprir as dificuldades de organizações em medir ou comunicar os efeitos reais de seus projetos, facilitando a tomada de decisões baseada em evidências e prestação de contas.

## 🚀 Tecnologias Utilizadas  

### Backend (API)
- **Node.js** – Ambiente de execução para JavaScript no backend  
- **Express.js** – Framework minimalista para criar APIs  
- **CORS** – Middleware para habilitar requisições entre domínios  
- **Jest** – Framework de testes automatizados  
- **Supertest** – Biblioteca para testar endpoints HTTP  

### Frontend (Landing Page)
- **Next.js 14** – Framework React para produção  
- **React 18** – Biblioteca para interfaces de usuário  
- **TypeScript** – Tipagem estática para JavaScript  
- **Tailwind CSS** – Framework CSS utilitário  
- **Framer Motion** – Biblioteca para animações  
- **Lucide React** – Ícones modernos para React  

## 🏗 Estrutura do Projeto  

```
📦 impacto-social-api/
├── 📂 src/                    # Código principal da API
│   ├── 📂 controllers/        # Lógica dos controladores
│   ├── 📂 models/            # Dados simulados
│   ├── 📂 routes/            # Definição dos endpoints
│   └── 📄 app.js             # Configuração principal da API
├── 📂 frontend/              # Aplicação Next.js
│   ├── 📂 components/        # Componentes React
│   ├── 📂 pages/             # Páginas da aplicação
│   ├── 📂 styles/            # Estilos globais
│   └── 📄 next.config.js     # Configuração do Next.js
├── 📂 tests/                 # Testes automatizados da API
├── 📄 package.json           # Dependências do projeto
└── 📄 README.md             # Documentação
```

## 📡 Instalação e Configuração  

### 1️⃣ Clonar o Repositório
```bash
git clone <url-do-repositorio>
cd impacto-social-api
```

### 2️⃣ Instalar Dependências da API
```bash
npm install
```

### 3️⃣ Instalar Dependências do Frontend
```bash
cd frontend
npm install
```

## 🚀 Como Executar

### Backend (API) - Porta 3001
```bash
# Na pasta raiz do projeto
npm start
```

A API estará disponível em: `http://localhost:3001`

### Frontend (Landing Page) - Porta 3002
```bash
# Na pasta frontend
cd frontend
npm run dev
```

A landing page estará disponível em: `http://localhost:3002`

## 📊 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/projetos-impacto` | Lista todos os projetos sociais |
| GET | `/dados-impacto-historico` | Retorna histórico de impacto por área |
| GET | `/avaliacoes-projetos` | Lista avaliações dos projetos |
| GET | `/health` | Verificação de saúde da API |

### Exemplo de Resposta - Projetos
```json
{
  "mensagem": "Lista de projetos sociais em andamento.",
  "projetos": [
    {
      "nome": "Todos pela Educação",
      "objetivo": "Garantir acesso à educação básica",
      "impacto": "5 mil crianças atendidas"
    }
  ]
}
```

## 🧪 Testes

Para executar os testes automatizados da API:

```bash
npm test
```

Os testes cobrem:
- ✅ Validação de endpoints
- ✅ Estrutura de resposta
- ✅ Status codes HTTP
- ✅ Integridade dos dados

## 🎨 Recursos do Frontend

### Funcionalidades
- 📱 **Design Responsivo** - Otimizado para desktop e mobile
- 🎭 **Animações Suaves** - Powered by Framer Motion
- 🎨 **Interface Moderna** - Design system com Tailwind CSS
- 📊 **Visualização de Dados** - Apresentação clara dos impactos
- 🔄 **Consumo de API** - Integração em tempo real com o backend

### Seções da Landing Page
1. **Hero Section** - Apresentação principal com métricas
2. **Projetos Sociais** - Cards com informações dos projetos
3. **Histórico de Impacto** - Timeline com dados históricos
4. **Avaliações** - Sistema de ratings dos projetos
5. **Footer** - Informações adicionais

## 🔧 Configuração de Desenvolvimento

### Variáveis de Ambiente
Crie um arquivo `.env.local` na pasta `frontend/`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Scripts Disponíveis

#### API (Backend)
```bash
npm start          # Iniciar servidor
npm test           # Executar testes
```

#### Frontend
```bash
npm run dev        # Servidor de desenvolvimento
npm run build      # Build de produção
npm run start      # Servidor de produção
npm run lint       # Verificar código
```

## 📈 Dados de Exemplo

O sistema inclui dados simulados para demonstração:

### Projetos Sociais
- **Todos pela Educação** - 5 mil crianças atendidas
- **Sistema Único de Saúde** - 1,4 bilhão de consultas realizadas
- **Amigos do Bem** - 450 mil cestas básicas distribuídas

### Histórico de Impacto
- **2020** - Desenvolvimento social: 150 milhões de pessoas
- **2023** - Educação: 10 mil estudantes alcançados
- **2024** - Saúde: 190 milhões de pessoas atendidas

## 🌐 Deploy

### API
A API pode ser deployada em serviços como:
- Heroku
- Railway
- Vercel Functions
- AWS Lambda

### Frontend
O frontend Next.js pode ser deployado em:
- Vercel (recomendado)
- Netlify
- AWS Amplify

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autor

**GabriellyPimentel**

---

*Transformando vidas através de projetos sociais inovadores e impactantes.*