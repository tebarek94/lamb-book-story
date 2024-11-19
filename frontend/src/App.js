import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./pages/Book";
import Add from "./pages/Add";
import "./App.css";
import Update from "./pages/Update";
import "./stylee.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Book />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
