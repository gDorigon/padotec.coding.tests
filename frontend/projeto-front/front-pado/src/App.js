import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [acessos, setAcessos] = useState([]);
  const [visualizacao, setVisualizacao] = useState("");

  useEffect(() => {
    fetch("/dadosAPI/data.json")
      .then((res) => res.json())
      .then((json) => {
        const idOrdenados = json.sort((a, b) => b.payload.logId - a.payload.logId);
        setAcessos(json);
      })
  }, []);

  return (
    <div className="App">
      <h1>FGH - Sistema de controle de usuários</h1>

      <h2>Qual modo de visualizacao você deseja usar?</h2>

      <button onClick={() => setVisualizacao("users")}>
        Usuários
      </button>

      <button onClick={() => setVisualizacao("devices")}>
        Dispositivos de Segurança
      </button>

      <div>
        <h2>Lista de acessos:</h2>

        {acessos.map((item, index) => (
          <div key={index}>
            {visualizacao === "users" ? (
              <>
                <h3>Nome: {item.payload.userName}</h3>
                <p>ID: {item.payload.userId}</p>
                <p>Status: {item.payload.isLocked ? "Bloqueado" : "Desbloqueado"}</p>
                <p>
                  Data: {Date((item.payload.timestamp) * 1000)}
                </p>
              </>
            ) : (
              <>
                <h3>MAC: {item.mac}</h3>
                <p>Lock ID: {item.lockId}</p>
                <p>
                  Data: {Date((item.payload.timestamp) * 1000)}
                </p>
              </>
            )}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
