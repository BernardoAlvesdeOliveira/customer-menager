import { API_BASE_URL } from '../config';

export async function getAgendamentos() {
    try {
        const response = await fetch(`${API_BASE_URL}/agendamentos`);
        if (!response.ok) throw new Error('Erro ao buscar agendamentos');
        return await response.json();
    } catch (error) {
        console.error('Erro', error);
        throw error;
    }
}
