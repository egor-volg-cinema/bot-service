import { TelegrafContext } from '@shared/interfaces'
import { Telegraf } from 'telegraf'

import { registerContactHandler } from './contact.handler'
import { startHandler } from './start.handler'

export function registerBotHandlers(bot: Telegraf<TelegrafContext>) {
	startHandler(bot)
	registerContactHandler(bot)
}
