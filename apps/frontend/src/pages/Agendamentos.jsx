import React, { useEffect, useState } from "react";
import { fetchAgendamentos } from "../services/api";
import AgendamentoForm from "../components/AgendamentoForm";

function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    async function loadAgendamentos() {
      const data = await fetchAgendamentos();
      setAgendamentos(data);
    }
    loadAgendamentos();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Agendamentos</h2>
      <AgendamentoForm />
      <ul className="mt-4">
        {agendamentos.map((agendamento) => (
          <li key={agendamento.id} className="p-2 border-b">
            {agendamento.data} - {agendamento.hora}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Agendamentos;
