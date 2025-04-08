import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BookDetails from "./components/BookDetails";
import NavPag from "./components/NavPag";
import Login from "./user/Login";
import Cadastro from "./user/Cadastro";
import Carrinho from "./components/Carrinho"; // Importe a página do carrinho

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <NavPag />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livro/:id" element={<BookDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
