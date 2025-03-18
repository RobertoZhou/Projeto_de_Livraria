import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BookDetails from "./components/BookDetails";
import NavPag from "./components/NavPag";

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <NavPag />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livro/:id" element={<BookDetails />} />
        </Routes>
      </Router>
    </div> 
  );
};

export default App;