import { CONFIG } from '@config'
import { Session, TelegrafContext } from '@shared/interfaces'
import { session, Telegraf } from 'telegraf'

import { registerBotHandlers } from './handlers'

export function createBot() {
	const bot = new Telegraf<TelegrafContext>(CONFIG.BOT_TOKEN)

	bot.use(
		session({
			defaultSession: (): Session => ({
				id: undefined
			})
		})
	)

	registerBotHandlers(bot)

	return bot
}
