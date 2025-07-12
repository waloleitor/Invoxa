import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import NuevaFactura from "./pages/NuevaFactura";
import MainLayout from "./layouts/MainLayout";
import CargarExcel from "./pages/CargarExcel";
import CargarPDF from "./pages/CargarPDF";
import ModificarFactura from "./pages/ModificarFactura";
import ConsultarFactura from "./pages/ConsultarFactura";
import Historial from "./pages/Historial";
import ContabilizarDia from "./pages/ContabilizarDia";
import ImprimirDia from "./pages/ImprimirDia";
import ContabilidadInterna from "./pages/ContabilidadInterna";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/nueva"
        element={
          <ProtectedRoute>
            <MainLayout>
              <NuevaFactura />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/cargar-excel"
        element={
          <ProtectedRoute>
            <MainLayout>
              <CargarExcel />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/cargar-pdf"
        element={
          <ProtectedRoute>
            <MainLayout>
              <CargarPDF />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/modificar"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ModificarFactura />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/consultar"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ConsultarFactura />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/historial"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Historial />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/contabilizar-dia"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ContabilizarDia />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/imprimir-dia"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ImprimirDia />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/contabilidad"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ContabilidadInterna />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
