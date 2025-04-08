import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavPag: React.FC = () => {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("usuario") || "null");

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Livraria Online
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Menu da esquerda */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {usuario ? (
              <>
                <li className="nav-item">
                  <span className="nav-link active">
                    Bem-vindo, <strong>{usuario.name}</strong>!
                  </span>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-sm btn-light ms-2"
                    onClick={handleLogout}
                  >
                    Sair
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/cadastro">
                    Registrar-se
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Categorias
              </Link>
            </li>
          </ul>

          {/* Elementos do lado direito */}
          <div className="d-flex align-items-center">
            {usuario && (
              <Link to="/carrinho" className="btn btn-warning me-3">
                Carrinho
              </Link>
            )}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar livros"
                aria-label="Search"
              />
              <button className="btn btn-light" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavPag;
