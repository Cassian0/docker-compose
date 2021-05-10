# Projeto docker-compose

## Equipe

* Cassiano Schmitz
* Vinicius Pereira

## Configurações

* Clone o projeto em um local de sua preferência

* Verifique se você tem o docker intalado na sua máquina

* Para isso no prompt escreva:
```
docker -v
```    
ou 

```
docker --help
```
para verificar se o docker está instalado.

* Para maiores informações acesse : [Docker](https://www.docker.com/)
* Ao clonar a aplicação na home execute:
```
docker-compose build
```
e 
```
docker-compose up
```

### A aplicação utiliza as portas
* 5432 para o Postgres
* 3333 para o Node.js
* 80 para o Nginx

