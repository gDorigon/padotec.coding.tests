## Desafio para pessoa desenvolvedora frontend jr  

---

## Criação de Aplicação Para Mostrar Logs de Acesso
  
* A empresa XYZ precisa de um sistema para visualizar os acessos dos usuários a um local. Esse local possui um sistema de controle de acesso por fechaduras digitais que possuem acesso biométrico por digital e por aplicativo.  
  
* Você deve construir uma aplicação para mostrar os logs de acesso a equipe de segurança.


### Instruções
1. Você deve consumumir dados de exemplo do arquivo data.json, realizando um "fetch" nos dados como se estivesse acessando uma API.
2. Renderizar a informação dos logs na tela com os seguintes requisitos:
* O usuário poderá escolher ver os logs por fechadura digital ou por usuários.
* A exibição dos logs decrescente, do ultimo log para o primeiro utilizando o logId.
* Caso a visualização escolhida seja por usuário, deve ser possível filtrar pelo nome do usuário ou pelo seu userId.
* Caso a visualização escolhida seja por fechadura, deve ser possível filtrar pelo mac ou pelo seu lockId.
* Escolher um framework ou biblioteca para realizar o desafio
> Opção 1 
- [ ] Angular
> Opção 2 
- [ ] React  
* A aplicação deve ser entregue com um a Dockerfile com as instruções de como executa-lo no README.md
* Sinta-se a vontade para criar a aplicação da melhor forma que encontrar desde que atenda os requisitos solicitados.
* Sinta-se a vontade para incrementar os dados do data.json com maior variação de metodos e horarios, desde que sigam o mesmo formato.
* Diferenciais: Utilizar REDUX.js para controle de estado com Store, Tests, Utilizar TypeScript caso feito com React.js.
* Caso encontre alguma dificuldade nos dados do data.json que impossibilite a execução do desafio, sinta-se livre para altera-lo. Entretanto você deve descrever essas alterações no README.md e o motivo da alteração.

### Os seguintes campos devem ser utilizados na aplicação:
1. lockId: identificador da fechadura digital.
2. mac: mac address da fechadura digital.
3. payload.logId: número do log por fechadura.
4. payload.timestamp: horario do evento.
5. payload.type: tipo do envento. usar: 1 -> abertura, 2 -> trancamento
6. payload.method: metodo de execução. usar: 3 -> digital -> 4 aplicativo
7. payload.isLocked: Estado atual da fechadura. Fechada ou aberta.
8. payload.userId: id de identificação do usuário.
9. payload.useerName: nome do usuário
---

### Exemplo de log por fechadura
```
userId                               | Log                                                            | Data
13b2b0c8-c911-435e-b53d-1093aa774da1 | Jõao da Silva abriu essa porta as 7:57AM por biometria digital | 02/10/2021 7:57AM BRT
```
### Exemplo de log por usuário
```
lockId                               | Log                                                            | Data
13b2b0c8-c911-435e-b53d-1093aa774da1 | Jõao da Silva abriu essa porta as 7:57AM por biometria digital | 02/10/2021 7:57AM BRT
```
> OBS: Os logs acima são o exemplo mais simples. Você pode incrementar e alterar o formato de exibição, desde que os requisitos sejam alcançados.

> Boa sorte! :D