# 📡 API de Cadastro de Dispositivos IoT

Esta aplicação é uma API RESTful desenvolvida em **Node.js com Express.js** que permite o cadastro, listagem e consulta de dispositivos IoT (Internet das Coisas). Os dados são armazenados em uma base **MongoDB hospedada remotamente via MongoDB Atlas**.

---

## ✅ Funcionalidades

- 🔍 Listar todos os dispositivos
- ➕ Cadastrar novo dispositivo
- 🔎 Buscar dispositivo por `deviceId`
- 🔒 Verifica se o MAC address já existe antes de cadastrar

---

> Collection para o POSTMAN se enconstra na raiz do projeto

## 🧪 Endpoints da API

a base da url é `http://localhost:3000`

| Método | Endpoint              | Ação                              |
|--------|-----------------------|-----------------------------------|
| GET    | `/api/listar`        | Lista todos os dispositivos       |
| POST   | `/api/registrar`        | Cadastra um novo dispositivo      |
| GET    | `/api/listar/:id`    | Busca um dispositivo por ID       |

### 📥 Exemplo de corpo JSON para cadastro (`POST /api/devices`):

```json
{
  "name": "Sensor de Temperatura",
  "mac": "AA:BB:CC:DD:EE:FF",
  "email": "sensor@iot.com"
}
```

---

## 🐳 Executando com Docker

### 1. Clone o projeto:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Crie a imagem Docker:

```bash
docker build . -t backend-pado-img
```

### 3. Execute o container:

```bash
docker run -d --rm -p 3000:3000 --name back-pado-container backend-pado-img
```

> A aplicação já está configurada para se conectar automaticamente a um banco **MongoDB Atlas remoto**, sem necessidade de variáveis de ambiente ou configuração adicional.

> Certifique-se que não possui outra aplicação usando a porta 30000

---

## 🌐 Acesso à API

Com o container em execução, a API estará disponível em:

```
http://localhost:3000/api/registrar
```

---

## 📋 Exemplo de resposta (POST):

```json
{
  "deviceId": 1,
  "mac": "AA:BB:CC:DD:EE:FF"
}
```

---

## 📌 Observações

- A conexão com o MongoDB Atlas já está embutida no código (`server.js`).
- O campo `deviceId` é gerado automaticamente com base no último ID existente no banco.
- O campo `timestamp` é armazenado como epoch (segundos desde 1970).

---
