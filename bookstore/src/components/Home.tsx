import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Livro {
  id: number;
  title: string;
  descricao: string;
  capa: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setLivros(data))
      .catch((err) => console.error("Erro ao buscar livros:", err));
  }, []);

  const verDetalhes = (id: number) => {
    navigate(`/livro/${id}`);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5">
        <h1 className="mb-4 text-center">Bem-vindo à Livraria Online</h1>
        <div className="row justify-content-center mb-5">
          {livros.map((livro) => (
            <div className="card mx-3 mb-4" key={livro.id} style={{ width: "18rem" }}>
              <img src={livro.capa} className="card-img-top" alt={`Capa de ${livro.title}`} />
              <div className="card-body">
                <h5 className="card-title">{livro.title}</h5>
                <p className="card-text">{livro.descricao}</p>
                <button onClick={() => verDetalhes(livro.id)} className="btn btn-primary">
                  Ver detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-light text-center text-muted py-4 mt-auto border-top">
        <p className="mb-1">&copy; {new Date().getFullYear()} Livraria Online. Todos os direitos reservados.</p>
        <p className="mb-0">Entre em contato: contato@livrariaonline.com</p>
      </footer>
    </div>
  );
};

export default Home;
