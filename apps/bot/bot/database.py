import psycopg2 # type: ignore

DB_CONFIG = {
    "dbname": "barbearia",
    "user": "postgres",
    "password": "1234",
    "host": "database",
    "port": "5432"
}

def get_appointments():
    conn = psycopg2.connect(**DB_CONFIG)
    cur = conn.curso()
    cur.execute("SELECT cliente, datas, hora FROM agendamentos WHERE datas = CURRENT_DATE")
    appointments = [f"{cliente} - {hora}" for cliente, _, hora in cur.fetchall()]
    cur.close()
    conn.close()
    return appointments