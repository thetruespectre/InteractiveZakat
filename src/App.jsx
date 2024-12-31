import "./App.css";
import CalculationPage from "./pages/CalculationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CalculationPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
