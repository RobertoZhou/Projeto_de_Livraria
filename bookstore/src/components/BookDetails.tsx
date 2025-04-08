import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Book {
  id: number;
  title: string;
  author: string;
  descricao: string;
  preco: string;
  capa: string;
}

const BookDetails: React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) =>
        console.error("Erro ao buscar detalhes do livro:", err)
      );
  }, [id]);

  if (!book) return <p>Carregando...</p>;

  // Função para adicionar o livro ao carrinho
  const handleAddToCart = async () => {
    // Verifica se o usuário está logado (dados salvos no localStorage)
    const usuario = JSON.parse(localStorage.getItem("usuario") || "null");
    if (!usuario) {
      alert("Você precisa estar logado para adicionar ao carrinho.");
      return;
    }

    try {
      // Faz a requisição para adicionar o produto ao carrinho
      const response = await fetch(
        `http://localhost:5000/cart/${usuario.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bookId: book.id,
            quantity: 1, // quantidade padrão, pode ser adaptada conforme necessário
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Produto adicionado ao carrinho!");
      } else {
        alert(data.message || "Erro ao adicionar o produto ao carrinho.");
      }
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>{book.title}</h2>
      <img src={book.capa} alt={book.title} className="img-fluid mb-3" />
      <p>
        <strong>Autor:</strong> {book.author}
      </p>
      <p>
        <strong>Descrição:</strong> {book.descricao}
      </p>
      <p>
        <strong>Preço:</strong> {book.preco}
      </p>
      <button onClick={handleAddToCart} className="btn btn-success">
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default BookDetails;
