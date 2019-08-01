# Teams management

### Pré-requisitos

Docker
Yarn

### Instalando

Extrair a aplicação

Executar o seguinte comando para criar um container docker com postgres

```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Acessar o através de um SGBD com os seguintes parâmetros:

```
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  port: 5432
```

Criar um database com o nome \***\*teamssoccer\*\***

## Executando

Acessar a pasta do projeto com o terminal e executar os comandos:

```
yarn
yarn dev
```

## Endpoints:

```
http://localhost:3333/users
  POST example:
  {
    "name": "Testador"
    "email": "teste@email.com"
    "password": "123456"
  }

[AUTENTICAÇÃO]
http://localhost:3333/sessions
  POST exemplo:
  {
    "email": "teste@email.com"
    "password": "123456"
  }

[TOKEN NECESSÁRIO PARA AS REQUISIÇÕES ABAIXO]
http://localhost:3333/users
  PUT exemplo:
  {
	  "name": "Victor H.",
	  "email": "teste@email.com",
	  "oldPassword": "123456",
	  "password": "654321",
	  "confirmPassword": "654321"
  }

http://localhost:3333/teams
  POST exemplo:
  {
	  "name": "Time 1"
  }
  PUT exemplo:
  {
	  "id": 1,
	  "name": "Time 1 A"
  }
  GET: Retorna todos os times

http://localhost:3333/players
  POST exemplo:
  {
	  "name": "Everton Ribeiro",
	  "position": "Meio Campo",
	  "team_id": 1
  }
  PUT exemplo:
  {
    "id": 2,
    "name": "Everton R",
    "position": "Atacante",
    "team_id": 1
  }
 GET: /players/:teamId
  Retorna todos os jogadores do time

```
