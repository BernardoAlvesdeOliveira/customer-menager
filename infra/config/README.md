# 📌 Infraestrutura do Barbearia System

## 📁 Configuração do Nginx
O arquivo `nginx.conf` define o servidor reverso para encaminhar requisições ao backend.

### 🚀 Como configurar
1. Copie `nginx.conf` para `/etc/nginx/nginx.conf` se estiver rodando localmente.
2. Reinicie o Nginx:
   ```sh
   sudo systemctl restart nginx
   ```

## ⚙️ Configuração de Produção
O arquivo `application-prod.yml` contém as configurações do banco de dados para o ambiente de produção.

### Como aplicar as configurações:
1. Configure as variáveis de ambiente no servidor.
2. Certifique-se de que o banco PostgreSQL está rodando corretamente.
3. Reinicie a aplicação Spring Boot para aplicar as mudanças.

🚀 **Se precisar de suporte, verifique os logs de erro!**