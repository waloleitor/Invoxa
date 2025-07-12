import { useState } from "react";

export default function CargarPDF() {
  const [archivo, setArchivo] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type !== "application/pdf") {
      alert("Solo se permiten archivos PDF");
      return;
    }
    setArchivo(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!archivo) {
      alert("Debes seleccionar un archivo PDF");
      return;
    }
    console.log("Archivo PDF cargado:", archivo.name);
    // Aquí luego se enviará al backend con FormData
  };

  return (
    <div className="max-w-xl mx-auto bg-base-100 p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-primary">Cargar factura en PDF</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full"
        />

        <button type="submit" className="btn btn-primary w-full">
          Subir archivo PDF
        </button>
      </form>
    </div>
  );
}
