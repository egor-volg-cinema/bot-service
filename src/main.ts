import { createBot } from "@modules/bot/bot.factory"

 

async function bootstrap() {
	try {
		const bot = createBot()
		bot.launch()
	} catch (error) {
		console.error('Failed to start bot: ', error)
		process.exit(1)
	}
}

bootstrap()
