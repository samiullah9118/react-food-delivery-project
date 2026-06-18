import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/menu" element={<Home />} />
          <Route path="/shop" element={<Home />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
