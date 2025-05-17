
# 🚀 Padotec Coding Tests - Front-end

Este projeto é a interface do desafio técnico da Padotec, desenvolvido em React, com containerização via Docker.

---

## 📁 Estrutura do Projeto

O repositório completo está disponível em:  
🔗 [https://github.com/gDorigon/padotec.coding.tests](https://github.com/gDorigon/padotec.coding.tests)

O projeto front-end encontra-se no seguinte caminho:  
📂 `frontend/projeto-front/front-pado`

---

## 🧱 Pré-requisitos

Antes de iniciar, você precisa ter instalado em sua máquina:

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)

---

## 📦 Como executar o projeto com Docker

### 1. Clone o repositório:

```bash
git clone https://github.com/gDorigon/padotec.coding.tests.git
cd padotec.coding.tests/frontend/projeto-front/front-pado
```

### 2. Construa a imagem Docker:

```bash
docker build -t front-pado .
```

### 3. Rode o container:

```bash
docker run -p 3000:80 --name front-pado front-pado
```

> A aplicação será exposta em:  
> 🌐 `http://localhost:3000`

---

## 🐳 Comandos úteis do Docker

- **Parar o container:**
  ```bash
  docker stop front-pado
  ```

- **Remover o container:**
  ```bash
  docker rm front-pado
  ```

- **Ver containers ativos:**
  ```bash
  docker ps
  ```

---

## 📌 Observações

- A aplicação é servida pelo Nginx dentro do container.
- Certifique-se de que a porta 3000 não esteja em uso antes de iniciar o container.

---

## 📄 Licença

Este projeto é de uso educacional/técnico e faz parte de um desafio para vaga Full-Stack P&D.
