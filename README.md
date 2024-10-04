<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

  # On Health API - Vaccination network manager for children.

  ## Project Description
  This project is a solution developed in NestJS with a PostgreSQL database to manage the association of vaccination network for children in the different municipalities of the existing departments of the territory. The REST API provides functionalities to create records of vaccines, at what age they are aimed, assign them to registered children, create the municipalities and departments that enter the system, among others.

  ## Features

  - **Children management**: Create a register of children belonging to a municipality.
  - **Vaccine management**: Create the vaccines that will be destined to be applied to children, with a specific quantity of them.
  - **Management of municipalities**: Creates the existing municipalities, with their population and average age.
  - **Management of Departments**: Creates the existing departments in the territory.


  ## Main Endpoints
  ### Children Endpoints (/api/v1/children)
  **POST** /create: Creates a new children.
  **GET** /find-all: Gets all existing childrens.
  **GET** /find/id: Searches for a specific children by his ID.
  **PUT** /update/id: Updates the information of a children by his ID.
  **DELETE** /delete/id: Deletes a specific children by his ID.


  ### Vaccine Endpoints (/api/v1/vaccine)
  **POST** /create: Creates a new vaccine with one name and a total of vaccines
  **GET** /find-all: Gets all registered vaccines.
  **GET** /find/vaccineName: Searches for a specific vaccines by your vaccine name.
  **PUT** /update/vaccineName: Updates the information of an vaccines by your vaccine name.
  **DELETE** /delete/vaccineName: Deletes a specific vaccines by your vaccine name.

  ### Municipality Endpoints (/api/v1/municipality)
  **POST** /create: Creates a new municipality in the system of vaccination.
  **GET** /find/id: Searches for a specific municipality by your ID.
  **GET** /id/average-age: Calculates the average age of the people registered in that municipality, passing previously the id of the municipality.

  ### Departament Endpoints (/api/v1/departament)
  **POST** /create: Creates a new departament with his name.
  **GET** /find-all: Gets all registered departaments.
  **GET** /find/namedepartament: Searches for a specific departament by the departament name.

  ### Skills
  - TypeScript
  - NestJs
  - PostgreSQL


## 🛠 Project Set-Up

### Installing NestJs:
To install NestJs, follow these steps:

1. Open the terminal (It is recommended to use GitBash or your IDE's terminal).
2. Execute the following command to install NestJs on your device:

```bash
  npm i -g @nestjs/cli
```

### Repository Installation:
To clone the repository to your local machine and access the project's files, use the following command:

```bash
  git clone https://github.com/Arangog20/back-onhealth.git
```

This ensures that the repository is available on your device for you to use its information and work on it.

#### Dependencies used:
- `@nestjs/mapped-types`: Facilitates the creation of mapped types in NestJS.
- `class-validator`: Adds validations to TypeScript classes.
- `class-transformer`: Allows safe and efficient object transformation.
- `@nestjs/config`: Configuration module for NestJS.
- `@nestjs/typeorm` & `typeorm`: Packages for interacting with PostgreSQL databases.

#### Install dependencies
To use the project, we need to install all the necessary libraries and packages for its proper execution.

```bash
  npm install
```

### Running the project
To run the project, open your console and execute the following command to initialize the project:

```bash
  npm run start:dev
```

### Environment variables
We need to assign values to the environment variables for optimal project execution. In this case, the project's environment variables cover the connection to our database with PostgreSQL.

```bash
  # .env - CONNECTION in Vercel - TypeORM.
  DB_USERNAME = 'YOU DB USERNAME'
  DB_HOST = 'YOUR DB HOST'
  DB_PASSWORD = 'YOUR DB PASSWORD'
  DB_NAME = 'YOUR DB NAME'

  DB_PORT = 'YOUR PORT'
```

### Postman
You can execute each of the services already established in the project through the endpoints that have been set up in a Postman collection, from creating, editing, deleting, and other actions.

Access the Postman collection:
- [Postman Collection](https://www.postman.com/red-flare-845361/workspace/public-manuela/collection/33481513-b94850ba-5b3d-4c2a-8ce0-4450ba3e2eb3?action=share&creator=33481513&active-environment=33481513-7dda199c-ec6e-4860-84f4-bec46dd60cb4)

_Reminder: To use it, ensure that the project is running correctly._

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
