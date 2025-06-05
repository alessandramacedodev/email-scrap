# Email-Scrap

Projeto em Node.js para coletar automaticamente as principais manchetes do site **R7** e enviá-las por e-mail.

## Funcionalidades

Faz scraping das **5 últimas manchetes** do portal **R7** usando `axios` e `cheerio`  
Envia as manchetes coletadas por e-mail utilizando `nodemailer`  
Código modularizado com separação entre scraping e envio de e-mail  
Uso de variáveis de ambiente para manter as credenciais seguras

## Tecnologias utilizadas

- Node.js
- axios
- cheerio
- nodemailer
- dotenv

##Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/alessandramacedodev/email-scrap
cd Email-Scrap
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
EMAIL_USER=seuemail@gmail.com
EMAIL_PASS=suasenhasegura
EMAIL_TO=destinatario@email.com
```

> Use uma conta com autenticação adequada (por exemplo, senha de app no Gmail com 2FA ativado).

### 4. Execute o projeto

```bash
node index.js
```

## Estrutura do Projeto

```bash
Email-Scrap/
├── scraper.js        # Faz scraping das manchetes do R7
├── emailSender.js    # Envia as manchetes por e-mail
├── index.js          # Arquivo principal para executar o processo
├── .env              # Variáveis de ambiente 
├── package.json
└── README.md
```

## 📌 Observação

- As manchetes são extraídas diretamente da página principal do R7.






