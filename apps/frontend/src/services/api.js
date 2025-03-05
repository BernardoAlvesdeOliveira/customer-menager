const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const fetchAgendamentos = async () => {
    const response = await fetch(`${API_URL}/agendamentos`);
    return response.json();
};

export const createAgendamento = async (data) => {
    const response = await fetch(`${API_URL}/agendamentos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
};
