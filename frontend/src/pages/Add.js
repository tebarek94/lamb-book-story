import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Add() {
  const [book, setbook] = useState({
    title: "",
    description: "",
    cover: "",
  });
  const navigate = useNavigate();
  const handleChage = (e) => {
    setbook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const HandleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/books`, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(book);
  return (
    <div className="form">
      <h1> Add New Book</h1>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChage}
      />
      <input
        type="text"
        placeholder="desc"
        name="description"
        onChange={handleChage}
      />

      <input
        type="text"
        placeholder="cover"
        name="cover"
        onChange={handleChage}
      />
      <button onClick={HandleClick}>
        <Link to="/">Add</Link>
      </button>
    </div>
  );
}

export default Add;
