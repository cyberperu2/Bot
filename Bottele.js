const fetch = require('node-fetch');
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('6338068936:AAHiZflXdNWM6vrWgu474SXhzxcKZ_ITDv0', {polling: true});

bot.onText(/\/gettext/, (msg) => {
 const chatId = msg.chat.id;
 const githubPath = 'https://raw.githubusercontent.com/Paper890/izin/main/IP';
 fetch(`https://raw.githubusercontent.com/${githubPath}`)
   .then(response => response.text())
   .then(text => {
     bot.sendMessage(chatId, text);
   })
   .catch(error => console.error('Error:', error));
});
