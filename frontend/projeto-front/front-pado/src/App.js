import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [acessos, setAcessos] = useState([]); // recebe os dados do data.json
  const [visualizacao, setVisualizacao] = useState(""); // aqui ele vai definir se a visualisação vai ser de user/devices
  const [filtro, setFiltro] = useState(""); // useState que vai armazenar o valor digitado no input de busca 


  useEffect(() => {
    fetch("/dadosAPI/data.json")
      .then((res) => res.json()) // fetch e formatação do json
      .then((json) => {
        const idOrdenados = json.sort((a, b) => b.payload.logId - a.payload.logId); // ordennando o json em order decrescente 
        setAcessos(json); // atribuindo o json na variavel acessos
      })
  }, []);

  return (
    <div className="App">


      <div className='header'>
        <header>
          <h1>FGH - Sistema de controle de usuários</h1>
        </header>
      </div>

      <div className='titulo'>
        <h2>Qual modo de visualizacao você deseja usar?</h2>
      </div>


      <div className='menu-botoes'>
        <button onClick={() => setVisualizacao("users")}>
          Usuários
        </button>


        <button onClick={() => setVisualizacao("devices")}>
          Dispositivos de Segurança
        </button>
      </div>

      {/* Nesses botões, quando clicados, atribuem a variavel visualização o valor user/devise que vai ser usado na visualização dos dados vindos do data.json */}


      <div className='campo-busca'>
        <input
          placeholder={
            visualizacao === "users"
              ? "Buscar por nome ou ID do usuário"
              : visualizacao === "devices"
                ? "Buscar por MAC ou Lock ID"
                : "Escolha uma visualização"
          }
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />

        {/* Aqui ele define o placeholder de acordo com o valor da variavel visialização e atribrui o valor do input na variavel filtro */}

      </div>

      <h2 className='titulo-lista'>Lista de acessos:</h2>

      <div className='lista'>

        {acessos
          .filter((item) => {
            const termo = filtro.toLowerCase();

            if (visualizacao === "users") {
              return (
                item.payload.userName.toLowerCase().includes(termo) ||
                item.payload.userId.toLowerCase().includes(termo)
              );
            }

            if (visualizacao === "devices") {
              return (
                item.mac.toLowerCase().includes(termo) ||
                item.lockId.toLowerCase().includes(termo)
              );
            }
            // Aqui ele separa o tipo de filtro, se for igual user, ele trata o payload para fazer a busca nos campos userName ou userID ou mac e lockID caso seja devices selecionado


            return true;
          })
          .map((item, index) => (  // aqui ele faz um map em tudo que tem na variavel acessos e separa a ordem que é mostrado os itens de acordo com o que a pessoa selecionou
            <div key={index} className='item-lista'>
              {visualizacao === "users" ? (
                <>
                  <h2>Nome do Usuário: {item.payload.userName}</h2>
                  <h3>ID do Usuário: {item.payload.userId}</h3>
                  <p>Dispositivo de Segurança: {item.mac}</p>
                  <p>Log ID: {item.payload.logId}</p>
                  <p>Data e Hora:{new Date(item.payload.timestamp).toLocaleString()}</p>
                  <p>Tipo de Evento: {item.payload.type === 1 ? "Abertura" : "Travamento"}</p>
                  <p>Método de Acesso:{item.payload.method === 3 ? "Cartão RFID" : "Aplicativo"}</p>
                  <p>Estado Atual:{item.payload.isLocked ? "Trancado" : "Destrancado"}</p>
                </>
              ) : (
                <>
                  <h2>Dispositivo de Segurança: {item.mac}</h2>
                  <h3>Nome do Usuário: {item.payload.userName}</h3>
                  <p>Lock ID:{item.lockId}</p>
                  <p>ID do Usuário: {item.payload.userId}</p>
                  <p>Log ID:{item.payload.logId}</p>
                  <p>Data e Hora: {new Date(item.payload.timestamp).toLocaleString()}</p>
                  <p>Tipo de Evento: {item.payload.type === 1 ? "Abertura" : "Travamento"}</p>
                  <p>Método de Acesso:{item.payload.method === 3 ? "Cartão RFID" : "Aplicativo"}</p>
                  <p>Estado Atual:{item.payload.isLocked ? "Trancado" : "Destrancado"}</p>
                </>

                // Aqui mostra todos os itens do json ao lado do titulo do item

              )}
            </div>
          ))}
      </div>
    </div >
  );
}

export default App;
