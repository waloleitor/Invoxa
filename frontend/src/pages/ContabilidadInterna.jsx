import { useState } from "react";

const datosSimulados = [
  { id: "F001", cliente: "Empresa Uno", ruta: "MA1", fecha: "2025-07-10", base: 100, iva: 21 },
  { id: "F002", cliente: "Empresa Dos", ruta: "MA2", fecha: "2025-07-10", base: 200, iva: 21 },
  { id: "F003", cliente: "Empresa Tres", ruta: "MA1", fecha: "2025-07-11", base: 150, iva: 10 },
];

export default function ContabilidadInterna() {
  const [rutaSeleccionada, setRutaSeleccionada] = useState("");

  const facturasFiltradas = rutaSeleccionada
    ? datosSimulados.filter((f) => f.ruta === rutaSeleccionada)
    : datosSimulados;

  const totalBase = facturasFiltradas.reduce((acc, f) => acc + f.base, 0);
  const totalIVA = facturasFiltradas.reduce((acc, f) => acc + (f.base * f.iva) / 100, 0);
  const totalFinal = totalBase + totalIVA;

  return (
    <div className="max-w-5xl mx-auto bg-base-100 p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-primary">Contabilidad Interna</h2>

      <div className="mb-6">
        <label className="label">Filtrar por ruta</label>
        <select
          className="select select-bordered w-full max-w-xs"
          value={rutaSeleccionada}
          onChange={(e) => setRutaSeleccionada(e.target.value)}
        >
          <option value="">Todas las rutas</option>
          <option value="MA1">MA1</option>
          <option value="MA2">MA2</option>
        </select>
      </div>

      <table className="table w-full table-zebra mb-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Ruta</th>
            <th>Base (€)</th>
            <th>IVA (%)</th>
            <th>Total (€)</th>
          </tr>
        </thead>
        <tbody>
          {facturasFiltradas.map((f) => (
            <tr key={f.id}>
              <td>{f.id}</td>
              <td>{f.cliente}</td>
              <td>{f.ruta}</td>
              <td>{f.base.toFixed(2)}</td>
              <td>{f.iva}%</td>
              <td>{(f.base + (f.base * f.iva) / 100).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 text-right space-y-1">
        <p><strong>Total base imponible:</strong> {totalBase.toFixed(2)} €</p>
        <p><strong>Total IVA:</strong> {totalIVA.toFixed(2)} €</p>
        <p className="text-lg font-bold"><strong>Total facturado:</strong> {totalFinal.toFixed(2)} €</p>
      </div>
    </div>
  );
}
