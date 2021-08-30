##  Teste para desenvolvedor back-end junior
#### Criado por Everton Sávio Santos Lucas
---     

## Criação da API de cadastro de dispositivos

**Descrição:** A Empresa XYZ deseja desenvolver um sistema para cadastro de seus dispositivos IoT, dessa forma, você como desenvolvedor back-end deverá desenvolver as API's necessárias.

```
Requisitos técnicos:

Linguagem: Java 11
Framework: Spring / Spring Boot
Database: H2 in memory
```

---
### Três funcionalidades deverão ser desenvolvidas:

1. **Cadastro de um único dispositivo IoT**: Cadastro simples de dispositivo

```json
Request URI: "/registrar";
Verbo: POST
Body: Json
{
  "name": "nome do dispositivo",
  "mac": "mac do dispositivo",
  "email": "email do dono do dispositivo",
  "latitude": latitude,
  "longitude": longitude
}

Response: 201
{
  "deviceId": id do dispositivo (gerado no back-end),
  "mac": "mac do dispositivo"
}

```
---
2. **Listar todos os dispositivos cadastrados**: Todos os dispositivos são retornados em uma lista de objetos
```json
Request URI: "/listar"
Verbo: GET

Response: 200
[
  {
    "deviceId": id do dispositivo 1 (gerado no back-end),
    "name": "nome do dispositivo 1",
    "mac": "mac do dispositivo 1",
    "email": "email do dono do dispositivo 1",
    "latitude": latitude 1,
    "longitude": longitude 1,
  },
  {
    "deviceId": id do dispositivo 2 (gerado no back-end),
    "name": "nome do dispositivo 2",
    "mac": "mac do dispositivo 2",
    "email": "email do dono do dispositivo 2",
    "latitude": latitude 2,
    "longitude": longitude 2
  },
  ...

]
```
---
3. **Listar dispositivo pelo "deviceId"**: O usuário irá informar o id do dispositivo que ele deseja consultar na URI
```json
Request URI: "/listar/deviceId" //e.g. -> /listar/1
Verbo: GET

Response: 200
{
  "deviceId": id do dispositivo 1 (gerado no back-end),
  "name": "nome do dispositivo 1",
  "mac": "mac do dispositivo 1",
  "email": "email do dono do dispositivo 1",
  "latitude": latitude 1,
  "longitude": longitude 1,
}
```
---

4. **Desafio Bônus:**  Containerização da aplicação com Docker.  
```
Criar uma Dockerfile para a aplicação desenvolvida
```
---
## Considerações finais
1. Descrever as instruções para executar a aplicação preferencialmente no README.md
2. Disponibilizar a aplicação em seu Github informando a url para acesso.

---
