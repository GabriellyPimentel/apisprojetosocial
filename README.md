# 🌍 Impacto Social API  

## 📌 Sobre o projeto  
A **Impacto Social API** foi criada para organizar e disponibilizar informações sobre **projetos sociais e seu impacto ao longo do tempo**. O objetivo é permitir analises mais abrangentes, permitindo que pesquisadores, ONGs, investidores sociais e cidadãos tenham **acesso estruturado** a iniciativas que promovem mudanças positivas na sociedade.  

### 🧐 **Problematização**  
Muitas iniciativas sociais enfrentam dificuldades na **gestão de informações sobre impacto**. Dados sobre projetos sociais costumam estar **fragmentados**, dificultando análises sobre sua eficiência, prestação de contas e a tomada de decisões baseada em evidencias. Impossibilitando assim seu alcance e evolução.  

Sem uma plataforma unificada, problemas como os seguintes se tornam comuns:  
✅ **Falta de transparência:** Muitas organizações não têm meios eficientes para divulgar seus resultados.  
✅ **Dificuldade na captação de recursos:** Investidores sociais e financiadores buscam dados confiáveis para apoiar projetos, mas encontram dificuldades na obtenção e registro dessas informações.  
✅ **Baixa acessibilidade:** Projetos de impacto têm dados dispersos em relatórios, sites individuais e documentos offline, dificultando a busca por estatísticas relevantes.  

Essa API de **Impacto Social** busca solucionar esse problema ao **organizar, centralizar e disponibilizar dados de forma estruturada**, possibilitando análises mais aprofundadas e decisões baseadas em evidências.  

## ⚙️ Funcionalidade da API  
Esta API fornece três **principais funcionalidades**:  

### 📌 **1️⃣ Listagem de Projetos Sociais**  
Permite acessar um conjunto de projetos **cadastrados**, visualizando seus objetivos e impacto gerado.  
✅ Endpoint:  
```bash
GET /projetos-impacto
```
### ⚙️ **Funcionalidade da API**  

# 📌 1️⃣ Listagem de Projetos Sociais  
```bash
GET /projetos-impacto  
```
# 📌 2️⃣ Histórico de Impacto Social
```bash
GET /dados-impacto-historico  
```
# 📌 3️⃣ Avaliação de Projetos  
```bash
GET /avaliacoes-projetos  
```
### 📌 **2️⃣ Histórico de Impacto Social**:

#### 🔹 Descrição  
Este endpoint fornece estatísticas sobre o impacto social ao longo dos anos, organizando os dados por **ano** e **setor** (educação, saúde, desenvolvimento social).  

#### 🔹 Método  
```bash
GET /dados-impacto-historico
```
### 📌 **3️⃣ Avaliação de Projetos**

Permite analisar indicadores de desempenho e viabilizar comparações entre diferentes iniciativas. ✅ Endpoint:

```bash
GET /avaliacoes-projetos
```
### 🛠 **Estrutura do projeto**

impacto-social-api/
│── src/

│   ├── routes/            # Define as rotas da API  
│   ├── controllers/       # Lógica de negócios das rotas  
│   ├── models/            # Modelos de dados  
│── tests/                 # Testes automatizados  
│── package.json           # Dependências e scripts  
│── README.md              # Documentação do projeto
