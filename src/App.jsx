import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
// import ProductsPage from "./pages/ProductsPage";
// import ProductCategoryPage from "./pages/ProductCategoryPage";
import ContactPage from "./pages/ContactPage";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* 
            <Route path="/products" element={<ProductsPage />} />
            <Route
              path="/products/:category"
              element={<ProductCategoryPage />}
            />
            */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
