import { CONFIG } from '@config'
import { Telegraf } from 'telegraf'

import { registerBotHandlers } from './handlers'

export function createBot() {
	const bot = new Telegraf(CONFIG.BOT_TOKEN)

	registerBotHandlers(bot)

	return bot
}
