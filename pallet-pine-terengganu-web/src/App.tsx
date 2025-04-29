import Navbar from "./components/Navbar/NavbarComponent";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductGalleryPage/ProductGalleryPage";
import { Routes, Route } from "react-router-dom";
import FooterComponent from "./components/Footer/FooterComponent";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
