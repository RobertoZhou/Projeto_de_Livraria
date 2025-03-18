import React from "react";
import { Link } from "react-router-dom";

const NavPag: React.FC = () => {
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Início</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Categorias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Contato</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar livros"
              aria-label="Search"
            />
            <button className="btn btn-light" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavPag;