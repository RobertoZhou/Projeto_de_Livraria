import React, { useState } from "react";

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    alert(`Cadastro realizado com sucesso!\nNome: ${nome}\nEmail: ${email}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Cadastro</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome Completo
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="senha" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmarSenha" className="form-label">
              Confirmar Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmarSenha"
              placeholder="Confirme sua senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
