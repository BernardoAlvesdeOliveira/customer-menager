// apps/frontend/src/components/ClientForm.js
import React, { useState } from 'react';

const ClientForm = ({ selectedHaircut, selectedDate, selectedTime, prevStep }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    const agendamento = {
      nome: name,
      email: email,
      corte: selectedHaircut,
      dia: selectedDate,
      horario: selectedTime,
    };

    try {
      const response = await fetch('http://localhost:8080/api/agendamentos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(agendamento),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Erro ao enviar agendamento.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  return submitted ? (
    <div className="step fade-in text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Agendamento realizado com sucesso!</h2>
      <p>Obrigado, {name}! Enviamos um e-mail para {email} com os detalhes.</p>
    </div>
  ) : (
    <div className="step fade-in">
      <h2 className="text-xl font-bold mb-4">Confirme seus dados</h2>
      <input
        type="text"
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <input
        type="email"
        placeholder="Seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <div className="flex justify-between">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
          Voltar
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          disabled={!name || !email}
        >
          Finalizar Agendamento
        </button>
      </div>
    </div>
  );
};

export default ClientForm;
