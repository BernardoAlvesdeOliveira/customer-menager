import schedule
import time
from bot.database import get_appointments
from bot.main import send_message

def send_appointments():
    agendamentos = get_appointments()
    if agendamentos:
        mensagem = "📋 Agendamentos para hoje:\n" + "\n".join(agendamentos)
        send_message(mensagem)

schedule.every().day.at("06:00").do(send_message)

def start_define():
    while True:
        schedule.run_pending()
        time.sleep(60)