import { TelegrafContext } from '@shared/interfaces'
import { Telegraf } from 'telegraf'

export function registerContactHandler(bot: Telegraf<TelegrafContext>) {
	bot.on('contact', async ctx => {
		const phone = ctx.message.contact.phone_number

		console.log('ctx', phone)
	})
}
