import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import { PrivateRoute } from "./components/PrivateRoute";
import { Container, Row, Col } from "react-bootstrap";
import Ntdl from "./components/Ntdl";
import DynamicNtdl from "./components/DynamicNtdl";
import { ToastContainer } from "react-toastify";
import Portfolio from "./pages/Portfolio";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ntdl" element={<Ntdl />} />
        <Route path="/dynamicntdl" element={<DynamicNtdl />} />
        <Route path="/staticntdl" element={<Ntdl />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/prankcalculator" element={<Calculator />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
