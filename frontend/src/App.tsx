// @ts-check
import { Routes, Route, Navigate } from "react-router-dom";
import KartavyaPolicyPage from "./pages/KartavyaPolicyPage";
import { ProductListingPage } from "./pages/ProductListingPage";
import DashboardComponent from "./components/DashboardComponent/DashboardComponent";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/policies/kartavya" replace />} />

        {/* Policy routes */}
        <Route path="/policies/kartavya" element={<KartavyaPolicyPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/dashboard" element={<DashboardComponent />} />

        {/* Fallback */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
