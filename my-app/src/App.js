import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/add" element={<Add />} />
        <Route path="/books/edit/:bookId" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
