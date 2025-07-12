import { useState } from "react";

const baseFacturas = [
  {
    id: "F100",
    cliente: "Transportes del Sur",
    ruta: "MA1",
    fecha: "2025-07-12",
    importe: 185.0,
  },
  {
    id: "F101",
    cliente: "Repuestos del Norte",
    ruta: "MA1",
    fecha: "2025-07-12",
    importe: 320.5,
  },
];

export default function ImprimirDia() {
  const [fecha, setFecha] = useState("");
  const [facturas, setFacturas] = useState([]);

  const handleBuscar = () => {
    const resultados = baseFacturas.filter((f) => f.fecha === fecha);
    setFacturas(resultados);
  };

  const total = facturas.reduce((acc, f) => acc + f.importe, 0);

  return (
    <div className="max-w-4xl mx-auto bg-base-100 p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-primary">Resumen imprimible del día</h2>

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
        <div className="bg-white text-black p-6 rounded-lg border border-gray-200 print:bg-white">
          <h3 className="text-xl font-semibold mb-4">Facturas del {fecha}</h3>
          <table className="table w-full table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Ruta</th>
                <th>Importe (€)</th>
              </tr>
            </thead>
            <tbody>
              {facturas.map((f) => (
                <tr key={f.id}>
                  <td>{f.id}</td>
                  <td>{f.cliente}</td>
                  <td>{f.ruta}</td>
                  <td>{f.importe.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="font-bold border-t">
                <td colSpan="3">Total</td>
                <td>{total.toFixed(2)} €</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-6 flex justify-end">
            <button className="btn btn-outline btn-primary" onClick={() => window.print()}>
              Imprimir resumen
            </button>
          </div>
        </div>
      )}

      {facturas.length === 0 && fecha && (
        <p className="text-center text-sm text-gray-500 mt-6">No se encontraron facturas para esa fecha.</p>
      )}
    </div>
  );
}
