import os
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, MessageHandler, filters, CallbackContext # type: ignore

async def start(update: Update, context: CallbackContext):
    await update.message.reply_text("Olá! Bem-vindo ao bot da barbearia.")

async def help_command(update: Update, context: CallbackContext):
    help_text = (
        "Comandos disponíveis:\n"
        "/start - Iniciar o bot\n"
        "/help - Mostrar ajuda\n"
        "/agendar - Fazer um agendamento\n"
        "/cancelar - Cancelar um agendamento\n"
        "/horarios - Ver horários disponíveis"
    )
    await update.message.reply_text(help_text)

async def agendar(update: Update, context: CallbackContext):
    await update.message.reply_text("Envie a data e o horário do seu agendamento (exemplo: 2025-03-01 14:30).")

async def cancelar(update: Update, context: CallbackContext):
    await update.message.reply_text("Envie o ID do agendamento que deseja cancelar.")

async def horarios(update: Update, context: CallbackContext):
    await update.message.reply_text("Os horários disponíveis são:\n- 09:00\n- 10:30\n- 14:00\n- 16:00")

def register_handlers(app):
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("help", help_command))
    app.add_handler(CommandHandler("agendar", agendar))
    app.add_handler(CommandHandler("cancelar", cancelar))
    app.add_handler(CommandHandler("horarios", horarios))

if __name__ == "__main__":
    TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
    if not TOKEN:
        raise ValueError("Erro: TELEGRAM_BOT_TOKEN não foi definido.")

    app = ApplicationBuilder().token(TOKEN).build()
    register_handlers(app)
    print("Bot iniciado com sucesso!")
    app.run_polling()
