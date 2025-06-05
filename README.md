# Email-Scrap

Projeto em Node.js para coletar automaticamente as principais manchetes do site **R7** e enviá-las por e-mail.

## Funcionalidades

- Faz scraping das **5 últimas manchetes** do portal **R7** usando `axios` e `cheerio`.  
- Envia as manchetes coletadas por e-mail utilizando `nodemailer`.  
- Código modularizado com separação entre scraping e envio de e-mail.  
- Uso de variáveis de ambiente para manter as credenciais seguras.

## Tecnologias usadas

- Node.js  
- axios  
- cheerio  
- nodemailer  
- dotenv

## Como usar

1. Clone este repositório:

```bash
git clone  
cd Email-Scrap

2. Instale as dependências:

npm install

3. Configure o arquivo .env com suas credenciais de e-mail:

EMAIL_USER=seuemail@gmail.com
EMAIL_PASS=suasenhasegura
EMAIL_TO=destinatario@email.com

4. Execute o projeto:

node index.js





