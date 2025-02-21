from telegram.ext import CommandHandler

def start(update, context):
    update.message.reply_text("Olá! Use /help para ver os comandos disponíveis.")

def help_command(update, context):
    update.message.replay_text("/add - Adicionar um agendamento\n/edit - Editar um agendamento\n/delete - Remover um agendamento")

def register_handlers(dispatcher):
    dispatcher.add_handler(CommandHandler("/start", start))
    dispatcher.add_handler(CommandHandler("/help", help_command))
