// apps/frontend/src/components/ScheduleTable.js
import React from 'react';

const ScheduleTable = ({ selectedDate, selectedTime, setSelectedDate, setSelectedTime, prevStep, nextStep }) => {
  const dates = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  const times = ['08:00', '10:00', '13:00', '15:00', '17:00'];

  return (
    <div className="step fade-in">
      <h2 className="text-xl font-bold mb-4">Escolha o dia e horário</h2>

      <div className="mb-4">
        <p className="mb-2 font-semibold">Dias disponíveis:</p>
        <div className="flex flex-wrap gap-2">
          {dates.map((day) => (
            <button
              key={day}
              className={`px-4 py-2 rounded border ${
                selectedDate === day ? 'bg-green-500 text-white' : 'hover:bg-green-100'
              }`}
              onClick={() => setSelectedDate(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="mb-2 font-semibold">Horários disponíveis:</p>
        <div className="flex flex-wrap gap-2">
          {times.map((time) => (
            <button
              key={time}
              className={`px-4 py-2 rounded border ${
                selectedTime === time ? 'bg-yellow-500 text-white' : 'hover:bg-yellow-100'
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
          Voltar
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={!selectedDate || !selectedTime}
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default ScheduleTable;
