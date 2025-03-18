import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
    descricao: "Uma jornada épica pela Terra Média com hobbits, magos e anéis mágicos.",
    preco: "R$ 59,90",
    capa: "https://m.media-amazon.com/images/I/514M+qMYWSL._SY445_SX342_.jpg",
  },
  {
    id: 2,
    titulo: "Dom Casmurro",
    descricao: "Uma história envolvente de amor, ciúme e dúvida de Machado de Assis.",
    preco: "R$ 29,90",
    capa: "https://m.media-amazon.com/images/I/41UQgnvavyL._SY445_SX342_.jpg",
  },
  {
    id: 3,
    titulo: "1984",
    descricao: "Um clássico distópico que retrata um governo totalitário.",
    preco: "R$ 39,90",
    capa: "https://m.media-amazon.com/images/I/51feD87yuEL._SY445_SX342_.jpg",
  },
];

const BookDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const livro = livros.find((livro) => livro.id === Number(id));

  if (!livro) {
    return <p className="text-center mt-5">Livro não encontrado.</p>;
  }

  return (
    <div className="container mt-5">
      <button className="btn btn-link mb-4" onClick={() => navigate(-1)}>
        ← Voltar
      </button>
      <div className="row">
        <div className="col-md-4">
          <img src={livro.capa} alt={livro.titulo} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h2>{livro.titulo}</h2>
          <p>{livro.descricao}</p>
          <h4 className="text-success">{livro.preco}</h4>
          <button className="btn btn-success mt-3">Comprar agora</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;