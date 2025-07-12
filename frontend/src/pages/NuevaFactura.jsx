import { useState } from "react";

export default function NuevaFactura() {
  const [formData, setFormData] = useState({
    cliente: "",
    ruta: "",
    fecha: "",
    concepto: "",
    importe: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se integrará la llamada al backend en el futuro
    alert(`Factura creada para cliente ${formData.cliente} con importe ${formData.importe}€`);
    setFormData({
      cliente: "",
      ruta: "",
      fecha: "",
      concepto: "",
      importe: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-base-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">Nueva Factura</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="label font-semibold" htmlFor="cliente">Cliente</label>
          <input
            id="cliente"
            name="cliente"
            type="text"
            value={formData.cliente}
            onChange={handleChange}
            placeholder="Nombre del cliente"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label font-semibold" htmlFor="ruta">Ruta</label>
          <input
            id="ruta"
            name="ruta"
            type="text"
            value={formData.ruta}
            onChange={handleChange}
            placeholder="Código de ruta"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label font-semibold" htmlFor="fecha">Fecha</label>
          <input
            id="fecha"
            name="fecha"
            type="date"
            value={formData.fecha}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label font-semibold" htmlFor="concepto">Concepto</label>
          <input
            id="concepto"
            name="concepto"
            type="text"
            value={formData.concepto}
            onChange={handleChange}
            placeholder="Descripción de la factura"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label font-semibold" htmlFor="importe">Importe (€)</label>
          <input
            id="importe"
            name="importe"
            type="number"
            min="0"
            step="0.01"
            value={formData.importe}
            onChange={handleChange}
            placeholder="0.00"
            className="input input-bordered w-full"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Crear Factura
        </button>
      </form>
    </div>
  );
}
