from telegram import Bot
from telegram.ext import Updater
from bot.commands import register_handlers
import os

TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
bot = Bot(token=TOKEN)

def send_message(message):
    chat_id = os.getenv("CHAT_ID")
    bot.send_message(chat_id=chat_id, text=message)

def main():
    updater = Updater(token=TOKEN, use_context=True)
    dp = updater.dispatcher
    register_handlers(dp)
    updater.start_polling()
    updater.idle()

if __name__ == "__main__":
    main()