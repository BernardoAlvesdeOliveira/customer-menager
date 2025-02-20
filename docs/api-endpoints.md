## 🔗 API Endpoints

### `GET /agendamentos`
Retorna a lista de agendamentos.

#### Exemplo de resposta:
```json
[
  { "id": 1, "cliente": "João", "data": "2025-02-21", "hora": "10:00" },
  { "id": 2, "cliente": "Maria", "data": "2025-02-21", "hora": "11:00" }
]
```

### `POST /agendamentos`
Cria um novo agendamento.

#### Corpo da requisição:
```json
{
  "cliente": "Carlos",
  "data": "2025-02-22",
  "hora": "14:00"
}
```

#### Resposta:
```json
{ "message": "Agendamento criado com sucesso!" }
```