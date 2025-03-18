import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const livros = [
    {
      id: 1,
      titulo: "O Senhor dos Anéis",
      descricao: "Uma aventura épica na Terra Média.",
      capa: "https://m.media-amazon.com/images/I/514M+qMYWSL._SY445_SX342_.jpg",
    },
    {
      id: 2,
      titulo: "Dom Casmurro",
      descricao: "O clássico de Machado de Assis.",
      capa: "https://m.media-amazon.com/images/I/41UQgnvavyL._SY445_SX342_.jpg",
    },
    {
      id: 3,
      titulo: "1984",
      descricao: "Uma distopia de George Orwell.",
      capa: "https://m.media-amazon.com/images/I/51feD87yuEL._SY445_SX342_.jpg",
    },
  ];

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
              <img src={livro.capa} className="card-img-top" alt={`Capa de ${livro.titulo}`} />
              <div className="card-body">
                <h5 className="card-title">{livro.titulo}</h5>
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


