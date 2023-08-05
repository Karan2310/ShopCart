import "./App.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./pages/Loading";
import { useState } from "react";
function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      {loading && <Loading />}
    </div>
  );
}

export default App;
