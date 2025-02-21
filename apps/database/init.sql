DO
$$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_catalog.pg_database WHERE datname = 'barbearia') THEN
        CREATE DATABASE barbearia;
    END IF;
END
$$
LANGUAGE plpgsql;

\c barbearia;

CREATE TABLE IF NOT EXISTS agendamentos (
    id SERIAL PRIMARY KEY,
    cliente VARCHAR(255) NOT NULL,
    datas DATE NOT NULL,
    hora TIME NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
