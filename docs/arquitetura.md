## 🏗 Arquitetura do Sistema

O **Barbearia System** é um sistema de agendamento de barbearia que integra um site para clientes, um backend para gerenciamento de dados e um bot do Telegram para comunicação com o barbeiro. As tecnologias utilizadas incluem:

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Spring Boot
- **Banco de Dados**: PostgreSQL
- **Bot do Telegram**: Django
- **Orquestração**: Docker e Docker Compose

### 🔄 Fluxo de Funcionamento
1. O cliente acessa o site e agenda um horário.
2. O backend valida e salva o agendamento no banco de dados.
3. O bot do Telegram consulta os agendamentos diariamente e envia a lista ao barbeiro às 06:00 AM.
4. O barbeiro pode interagir com o bot para gerenciar horários.