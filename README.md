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


- [Projeto](#projeto)
- [Aulas](#aulas)
- [Problemas e Soluções](#problemas-e-soluções)
- [Material do Projeto inicial](#material-do-projeto-inicial)

&nbsp;

---
# Projeto -> <div id="projeto"></div>
---

## Axios: [Doc](https://axios-http.com/ptbr/docs/intro)
> Axios é um cliente HTTP baseado-em-promessas para o node.js e para o navegador. É isomórfico (= pode rodar no navegador e no node.js com a mesma base de código). No lado do servidor usa o código nativo do node.js - o modulo http, enquanto no lado do cliente (navegador) usa XMLHttpRequests.
- `npm i axios`

&nbsp;

## Docker: [Doc](https://docs.docker.com/get-started/)
> Utilizado para subir uma API no localhost:8000 que vai entregar o db da aplicação.


&nbsp;

## MUI: [Doc](https://mui.com/material-ui/getting-started/installation/)
> Uma biblioteca voltada para a utilização de componenetes ja prontos. Vamos utilizala pois o foco do curso é a criação da area administrativa em estrutura, não em com ponente.
  - Instalação:
  ~~~JavaScript
    // Comando NPM
    npm install @mui/material @emotion/react @emotion/styled
  ~~~
  ~~~HTML
    <!-- Instalação da fonte ROBOTO (Utilizada pela biblioteca) e dos icones -->
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />

    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
  ~~~


&nbsp;

---
# Problemas e Soluções -> <div id="problemas-e-soluções"></div>

---

## Tipagem generica:
> Utilizamos uma tipagem generica nesse exemplo, para que o `results` recebecesse uma interface de arcordo com o que for passado quando o ´IPaginação´ fosse utilizado. Isso fou feito pois o results poderia ser de qualquer requisição.

- E.x:
~~~JavaScript
      export interface IPaginacao<T> {
        count: number
        next: string
        previous: string
        results: T[]
    }
  ~~~


&nbsp;

## Criação da pasta http:
> Devido a ter repetição nas requisições ao `axios`, foi criado dentro de `src` uma pasta http e foi criado nela um arquivo de exportação com uma configuração do `axios` com o que se repete.

- E.x:
~~~JavaScript
    import axios from "axios";

    const http = axios.create({
        baseURL: 'http://localhost:8000/api/v2/'
    });

    export default http
  ~~~


&nbsp;

## `useEffect`:
> O useEffect é executado no início do ciclo de vida do componente quando não recebe nenhuma dependência. Dessa forma, podemos executar requisições uma vez, mesmo que o componente seja renderizado novamente.

> No caso desta aplicação o `useEffect` esta fazendo a requisição dos restaurantes no inicio do ciclo de vida do componente para a pagina de restaurantes.

&nbsp;

## O ciclo da administração de restaurantes:
> Utilizando as funcionalidades do BACK, construimos o Front de Admin com:

- LISTA (GET)
- DETALHE (GET por id)
- CADASTRO (POST)
- EDIÇÃO (PUT)
- DELEÇÃO (DELETE)

&nbsp;

---
# Aulas -> <div id="aulas"></div>
---

## Aula 1:

- Baixamos e configuramos as dependências do Alfood;
- Utilizamos o swagger para entender como a nova API funciona;
- Instalamos e preparamos o axios;
- Fizemos requisições GET, para listar pratos e restaurantes.

## Aula 2:
- Instalamos e utilizamos a biblioteca MUI;
- Implementamos a listagem de restaurantes realizando uma requisição GET;
- Criamos a rotina de cadastro de restaurantes com o verbo HTTP POST.

## Aula 3:

- Realizamos requisições utilizando os verbos PUT e DELETE;
- Enviamos parâmetros em requisições GET;
- Montamos um formulário de busca de restaurantes.

## Aula 4:

- Organizamos o layout com elementos do MUI;
- Organizamos o nosso código, centralizando a criação de um cliente do axios;
- Utilizamos a ordenação de restaurantes da API.

&nbsp;

# Material do projeto inicial -> <div id='material-do-projeto-inicial'></div>
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