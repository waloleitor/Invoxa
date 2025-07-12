import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/mainlayaout.css";

export default function MainLayout({ children }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleVolverDashboard = () => navigate("/");
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="main-layout">
      <nav>
        <h1
          className="text-2xl font-extrabold tracking-wide cursor-pointer"
          onClick={handleVolverDashboard}
        >
          Invoxa
        </h1>

        <div className="flex gap-3">
          <button
            onClick={handleVolverDashboard}
            className="btn btn-outline btn-info btn-sm rounded-md hover:bg-info transition"
            title="Volver al Dashboard"
          >
            Dashboard
          </button>
          <button
            onClick={handleLogout}
            className="btn btn-secondary btn-sm rounded-md hover:bg-secondary-focus transition"
            title="Cerrar sesión"
          >
            Cerrar sesión
          </button>
        </div>
      </nav>

      <main className="flex-grow p-6 max-w-7xl mx-auto w-full">{children}</main>

      <footer className="bg-base-200 text-center py-4 text-sm text-gray-400">
        © 2025 Invoxa · Todos los derechos reservados
      </footer>
    </div>
  );
}
