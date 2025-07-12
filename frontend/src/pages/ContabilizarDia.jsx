import { useState } from "react";

const baseFacturas = [
  {
    id: "F001",
    cliente: "Transportes del Sur",
    ruta: "MA2",
    fecha: "2025-07-12",
    importe: "180.00",
    estado: "Pendiente",
  },
  {
    id: "F002",
    cliente: "Mecánica Ronda",
    ruta: "MA2",
    fecha: "2025-07-12",
    importe: "220.00",
    estado: "Pendiente",
  },
];

export default function ContabilizarDia() {
  const [fecha, setFecha] = useState("");
  const [facturas, setFacturas] = useState([]);

  const handleBuscar = () => {
    const resultados = baseFacturas.filter((f) => f.fecha === fecha);
    setFacturas(resultados);
  };

  const handleContabilizar = () => {
    const actualizadas = facturas.map((f) => ({
      ...f,
      estado: "Contabilizada",
    }));
    setFacturas(actualizadas);
  };

  return (
    <div className="max-w-4xl mx-auto bg-base-100 p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-primary">Contabilizar Facturas por Día</h2>

      <div className="flex gap-4 mb-6">
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-secondary" onClick={handleBuscar}>
          Buscar
        </button>
      </div>

      {facturas.length > 0 && (
        <>
          <table className="table w-full table-zebra mb-4">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Ruta</th>
                <th>Importe (€)</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {facturas.map((f) => (
                <tr key={f.id}>
                  <td>{f.id}</td>
                  <td>{f.cliente}</td>
                  <td>{f.ruta}</td>
                  <td>{f.importe}</td>
                  <td>{f.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn btn-primary w-full" onClick={handleContabilizar}>
            Marcar todas como contabilizadas
          </button>
        </>
      )}

      {facturas.length === 0 && fecha && (
        <p className="text-center text-sm text-gray-500 mt-6">No se encontraron facturas para esa fecha.</p>
      )}
    </div>
  );
}
