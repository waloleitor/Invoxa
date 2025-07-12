import { useState } from "react";

const usuariosSimulados = [
  { id: 1, nombre: "Antonio García", email: "antonio@invoxa.com", rol: "coordinador" },
  { id: 2, nombre: "Laura Pérez", email: "laura@invoxa.com", rol: "responsable" },
  { id: 3, nombre: "Admin Root", email: "admin@invoxa.com", rol: "admin" },
];

export default function AdminPanel() {
  const [usuarios, setUsuarios] = useState(usuariosSimulados);

  const cambiarRol = (id, nuevoRol) => {
    const actualizados = usuarios.map((u) =>
      u.id === id ? { ...u, rol: nuevoRol } : u
    );
    setUsuarios(actualizados);
  };

  const eliminarUsuario = (id) => {
    const confirm = window.confirm("¿Estás seguro de eliminar este usuario?");
    if (confirm) {
      setUsuarios(usuarios.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-base-100 p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-primary">Gestión de Usuarios</h2>

      <table className="table w-full table-zebra">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.nombre}</td>
              <td>{u.email}</td>
              <td>
                <select
                  className="select select-bordered select-sm"
                  value={u.rol}
                  onChange={(e) => cambiarRol(u.id, e.target.value)}
                >
                  <option value="coordinador">Coordinador</option>
                  <option value="responsable">Responsable</option>
                  <option value="admin">Administrador</option>
                </select>
              </td>
              <td>
                <button className="btn btn-sm btn-error" onClick={() => eliminarUsuario(u.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
