FROM postgres:latest

ENV POSTGRES_DB=barbearia
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=1234

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432