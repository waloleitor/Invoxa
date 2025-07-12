import { useState } from "react";

export default function ConsultarFactura() {
  const [numero, setNumero] = useState("");
  const [factura, setFactura] = useState(null);

  const handleBuscar = () => {
    if (numero === "1234") {
      setFactura({
        cliente: "Ejemplo S.L.",
        ruta: "MA1",
        fecha: "2025-07-10",
        concepto: "Cambio de batería",
        importe: "220.00",
        estado: "Contabilizada",
      });
    } else {
      setFactura(null);
      alert("Factura no encontrada");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-base-100 p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-primary">Consultar Factura</h2>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Número de factura"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          className="input input-bordered w-full"
        />
        <button className="btn btn-secondary" onClick={handleBuscar}>
          Buscar
        </button>
      </div>

      {factura && (
        <div className="space-y-2">
          <div><strong>Cliente:</strong> {factura.cliente}</div>
          <div><strong>Ruta:</strong> {factura.ruta}</div>
          <div><strong>Fecha:</strong> {factura.fecha}</div>
          <div><strong>Concepto:</strong> {factura.concepto}</div>
          <div><strong>Importe:</strong> {factura.importe} €</div>
          <div><strong>Estado:</strong> {factura.estado}</div>
        </div>
      )}
    </div>
  );
}
