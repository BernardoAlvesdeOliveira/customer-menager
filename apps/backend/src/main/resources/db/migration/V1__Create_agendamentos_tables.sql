-- V1__Create_agendamentos_table.sql
CREATE TABLE IF NOT EXISTS agendamentos (
    id SERIAL PRIMARY KEY,
    cliente VARCHAR(255) NOT NULL,
    datas DATE NOT NULL,
    hora TIME NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
