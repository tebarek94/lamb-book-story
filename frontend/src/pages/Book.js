import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Book() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAllBook = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/book`);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBook();
  }, []);
  const HandleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/books/ ${id}`);
      // window.location.reload();
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <div>
      <h1>Lama Book shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <h2>{book.description}</h2>
            <button className="delete" onClick={() => HandleDelete(book.id)}>
              Delete
            </button>
            <button className="Update">
              <Link to="/update">Update</Link>
            </button>
          </div>
        ))}
        <button>
          <Link to="/add">Add new book</Link>
        </button>
      </div>
    </div>
  );
}

export default Book;
