import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Email: ${email}\nSenha: ${senha}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
