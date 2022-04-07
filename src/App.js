import { useState } from "react";
import api from "./api";
import "./global.css";
import "./styles.css";

function App() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [genero, setGenero] = useState("");

  async function enviar(e) {
    e.preventDefault();
    const data = { nome, sobrenome, email, telefone, dataNascimento, genero };
    const response = await api.post("/formulario", data);
    alert(response.data.message);
  }

  return (
    <div className="container">
      <form>
        <div className="input-group">
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" onChange={e => setNome(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="sobrenome">Sobrenome</label>
          <input type="text" name="sobrenome" onChange={e => setSobrenome(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="telefone">Telefone</label>
          <input type="text" name="telefone" onChange={e => setTelefone(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="data-nascimento">Data de Nascimento</label>
          <input type="text" name="data-nascimento" onChange={e => setDataNascimento(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="genero">Gênero</label>
          <input type="text" name="genero" onChange={e => setGenero(e.target.value)} />
        </div>

        <div className="button-container">
          <button onClick={enviar}>Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
