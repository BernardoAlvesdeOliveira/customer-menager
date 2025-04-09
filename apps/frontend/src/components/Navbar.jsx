// apps/frontend/src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-blue-700 text-white shadow-lg mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Barbearia do Bernardo</h1>
        <ul className="flex gap-4 text-sm">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Contato</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
