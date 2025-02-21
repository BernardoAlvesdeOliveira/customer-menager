# 🚀 Backend - Barbearia System

Este é o backend do sistema de agendamento da barbearia, desenvolvido com **Spring Boot**.

## 📌 Endpoints
- `GET /api/agendamentos` → Lista todos os agendamentos.
- `POST /api/agendamentos` → Cria um novo agendamento.
- `DELETE /api/agendamentos/{id}` → Remove um agendamento.

## 📦 Tecnologias
- Spring Boot
- PostgreSQL
- Docker

## 🚀 Como rodar?
1. **Criar o JAR do projeto**:
   ```sh
   mvn clean package

2. **Subir o backend com Docker**:
    ```sh
    docker-compose up -d backend
