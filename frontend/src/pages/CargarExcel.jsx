import { useState } from "react";

export default function CargarExcel() {
  const [archivo, setArchivo] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      alert("Solo se permiten archivos .xlsx");
      return;
    }
    setArchivo(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!archivo) {
      alert("Debes seleccionar un archivo .xlsx");
      return;
    }
    console.log("Archivo Excel cargado:", archivo.name);
    // Aquí luego se enviará al backend con FormData
  };

  return (
    <div className="max-w-xl mx-auto bg-base-100 p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-primary">Importar facturas desde Excel</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="file"
          accept=".xlsx"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full"
        />

        <button type="submit" className="btn btn-primary w-full">
          Subir archivo Excel
        </button>
      </form>
    </div>
  );
}
