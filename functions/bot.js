import { getDatabase, ref, set } from 'firebase/database'
import { db } from './config.js'
import { create } from './requests.js'

import TelegramBot from 'node-telegram-bot-api'
import { button, buttonArr } from './components/button.js'
import * as dotenv from 'dotenv'
dotenv.config()

const bot = new TelegramBot(process.env.TOKEN, { polling: true })
// const data = { name: 'example23' }
button()
const keyMy = {
	reply_markup: JSON.stringify({
		inline_keyboard: buttonArr,
	}),
}

bot.on('message', msg => {
	const text = msg.text
	const cId = msg.chat.id
	if (text === '/start') {
		bot.sendMessage(
			cId,
			`Привіт, ${msg.from.username} 👋\nЯ Juniorc_bot 😉\nРадий тебе бачити, вибирай тему 👇`,
			keyMy
		)
		create(msg.from.id, msg.from.username, msg.from.first_name)
	}
})
