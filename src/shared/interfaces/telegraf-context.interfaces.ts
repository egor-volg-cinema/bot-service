import { Context } from 'telegraf'

export interface Session {
	id: string | undefined
}

export interface TelegrafContext extends Context {
	session: Session
}
