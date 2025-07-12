import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const fakeToken = "fake-jwt-token";
    const fakeUser = {
      email: formData.email,
      role: "coordinador", // puedes cambiarlo por "admin" si lo necesitas
    };

    login(fakeToken, fakeUser);
    navigate("/");
  };

  return (
    <div className="login-layout min-h-screen bg-[#1f2235] flex items-center justify-center p-6">
      <div className="w-full max-w-md p-8 rounded-xl shadow-md bg-base-100">
        <h2 className="text-2xl font-bold mb-4 text-center text-primary">
          Invoxa – Iniciar sesión
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Correo electrónico</span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Contraseña</span>
            </label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-primary w-full mt-4" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
