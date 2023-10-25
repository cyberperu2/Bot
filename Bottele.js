const fetch = require('node-fetch');
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('6411622214:AAFnHMSf-D4zmw-hwq4hveU3MQv-9qgxFcU', {polling: true});

bot.onText(/\/gettext/, (msg) => {
 const chatId = msg.chat.id;
 const githubPath = 'https://raw.githubusercontent.com/cyberperu2/izin/main/IP';
 fetch(`https://raw.githubusercontent.com/${githubPath}`)
   .then(response => response.text())
   .then(text => {
     bot.sendMessage(chatId, text);
   })
   .catch(error => console.error('Error:', error));
});
