# Knowledge Base

Este repositório é um sistema completo para gerenciamento de conhecimento, dividido entre frontend e backend, com suporte a bancos de dados configurados via Docker.

## Estrutura do Projeto

- **backend**: Contém a lógica do servidor e APIs. Utiliza Node.js e pode ser iniciado com `npm run start`.
- **frontend**: Desenvolvido em Vue.js, fornece uma interface de usuário interativa e responsiva.
- **docker-compose.yml**: Configura os bancos de dados necessários para o funcionamento do sistema.

## Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org)
- [Docker e Docker Compose](https://www.docker.com)

## Configuração e Execução

### 1. Configurar e iniciar os bancos de dados
1. Navegue até a raiz do projeto.
2. Inicie os serviços do Docker:
   ```
   docker-compose up
   ```
### 2. Iniciar o backend
1. Navegue até o diretório `backend`:
   ```
   cd backend
   ```
3. Instale as dependências:
   ```
   npm install
   ```
4. Inicie o servidor:
   ```
   npm run start
   ```

### 3. Iniciar o frontend
1. Navegue até o diretório `frontend`:
   ```
   cd frontend
   ```
3. Instale as dependências:
   ```
   npm install
   ```
4. Inicie a aplicação:
   ```
   npm run serve
   ```

Acesse o sistema no navegador em `http://localhost:8080`.

## Tecnologias Utilizadas

- **Frontend**: Vue.js
- **Backend**: Node.js
- **Bancos de Dados**: Configurados via Docker (detalhes no arquivo `docker-compose.yml`).

## Contribuições

Contribuições são bem-vindas! Para colaborar:
1. Faça um fork do repositório.
2. Crie um branch para sua funcionalidade/bugfix:
   ```
   git checkout -b minha-feature
   ```
4. Após suas alterações:
   ```
   git commit -m "Minha contribuição"
   git push origin minha-feature
   ```
6. Abra um Pull Request.

## Sobre o Curso
Este projeto foi desenvolvido no curso da Cod3r, que aborda desde a configuração inicial até o deploy de sistemas web utilizando tecnologias modernas.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

Entre em contato para dúvidas ou suporte!

Se precisar de mais ajustes ou incluir informações específicas, estou à disposição! 😊
