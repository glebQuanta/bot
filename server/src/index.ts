import TelegramBot from "node-telegram-bot-api";

const token = "7377650802:AAFan1qp354sFZw7kR7FQ7_thpPLoXxW51I";

const bot = new TelegramBot(token, { polling: true });
const urlWebApp = "https://coinmarketcap.com/ru/";

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, "Ниже появится кнопка запуска", {
      reply_markup: {
        inline_keyboard: [[{ text: "Watch", web_app: { url: urlWebApp } }]],
      },
    });
  }
});
