# Projeto-Movies

## WS Monolito
```
Webservice dividido em muitos endpoints/webmethods mas com um único banco de dados e baixa tolerância à falhas. Cada endpoint é completamente dependente dos dados centralizados e dos demais endpoints.
```

## Microservice
```
Webservice com um único domínio sob sua responsabilidade, geralmente com seus próprios dados e com alta tolerância à falhas. Cada microservice é completamente independente dos dados dos outros e dos demais microservices.
```
Vantagens: forma como consegue distribuir em diferentes times.

- Cada microserviço tem o seu banco mongo
- Escala horizontal (tolerância à falhas)


## Cases
- Amazon
- Netflix
- LinkedIn
- Agibank

## Node + Mongo

- Plataformas leves e independentes
- Baixo custo de infraestrutura
- Dados independentes
- Escala horizontal (tolerância à falhas)
- Facilitam CI e CD

## movies-service
src
  api
  config
  repository
  server
  index.js
  packages.json


- Web API

## Iniciando
npm init -y
npm i express mongodb dotenv-safe tape tap-spec helmet morgan


## Startando o MongoDB na pasta data dentro do projeto
cd /cinema-microservice/movies-service
mkdir data
./mongod --dbpath ./data

## Populando o banco de dados
- mongo
- use movies
- Rodar o script:

```
db.movies.insert([{ titulo: "Os Vingadores: Guerra Infinita", sinopse: "Os heróis mais poderosos da Marvel enfrentando o Thanos", duracao: 120, dataLancamento: ISODate("2018-05-01T00:00:00Z"), imagem: "http://www.luiztools.com.br/vingadores-gi.jpg", categorias: ["Aventura", "Ação"] }, { titulo: "Os Vingadores: Era de Ultron", sinopse: "Os heróis mais poderosos da Marvel enfrentando o Ultron", duracao: 110, dataLancamento: ISODate("2016-05-01T00:00:00Z"), imagem: "http://www.luiztools.com.br/vingadores-eu.jpg", categorias: ["Aventura", "Ação"] }, { titulo: "Os Vingadores", sinopse: "Os heróis mais poderosos da Marvel enfrentando o Loki", duracao: 100, dataLancamento: ISODate("2014-05-01T00:00:00Z"), imagem: "http://www.luiztools.com.br/vingadores.jpg", categorias: ["Aventura", "Ação"] }])
```

## API GATEWAY - Módulo que fica a frente dos microserviços. É como se fosse um DNS. api.cinema.com (aí ele sabe aonde está cada microserviço, ex: api.cinema.com/booking ele já sabe aonde está esse microserviço booking).

## Criar um banco mongodb
use <nomedobanco>
db.nomedacollection.insert({ nome: 'Junior'})

## Deletar um banco mongodb
use <nomedobanco>
db.dropDatabase()

## Estrutura
- Uma pasta para o sistema completo
- Subpastas para os microservices
- Dentro das Subpastas dos microservices criar uma pasta data (onde ficará o BD mongodb) e uma pasta src para os fontes.

## INICIALIZANDO o projeto
/cinema-microservice/movies-service/src

## Modelo
- identificador único
- título
- duração (em minutos)
- imagem (capa promocional)
- sinpse
- data de lançamento
- categorias (ação, romance, etc)


### MongoDB usa padrão ISODATE("2018-05-01T00:00:00Z")

### Cada documento entrega por sí só o valor que ele precisa

### No mongodb convertemos relacionamentos tudo em UM

### Exemplo de um .env preenchido

```
# CONFIG BANCO DE DADOS
MONGO_CONNECTION=mongodb://localhost:27017
DATABASE_NAME=movie-service
PORT=3000
```

### tap-spec :
Deixa a saída mais bonita dos testes no terminal.

## FONTE:
[http://www.luiztools.com.br/curso-nodejs/](Curso Luiz Tools)