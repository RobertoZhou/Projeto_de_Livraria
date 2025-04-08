import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  bookId: number;
  quantity: number;
}

interface Cart {
  userId: number;
  items: CartItem[];
}

interface Book {
  id: number;
  title: string;
  author: string;
  descricao: string;
  preco: string;
  capa: string;
}

const Carrinho: React.FC = () => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const navigate = useNavigate();

  // Busca o carrinho do usuário
  const fetchCart = async () => {
    const usuario = JSON.parse(localStorage.getItem("usuario") || "null");
    if (!usuario) {
      alert("Você precisa estar logado para acessar o carrinho.");
      navigate("/login");
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/cart/${usuario.id}`);
      if (!response.ok) throw new Error("Erro ao buscar carrinho");
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  // Busca a lista completa de livros
  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/books");
      if (!response.ok) throw new Error("Erro ao buscar livros");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  // Remove um item do carrinho individualmente
  const handleRemoveItem = async (bookId: number) => {
    if (!cart) return;
    try {
      await fetch(`http://localhost:5000/cart/${cart.userId}/${bookId}`, {
        method: "DELETE",
      });
      alert("Item removido do carrinho");
      fetchCart();
    } catch (error) {
      console.error("Erro ao remover item:", error);
      alert("Erro ao remover item do carrinho.");
    }
  };

  // Finaliza a compra: remove todos os itens do carrinho
  const finalizePurchase = async () => {
    if (!cart) return;
    try {
      // Remove cada item do carrinho
      for (const item of cart.items) {
        await fetch(`http://localhost:5000/cart/${cart.userId}/${item.bookId}`, {
          method: "DELETE",
        });
      }
      alert("Compra finalizada! Seu carrinho foi esvaziado.");
      fetchCart(); // atualiza o carrinho (deve ficar vazio)
    } catch (error) {
      console.error("Erro ao finalizar compra:", error);
      alert("Erro ao finalizar a compra.");
    }
  };

  // Recupera detalhes do livro para um item do carrinho
  const getBookDetails = (bookId: number) => {
    return books.find((book) => book.id === bookId);
  };

  useEffect(() => {
    fetchCart();
    fetchBooks();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Carrinho de Compras</h2>
      {cart && cart.items.length > 0 ? (
        <div>
          <ul className="list-group">
            {cart.items.map((item) => {
              const bookDetails = getBookDetails(item.bookId);
              return (
                <li
                  key={item.bookId}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {bookDetails ? (
                    <>
                      <div>
                        <h5>{bookDetails.title}</h5>
                        <p>
                          {bookDetails.preco} - Quantidade: {item.quantity}
                        </p>
                      </div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemoveItem(item.bookId)}
                      >
                        Remover
                      </button>
                    </>
                  ) : (
                    <span>Livro não encontrado</span>
                  )}
                </li>
              );
            })}
          </ul>
          <button
            className="btn btn-success mt-3"
            onClick={finalizePurchase}
          >
            Finalizar Compra
          </button>
        </div>
      ) : (
        <p>Seu carrinho está vazio.</p>
      )}
    </div>
  );
};

export default Carrinho;
