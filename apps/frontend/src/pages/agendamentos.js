import { getAgendamentos } from "../assets/js/api";

export default async function AgendamentosPage() {
    const agendamentos = await getAgendamentos();

    return `
    <h1>Agendamentos</h1>
    <ul>
      ${agendamentos.map(agendamento => `<li>${agendamento.cliente} - ${agendamento.data}</li>`).join('')}
    </ul>
  `;
}