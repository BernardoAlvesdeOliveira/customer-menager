import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between">
            <h1 className="text-x1">Barbearia</h1>
            <nav>
                <link className="mx-2" to="/">Home</link>
                <link className="mx-2" to="/agendamentos">Agendamentos</link>
                <link className="mx-2" to="/login">Login</link>
            </nav>
        </header>
    );
}

export default Header;
