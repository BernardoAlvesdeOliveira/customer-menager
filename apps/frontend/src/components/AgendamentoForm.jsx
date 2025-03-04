import React, { useState } from "react";
import { createAgendamento } from "../services/api";

function AgendamentoForm() {
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAgendamento({ data, hora });
    alert("Agendamento realizado com sucesso!");
    setData("");
    setHora("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <label className="block">
        Data:
        <input
          type="date"
          className="border p-2 w-full"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
      </label>
      <label className="block mt-2">
        Hora:
        <input
          type="time"
          className="border p-2 w-full"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="mt-4 bg-green-600 text-white p-2 rounded">
        Agendar
      </button>
    </form>
  );
}

export default AgendamentoForm;
