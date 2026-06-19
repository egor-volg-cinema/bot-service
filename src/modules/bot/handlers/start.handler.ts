import { Telegraf } from 'telegraf'

export function startHandler(bot: Telegraf) {
	bot.start(async ctx => {
		await ctx.reply('Приветствую!')
	})
}
