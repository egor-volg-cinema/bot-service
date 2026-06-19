import { Telegraf } from 'telegraf'

import { startHandler } from './start.handler'

export function registerBotHandlers(bot: Telegraf) {
	startHandler(bot)
}

