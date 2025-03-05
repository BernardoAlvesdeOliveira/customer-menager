import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between">
            <h1 className="text-xl">Barbearia</h1>
            <nav>
                <Link className="mx-2" to="/">Home</Link>
                <Link className="mx-2" to="/agendamentos">Agendamentos</Link>
                <Link className="mx-2" to="/login">Login</Link>
            </nav>
        </header>
    );
}

export default Header;
