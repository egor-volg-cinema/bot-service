import { CONFIG } from '@config'
import { PROTO_PATH } from '@egorcolgcinema/contracts'
import { credentials, loadPackageDefinition } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'

const packageDef = loadSync(PROTO_PATH.AUTH, {
	keepCase: false,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true
})

const proto = loadPackageDefinition(packageDef) as any

export const authClient = new proto.auth.v1.AuthService(
	CONFIG.AUTH_GRPC_URL,
	credentials.createInsecure()
)
