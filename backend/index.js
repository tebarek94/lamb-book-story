import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import mysql from "mysql2";
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  database: "rest",
  password: "",
  user: "root",
});
app.get("/", (req, res) => {
  res.send("Hello this is backend");
});

app.get("/book", (req, res) => {
  const p = "SELECT * FROM books";
  db.query(p, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q =
    "INSERT INTO books (`title`, `description`, `cover`) VALUES (?, ?, ?)";
  const values = [req.body.title, req.body.description, req.body.cover];
  db.query(q, values, (err, data) => {
    // Add 'values' as the second argument
    if (err) return res.json(err);
    return res.json("Book has been created");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "delete from books where id =?";
  db.query(q, [bookId], (err, data) => {
    db.query(q, values, (err, data) => {
      // Add 'values' as the second argument
      if (err) return res.json(err);
      return res.json("Book has been deleted succssefully");
    });
  });
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`server is running ${process.env.PORT}`);
  db.connect((err) => {
    if (err) throw err;
    console.log(`Database is connected `);
  });
});
