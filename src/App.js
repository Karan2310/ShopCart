import "./App.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HomePage /> */}
      <ProductPage />
    </div>
  );
}

export default App;
