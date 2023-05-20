# Nest JS Modular Boilerplate

## Descrição

Esse projeto define um boilerplate de uma REST API modular feita com NestJS + Fastify.

## Tecnologias
- [NestJS](https://docs.nestjs.com/)
- [Prisma](https://www.prisma.io/docs)
- [Docker](https://docs.docker.com/)
- Fastify
- PostgreSQL

## Instalação
- Certifique-se de criar um arquivo `.env` com `DATABASE_URL=postgresql://user:pass@localhost:5432/postgres` antes de configurar o banco de dados local.
- Centifique-se de instalar e usar yarn como gerenciador de dependencias.
### Dependencias
```bash
$ yarn install
```
### Banco de dados (Prisma)
```bash
# para subir o banco
$ docker-compose up -d

# para aplicar as migrações no banco
$ yarn prisma db pull

# o prisma fornece um ambiente web para manipular entidades e facilitar o desenvolvimento, execute o comando abaixo para abrir
$ yarn prisma studio
```

## Desenvolvendo
### Migrations
```shell
# criando uma nova migration (após modificar/criar entidades em ./prisma/schema.prisma)
$ yarn prisma migrate dev --name name-your-migration
```

### Criando um novo módulo/recurso/rota
O NestJS fornece geradores que poupam trabalho inicial de criar toda estrutura de um novo módulo manualmente.
```shell
$ yarn nest g resource name-your-resouuse
```

## Executando

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Documentação OpenAPI
Acesse `http://localhost:3000/api` para acessar a documentação da API.
