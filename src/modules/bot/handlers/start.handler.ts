import { TelegrafContext } from '@shared/interfaces'
import { Markup, Telegraf } from 'telegraf'

export function startHandler(bot: Telegraf<TelegrafContext>) {
	bot.start(async ctx => {
		const sessionId = ctx.startPayload

		if (!sessionId) {
			return ctx.reply(
				'Привет! Чтобы продолжить, авторизуйтесь на сайте.',

				Markup.inlineKeyboard([
					[
						Markup.button.url(
							'Авторизация',
							'https://egorcolgcinema.com/auth/login'
						)
					]
				])
			)
		}
		ctx.session.id = sessionId

		await ctx.reply(
			'Для завершения регистрации нажмите отправьте мне свой номер телефона.',
			Markup.keyboard([[Markup.button.contactRequest('Отправить номер')]])
		)
	})
}
