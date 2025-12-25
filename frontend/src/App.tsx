import { Routes, Route, Navigate } from "react-router-dom";
import KartavyaPolicyPage from "./pages/KartavyaPolicyPage";

function App() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<Navigate to="/policies/kartavya" replace />} />

      {/* Policy routes */}
      <Route path="/policies/kartavya" element={<KartavyaPolicyPage />} />

      {/* Fallback */}
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}

export default App;
