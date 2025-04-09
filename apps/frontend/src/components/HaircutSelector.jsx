// apps/frontend/src/components/HaircutSelector.js
import React from 'react';

const HaircutSelector = ({ selectedHaircut, setSelectedHaircut, nextStep }) => {
  const options = ['Corte simples', 'Corte degradê', 'Corte navalhado'];

  return (
    <div className="step fade-in">
      <h2 className="text-xl font-bold mb-4">Escolha o tipo de corte</h2>
      <div className="space-y-3">
        {options.map((option) => (
          <div
            key={option}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              selectedHaircut === option ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'
            }`}
            onClick={() => setSelectedHaircut(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <button
        onClick={nextStep}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        disabled={!selectedHaircut}
      >
        Próximo
      </button>
    </div>
  );
};

export default HaircutSelector;
