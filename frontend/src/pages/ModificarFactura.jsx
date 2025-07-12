import { useState } from "react";

export default function ModificarFactura() {
  const [busqueda, setBusqueda] = useState("");
  const [factura, setFactura] = useState(null);

  const handleBuscar = () => {
    // Simulación: buscar una factura ficticia
    if (busqueda === "1234") {
      setFactura({
        cliente: "Ejemplo S.L.",
        ruta: "MA1",
        fecha: "2025-07-12",
        concepto: "Reparación",
        importe: "150.00",
      });
    } else {
      setFactura(null);
      alert("Factura no encontrada");
    }
  };

  const handleChange = (e) =>
    setFactura({ ...factura, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Factura modificada:", factura);
    // Aquí se hará PUT al backend
  };

  return (
    <div className="max-w-2xl mx-auto bg-base-100 p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-primary">Modificar Factura</h2>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Número de factura"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="input input-bordered w-full"
        />
        <button className="btn btn-secondary" onClick={handleBuscar}>
          Buscar
        </button>
      </div>

      {factura && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">Cliente</label>
            <input
              type="text"
              name="cliente"
              value={factura.cliente}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">Ruta</label>
            <input
              type="text"
              name="ruta"
              value={factura.ruta}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">Fecha</label>
            <input
              type="date"
              name="fecha"
              value={factura.fecha}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">Concepto</label>
            <input
              type="text"
              name="concepto"
              value={factura.concepto}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">Importe (€)</label>
            <input
              type="number"
              name="importe"
              value={factura.importe}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">
            Guardar cambios
          </button>
        </form>
      )}
    </div>
  );
}
