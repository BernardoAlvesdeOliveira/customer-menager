import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StricMode>
        <App />
    </React.StricMode>
);