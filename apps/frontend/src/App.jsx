import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agendamentos from "./pages/Agendamentos";
import Login from "./pages/Login";
import Header from "./components/Header";
import Foother from "./components/Foother";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agendamentos" element={<Agendamentos />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Foother />
        </Router>
    );
}

export default App;
