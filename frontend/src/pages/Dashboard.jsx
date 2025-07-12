import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const acciones = [
    { label: "Nueva factura", icono: "📝", ruta: "/nueva" },
    { label: "Cargar Excel", icono: "📊", ruta: "/cargar-excel" },
    { label: "Cargar PDF", icono: "📄", ruta: "/cargar-pdf" },
    { label: "Modificar factura", icono: "✏️", ruta: "/modificar" },
    { label: "Consultar factura", icono: "🔍", ruta: "/consultar" },
    { label: "Historial de facturas", icono: "📚", ruta: "/historial" },
    { label: "Contabilizar día", icono: "📅", ruta: "/contabilizar-dia" },
    { label: "Imprimir día", icono: "🖨️", ruta: "/imprimir-dia" },
    { label: "Contabilidad interna", icono: "💼", ruta: "/contabilidad" },
  ];

  return (
    <div className="p-8 min-h-screen bg-base-200">
      <h1 className="text-3xl font-bold mb-8 text-primary text-center">
        Panel de Control
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {acciones.map((accion, index) => (
          <button
            key={index}
            className="btn btn-lg btn-outline btn-primary flex items-center justify-center text-lg h-28 border border-black rounded-lg"
            onClick={() => navigate(accion.ruta)}
          >
            <span className="text-3xl mr-2">{accion.icono}</span>
            {accion.label}
          </button>
        ))}
      </div>
    </div>
  );
}
