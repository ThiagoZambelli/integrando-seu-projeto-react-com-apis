![Alt text](src/assets/logoLithtleZ.svg)

&nbsp;


<img align="left" width="50%" style="margin-top:-20px" src="public/assets/eu.png">

</br>
</br>

<div dsplay="inline-block">

<h1 align="justify">React: integrando seu projeto React com APIs</h2>
<h2 align="justify">Feito por : Thiago Zambelli</h2>
<h3 align="justify">Projeto feito durante o curso da alura de integração Rest API com React/TS. O projeto consiste em trasformar uma pagina estatica em uma pagina dinamica que consuma uma API.</h3>
 
  <a href="https://www.linkedin.com/in/thiagozambelli">
    <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>
</div>


- ## [Projeto](#projeto)
- ## [Aulas](#aulas)
- ## [Problemas e Soluções](#problemas-e-soluções)
- ## [Material do Projeto inicial](#material-do-projeto-inicial)

&nbsp;

---
# Projeto ->
---

## Axios: [Doc](https://axios-http.com/ptbr/docs/intro)
> Axios é um cliente HTTP baseado-em-promessas para o node.js e para o navegador. É isomórfico (= pode rodar no navegador e no node.js com a mesma base de código). No lado do servidor usa o código nativo do node.js - o modulo http, enquanto no lado do cliente (navegador) usa XMLHttpRequests.
- `npm i axios`

&nbsp;

## Docker: [Doc](https://docs.docker.com/get-started/)
> Utilizado para subir uma API no localhost:8000 que vai entregar o db da aplicação.


&nbsp;

---
# Problemas e Soluções ->
---

## `useEffect`:
> O useEffect é executado no início do ciclo de vida do componente quando não recebe nenhuma dependência. Dessa forma, podemos executar requisições uma vez, mesmo que o componente seja renderizado novamente.

> No caso desta aplicação o `useEffect` esta fazendo a requisição dos restaurantes no inicio do ciclo de vida do componente para a pagina de restaurantes.

&nbsp;

---
# Aulas ->
---

## Aula 1:

- Baixamos e configuramos as dependências do Alfood;
- Utilizamos o swagger para entender como a nova API funciona;
- Instalamos e preparamos o axios;
- Fizemos requisições GET, para listar pratos e restaurantes.

&nbsp;

# Material do projeto inicial ->
---

![Integrando seu projeto React com APIs](thumbnail.png)

# Alfood

O Alfood é um site que lista restaurantes e pratos do menu. 
É um MVP que tá só começando e ainda tem muitas funcionalidades novas para serem desenvolvidas.

<img src="screencapture.png" alt="Imagem do Alfood" width="50%">


## 🔨 Funcionalidades do projeto

O Alfood começa com uma listagem estática de seu conteúdo e é esse o problema que queremos resolver.
No decorrer do curso, vamos implementar toda a camada de comunicação com a API.

## ✔️ Técnicas e tecnologias utilizadas

Se liga nessa lista de tudo que usaremos nesse treinamento:

- `React`
- `React Hooks`
- `TypeScript`
- `axios`

## 🛠️ Abrir e rodar o projeto

Para abrir e rodar o projeto, execute npm i para instalar as dependências e npm start para inicar o projeto.

Depois, acesse <a href="http://localhost:3000/">http://localhost:3000/</a> no seu navegador.

## 📚 Mais informações do curso

Busque na plataforma da Alura o curso **Integrando seu projeto React com APIs** publicado na Escola Frontend.