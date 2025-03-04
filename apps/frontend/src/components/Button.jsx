import React from 'react';

function Button({ text, onClick }) {
    return (
        <button
         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
         onClick={onClick}
         >
            {text}
         </button>
    );
}

export default Button;
