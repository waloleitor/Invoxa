import { useState } from "react";

const facturasSimuladas = [
  {
    id: "F001",
    cliente: "Transportes del Sur",
    ruta: "MA2",
    fecha: "2025-07-11",
    importe: "180.00",
    estado: "Contabilizada",
  },
  {
    id: "F002",
    cliente: "Logística Exprés",
    ruta: "MA3",
    fecha: "2025-07-12",
    importe: "320.00",
    estado: "Pendiente",
  },
  {
    id: "F003",
    cliente: "Mecánica Ronda",
    ruta: "MA2",
    fecha: "2025-07-10",
    importe: "145.50",
    estado: "Contabilizada",
  },
];

export default function Historial() {
  const [filtroCliente, setFiltroCliente] = useState("");
  const [filtroRuta, setFiltroRuta] = useState("");

  const facturasFiltradas = facturasSimuladas.filter((f) =>
    f.cliente.toLowerCase().includes(filtroCliente.toLowerCase()) &&
    f.ruta.toLowerCase().includes(filtroRuta.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto bg-base-100 p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-primary">Historial de Facturas</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="Filtrar por cliente"
          className="input input-bordered w-full"
          value={filtroCliente}
          onChange={(e) => setFiltroCliente(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filtrar por ruta"
          className="input input-bordered w-full"
          value={filtroRuta}
          onChange={(e) => setFiltroRuta(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Ruta</th>
              <th>Fecha</th>
              <th>Importe (€)</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {facturasFiltradas.length > 0 ? (
              facturasFiltradas.map((f) => (
                <tr key={f.id}>
                  <td>{f.id}</td>
                  <td>{f.cliente}</td>
                  <td>{f.ruta}</td>
                  <td>{f.fecha}</td>
                  <td>{f.importe}</td>
                  <td>{f.estado}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No se encontraron facturas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

