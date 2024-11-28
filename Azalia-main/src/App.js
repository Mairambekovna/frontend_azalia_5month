import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<div>About Us</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
