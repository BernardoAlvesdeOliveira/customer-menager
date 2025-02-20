# 📌 Banco de Dados - Barbearia System

## 📁 Estrutura do Banco de Dados
O banco de dados **barbearia** contém a tabela `agendamentos` para armazenar os horários dos clientes.

### 🛠 Como Configurar
1. Certifique-se de ter o Docker instalado.
2. Execute o seguinte comando para subir o banco de dados:
   ```sh
   docker-compose up -d database
   ```
3. Para acessar o banco de dados via terminal:
   ```sh
   docker exec -it barbearia-database psql -U user -d barbearia
   ```

🚀 **Se precisar de suporte, verifique os logs do container!**