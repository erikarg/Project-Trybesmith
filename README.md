
# Project Trybesmith :hammer_and_pick:

<details>
<summary>:brazil: Português</summary>

## Descrição

Projeto desenvolvido durante o terceiro módulo (desenvolvimento back-end) do curso da Trybe.

## Objetivo

Construir uma loja de itens medievais no formato de uma API REST com CRUD.

## Stacks utilizadas

* **Back-end:** Express, Node.js
* **Plataforma:** Docker
* **Arquitetura:** MSC
* **Linguagem:** Typescript
* **Banco de dados:** MySQL

## Rodando localmente

* Clone o projeto: 

`git clone git@github.com:erikarg/Project-Trybesmith.git`

* Suba os containers:

`docker-compose up -d`

* Execute o terminal do container:

`docker exec -it trybesmith bash`

* Instale as dependências:

`npm install`

* Inicialize a aplicação:

`npm start`

## Rotas

**Login**

| Requisição   | URL       
| :---------- | :-------
| `POST` | http://localhost:3000/login

**Users**

| Requisição   | URL       
| :---------- | :-------
| `GET` | http://localhost:3000/users

**Products**

| Requisição   | URL       
| :---------- | :-------
| `GET` | http://localhost:3000/products
| `POST` | http://localhost:3000/products

**Orders**

| Requisição   | URL       
| :---------- | :-------
| `GET` | http://localhost:3000/orders
| `POST` | http://localhost:3000/orders

</details>

<details>
<summary>:us: English</summary>

## Description

Project developed during the third module (back-end development) of the Trybe course.

## Objective

Build a medieval item shop in the form of a REST API with CRUD.

## Stacks

* **Back-end:** Express, Node.js
* **Platform:** Docker
* **Architecture:** MSC
* **Language:** Typescript
* **Database:** MySQL

## Running the application locally

* Clone the project: 

`git clone git@github.com:erikarg/Project-Trybesmith.git`

* Install the containers:

`docker-compose up -d`

* Open the container terminal:

`docker exec -it trybesmith bash`

* Install dependencies: 

`npm install`

* Start the application:

`npm start`

## Endpoints

**Login**

| Request   | URL       
| :---------- | :-------
| `POST` | http://localhost:3000/login

**Users**

| Request   | URL       
| :---------- | :-------
| `GET` | http://localhost:3000/users

**Products**

| Request   | URL       
| :---------- | :-------
| `GET` | http://localhost:3000/products
| `POST` | http://localhost:3000/products

**Orders**

| Request   | URL       
| :---------- | :-------
| `GET` | http://localhost:3000/orders
| `POST` | http://localhost:3000/orders
</details>
