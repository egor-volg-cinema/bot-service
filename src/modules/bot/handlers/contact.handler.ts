import {
	TelegramCompleteRequest,
	TelegramCompleteResponse
} from '@egorcolgcinema/contracts/gen/auth'
import { authClient } from '@infrastructure/grpc/auth.client'
import { TelegrafContext } from '@shared/interfaces'
import { Telegraf } from 'telegraf'

function callUnary<T>(method, request) {
	return new Promise<T>((resolve, reject) => {
		method(request, (err, res) => (err ? reject(err) : resolve(res)))
	})
}

export function registerContactHandler(bot: Telegraf<TelegrafContext>) {
	bot.on('contact', async ctx => {
		const phone = ctx.message.contact.phone_number

		if (!ctx.chat.id || !ctx.session.id)
			return ctx.reply(
				'Что-то пошло не так! Пожалуйста, попробуйте повторить процесс на сайте.'
			)

		const request: TelegramCompleteRequest = {
			sessionId: ctx.session.id,
			phone
		}

		const { sessionId } = await callUnary<TelegramCompleteResponse>(
			authClient.telegramComplete.bind(authClient),
			request
		)

		await ctx.reply('Регистрация завершена успешно!', {
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: 'Вернуться на сайт',
							url: `https://egorcolgcinema.com/auth/tg-finalize?sessionId=${sessionId}`
						}
					]
				]
			}
		})
	})
}
