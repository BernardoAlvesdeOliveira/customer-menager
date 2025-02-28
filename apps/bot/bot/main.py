import os
import asyncio
from telegram import Update
from telegram.ext import (
    ApplicationBuilder,
    CommandHandler,
    MessageHandler,
    CallbackContext,
    filters
)

TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")

async def start(update: Update, context: CallbackContext):
    await update.message.reply_text("Olá! Bem-vindo ao bot da barbearia.\nUse /help para ver a lista de comandos.")

async def help_command(update: Update, context: CallbackContext):
    await update.message.reply_text("Aqui estão os comandos disponíveis:\n/start - Iniciar o bot")

async def echo(update: Update, context: CallbackContext):
    await update.message.reply_text(update.message.text)

def main():
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("help", help_command))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))

    print("Bot está rodando...")
    app.run_polling()

if __name__ == "__main__":
    main()
